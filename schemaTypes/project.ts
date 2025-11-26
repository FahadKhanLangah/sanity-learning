import { defineField, defineType } from 'sanity'

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
      options: { source: 'title' }
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}], // e.g. ["React", "Node.js", "Tailwind"]
      options: {
        layout: 'tags' // Makes the UI look like clickable tags
      }
    }),
    // LEARNING POINT: References (Connecting documents)
    defineField({
      name: 'relatedService',
      title: 'Related Service',
      description: 'Which service category does this project belong to?',
      type: 'reference',
      to: [{type: 'service'}] // This must match the 'name' in your service.ts
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live Site URL',
      type: 'url'
    })
  ],
})