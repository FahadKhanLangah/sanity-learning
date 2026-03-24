import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
    }),
    defineField({
      name: 'summary',
      title: 'Project Summary',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'relatedService',
      title: 'Related Service',
      description: 'Which service category does this project belong to?',
      type: 'reference',
      to: [{type: 'service'}],
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live Site URL',
      type: 'url',
    }),
    defineField({
      name: 'clientName',
      title: 'Client Name / Company',
      type: 'string',
    }),
    defineField({
      name: 'projectDuration',
      title: 'Project Duration',
      type: 'string',
      description: 'e.g., "3 Months" or "8 Weeks"',
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'text',
      rows: 4,
      description: 'What problem was the client facing before they hired you?',
    }),
    defineField({
      name: 'solution',
      title: 'The Solution',
      type: 'text',
      rows: 4,
      description: 'How did Noxvira solve it technically?',
    }),
    defineField({
      name: 'keyResults',
      title: 'Key Results / Metrics',
      type: 'array',
      of: [{type: 'string'}],
      description: 'e.g., "200% faster load times", "$50k increase in MRR"',
    }),
  ],
})
