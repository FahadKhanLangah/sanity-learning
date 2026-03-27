import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service', // 1. The ID used in the database (API)
  title: 'Service', // 2. The Label seen by editors in the CMS
  type: 'document', // 3. 'document' means this is a standalone record
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string', // Basic text input
      validation: (rule) => rule.required(), // Makes this field mandatory
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text', // Multi-line text area
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Service Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'included_features',
      title: 'Included Features',
      description:
        'List the specific deliverables for this service (e.g., Responsive Design, SEO Optimization).',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'process_steps',
      title: 'Process Steps',
      description: 'The step-by-step methodology for how you deliver this service.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'step',
          fields: [
            {
              name: 'step_title',
              title: 'Step Title',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'step_description',
              title: 'Step Description',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    }),
  ],
})
