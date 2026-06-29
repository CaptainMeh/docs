// Minimal OpenAI Responses API client with strict Structured Outputs (JSON Schema).
// Mirrors the transport already proven in scripts/generate_test_pages.js. Uses global
// fetch (Node 18+); never logs the API key.

const OPENAI_URL = 'https://api.openai.com/v1/responses';
export const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-5.5';
const TIMEOUT_MS = Number(process.env.OPENAI_TIMEOUT_MS || 120000);

// Strict JSON schema for a WikiPage. OpenAI strict mode requires every property to be
// listed in `required` and additionalProperties:false; optional fields are expressed as
// nullable. Post-processing in generate-wiki-pages.ts drops the nulls.
export function wikiPageSchema() {
  return {
    name: 'wiki_page',
    strict: true,
    schema: {
      type: 'object',
      additionalProperties: false,
      properties: {
        slug: { type: 'string' },
        title: { type: 'string' },
        pageType: { type: 'string' },
        category: { type: ['string', 'null'] },
        section: { type: ['string', 'null'] },
        summary: { type: 'string' },
        keyFacts: { type: ['array', 'null'], items: { type: 'string' } },
        bodySections: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            properties: {
              heading: { type: 'string' },
              bodyMarkdown: { type: 'string' },
            },
            required: ['heading', 'bodyMarkdown'],
          },
        },
        evidenceSummary: {
          type: ['object', 'null'],
          additionalProperties: false,
          properties: {
            strongClaims: { type: ['array', 'null'], items: { type: 'string' } },
            weakerClaims: { type: ['array', 'null'], items: { type: 'string' } },
            limitations: { type: ['array', 'null'], items: { type: 'string' } },
          },
          required: ['strongClaims', 'weakerClaims', 'limitations'],
        },
        relatedPageSlugs: { type: ['array', 'null'], items: { type: 'string' } },
        internalLinks: {
          type: ['array', 'null'],
          items: {
            type: 'object',
            additionalProperties: false,
            properties: {
              anchorText: { type: 'string' },
              targetSlug: { type: 'string' },
              reason: { type: ['string', 'null'] },
            },
            required: ['anchorText', 'targetSlug', 'reason'],
          },
        },
        tags: { type: ['array', 'null'], items: { type: 'string' } },
      },
      required: [
        'slug',
        'title',
        'pageType',
        'category',
        'section',
        'summary',
        'keyFacts',
        'bodySections',
        'evidenceSummary',
        'relatedPageSlugs',
        'internalLinks',
        'tags',
      ],
    },
  };
}

function extractText(data: any): string | null {
  if (data && typeof data.output_text === 'string' && data.output_text.length) return data.output_text;
  if (data && Array.isArray(data.output)) {
    const parts: string[] = [];
    for (const item of data.output) {
      if (item && Array.isArray(item.content)) {
        for (const c of item.content) if (c && typeof c.text === 'string') parts.push(c.text);
      }
    }
    if (parts.length) return parts.join('');
  }
  return null;
}

export interface CallArgs {
  system: string;
  user: string;
  schema: ReturnType<typeof wikiPageSchema>;
  maxOutputTokens?: number;
}

/** Single Responses API call returning the parsed JSON object. Throws on any failure. */
export async function callOpenAIStructured<T = unknown>(args: CallArgs): Promise<T> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OPENAI_API_KEY is not set.');

  const res = await fetch(OPENAI_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      input: [
        { role: 'system', content: args.system },
        { role: 'user', content: args.user },
      ],
      text: { format: { type: 'json_schema', ...args.schema } },
      max_output_tokens: args.maxOutputTokens ?? 16000,
    }),
    signal: AbortSignal.timeout ? AbortSignal.timeout(TIMEOUT_MS) : undefined,
  });

  if (!res.ok) {
    const raw = await res.text().catch(() => '');
    let msg = `OpenAI HTTP ${res.status}`;
    try {
      const parsed = JSON.parse(raw);
      msg = parsed?.error?.message || msg;
    } catch {
      if (raw) msg += `: ${raw.slice(0, 300)}`;
    }
    throw new Error(msg);
  }

  const data = await res.json();
  if (data?.status && data.status !== 'completed') {
    const reason = data.incomplete_details?.reason;
    throw new Error(`OpenAI response status "${data.status}"${reason ? ` (${reason})` : ''}`);
  }
  const content = extractText(data);
  if (!content) throw new Error('OpenAI returned no content.');
  return JSON.parse(content) as T;
}
