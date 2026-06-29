import {defineField, defineArrayMember} from 'sanity'

/**
 * MINIMAL, ADDITIVE extension for the existing `page` document type.
 *
 * Adds ONE optional object field, `generatedMetadata`, that holds all generated
 * traceability/review data in a single defined place — so nothing is written as
 * an unknown top-level field. Editorial fields (title, slug, summary) and the
 * body (content, Portable Text) keep using the existing `page` fields.
 *
 * Apply in your Studio:
 *   import {generatedMetadataField} from './page-documentation-fields'
 *   defineType({ name: 'page', type: 'document', fields: [ ...existingFields, generatedMetadataField ] })
 * then `npx sanity@latest schema deploy`.
 *
 * Additive + optional → existing `page` and `post` documents are unaffected.
 */
export const generatedMetadataField = defineField({
  name: 'generatedMetadata',
  title: 'Generated metadata',
  type: 'object',
  description: 'Traceability/review data carried from the generation pipeline. Internal — not editorial content.',
  options: {collapsible: true, collapsed: true},
  fields: [
    {name: 'pageType', title: 'Page type', type: 'string'},
    {name: 'section', title: 'Section', type: 'string'},
    {name: 'category', title: 'Category', type: 'string'},
    {name: 'readyForSanityImport', title: 'Ready for Sanity import', type: 'boolean'},
    {name: 'questionsForReview', title: 'Questions for review', type: 'array', of: [defineArrayMember({type: 'string'})]},
    {
      name: 'publicationBlockers', title: 'Publication blockers', type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          {name: 'type', type: 'string'},
          {name: 'message', type: 'text', rows: 2},
          {name: 'severity', type: 'string'},
        ],
      })],
    },
    {name: 'tags', title: 'Tags', type: 'array', of: [defineArrayMember({type: 'string'})]},
    {name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3},
    {
      name: 'classification', title: 'Classification', type: 'object',
      fields: [
        {name: 'primaryCategory', type: 'string'},
        {name: 'primaryContext', type: 'string'},
        {name: 'alsoRelevantContexts', type: 'string'},
        {name: 'connectsTo', type: 'string'},
      ],
    },
    // provenance
    {name: 'sourceFile', title: 'Source file', type: 'string', readOnly: true},
    {name: 'sourcePath', title: 'Source path', type: 'string', readOnly: true},
    {name: 'sanityDocumentIdCandidate', title: 'Source-declared id candidate', type: 'string', readOnly: true},
  ],
})

export default generatedMetadataField
