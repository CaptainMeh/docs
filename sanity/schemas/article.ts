import {defineType, defineField, defineArrayMember} from 'sanity'

/**
 * `article` — generated knowledge-base article (proposal).
 *
 * Mirrors the generated JSON shape under generated/articles/**/*.json so the
 * importer can preserve every field. Parent/subpage placement reuses the existing
 * page tree: `parent` may reference a `page` (e.g. a "Case studies" section page)
 * or another `article`. The full route is built from the parent chain + `slug`,
 * exactly like the existing `page` type.
 *
 * NOTE: this file is a PROPOSAL for the Blog Studio (project r59cxxkd). It is not
 * deployed. Deploying it is a production change that requires explicit approval.
 * It reuses the existing `seo` object type already in the schema.
 */
export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'meta', title: 'Metadata'},
    {name: 'review', title: 'Review & readiness'},
    {name: 'provenance', title: 'Provenance'},
  ],
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', group: 'content', validation: (r) => r.required()}),
    defineField({
      name: 'navTitle', title: 'Navigation label', type: 'string', group: 'content',
      description: 'Sidebar label if different from title; falls back to title.',
    }),
    defineField({
      name: 'slug', title: 'Slug (one segment)', type: 'slug', group: 'content',
      options: {source: 'title', maxLength: 96},
      description: 'URL segment for this page only. Full URL is built from the parent chain.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'parent', title: 'Parent page', type: 'reference', group: 'content',
      to: [{type: 'page'}, {type: 'article'}],
      description: 'The section/parent this article sits under (e.g. the Case studies page).',
    }),
    defineField({name: 'order', title: 'Order among siblings', type: 'number', group: 'content', initialValue: 0}),
    defineField({
      name: 'pageType', title: 'Page type', type: 'string', group: 'meta',
      description: 'Generated article_type, e.g. case-study, capability, context, glossary-term.',
    }),
    defineField({
      name: 'section', title: 'Section', type: 'string', group: 'meta',
      description: 'Source folder under generated/articles/, e.g. "Case studies".',
    }),
    defineField({name: 'category', title: 'Category', type: 'string', group: 'meta'}),

    defineField({name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, group: 'content'}),
    defineField({name: 'summary', title: 'Summary', type: 'text', rows: 3, group: 'content'}),
    defineField({name: 'definition', title: 'Definition', type: 'text', rows: 3, group: 'content'}),

    // First pass: store the generated markdown as text (no Portable Text yet).
    defineField({
      name: 'bodyMarkdown', title: 'Body (Markdown)', type: 'text', rows: 30, group: 'content',
      description: 'Raw generated markdown. Convert to Portable Text in a later pass if desired.',
    }),

    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'meta'}),

    defineField({name: 'tags', title: 'Tags', type: 'array', of: [defineArrayMember({type: 'string'})], options: {layout: 'tags'}, group: 'meta'}),
    defineField({name: 'keyFacts', title: 'Key facts', type: 'array', of: [defineArrayMember({type: 'string'})], group: 'content'}),
    defineField({name: 'limitations', title: 'Limitations', type: 'array', of: [defineArrayMember({type: 'string'})], group: 'review'}),
    defineField({name: 'relatedPageSlugs', title: 'Related page slugs', type: 'array', of: [defineArrayMember({type: 'string'})], group: 'meta'}),

    defineField({
      name: 'claims', title: 'Claims', type: 'array', group: 'review',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          {name: 'claim', type: 'text', rows: 2},
          {name: 'evidenceType', type: 'string'},
          {name: 'sourceStrength', type: 'string'},
          {name: 'notes', type: 'text', rows: 2},
        ],
      })],
    }),
    defineField({
      name: 'internalLinks', title: 'Internal links', type: 'array', group: 'meta',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          {name: 'anchorText', type: 'string'},
          {name: 'targetSlug', type: 'string'},
          {name: 'placementHint', type: 'string'},
          {name: 'reason', type: 'string'},
        ],
      })],
    }),

    defineField({
      name: 'classification', title: 'Classification', type: 'object', group: 'meta',
      fields: [
        {name: 'primaryCategory', title: 'Primary case-study category', type: 'string'},
        {name: 'primaryContext', title: 'Primary context', type: 'string'},
        {name: 'alsoRelevantContexts', title: 'Also-relevant contexts', type: 'string'},
        {name: 'connectsTo', title: 'Connects to', type: 'string'},
      ],
    }),

    // ---- review & readiness (internal) ----
    defineField({name: 'questionsForReview', title: 'Questions for review', type: 'array', of: [defineArrayMember({type: 'string'})], group: 'review'}),
    defineField({
      name: 'publicationBlockers', title: 'Publication blockers', type: 'array', group: 'review',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          {name: 'type', type: 'string'},
          {name: 'message', type: 'text', rows: 2},
          {name: 'severity', type: 'string'},
        ],
      })],
    }),
    defineField({name: 'readyForSanityImport', title: 'Ready for Sanity import', type: 'boolean', group: 'review', initialValue: false}),
    defineField({
      name: 'qualityChecks', title: 'Quality checks', type: 'object', group: 'review',
      fields: [
        {name: 'factsOnlyFromCurrentSource', type: 'boolean'},
        {name: 'documentationStyle', type: 'boolean'},
        {name: 'noMarketingLanguage', type: 'boolean'},
        {name: 'noInventedClaims', type: 'boolean'},
        {name: 'linksOnlyFromLinkingContext', type: 'boolean'},
        {name: 'internalNotesNotPublished', type: 'boolean'},
        {name: 'readyForSanityImport', type: 'boolean'},
      ],
    }),

    // ---- provenance ----
    defineField({name: 'sourceFile', title: 'Source file', type: 'string', group: 'provenance', readOnly: true}),
    defineField({name: 'sourcePath', title: 'Source path', type: 'string', group: 'provenance', readOnly: true}),
    defineField({name: 'sanityDocumentIdCandidate', title: 'Source-declared id candidate', type: 'string', group: 'provenance', readOnly: true}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'pageType', ready: 'readyForSanityImport'},
    prepare({title, subtitle, ready}) {
      return {title, subtitle: `${subtitle || 'article'}${ready ? '' : ' · NOT ready'}`}
    },
  },
})

export default article
