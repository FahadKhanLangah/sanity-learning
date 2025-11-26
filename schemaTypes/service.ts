
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',      // 1. The ID used in the database (API)
  title: 'Service',     // 2. The Label seen by editors in the CMS
  type: 'document',     // 3. 'document' means this is a standalone record
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',   // Basic text input
      validation: rule => rule.required() // Makes this field mandatory
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',     // A URL-friendly ID (e.g., /services/web-development)
      options: {
        source: 'title', // Auto-generates from the title field
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',     // Multi-line text area
      rows: 3
    }),
    defineField({
      name: 'icon',
      title: 'Service Icon',
      type: 'image',
      options: {
        hotspot: true, // Allows you to select the focal point of the image
      },
    }),
  ],
})