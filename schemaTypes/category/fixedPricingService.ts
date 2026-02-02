import { defineField, defineType } from "sanity";

export default defineType({
  name: "fixedPricingService",
  title: "Fixed Pricing Service",
  type: "document",
  fields: [
    // Identity
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: rule => rule.required(),
    }),

    // Relations
    defineField({
      name: "category",
      title: "Service Category",
      type: "reference",
      to: [{ type: "service" }], // or serviceCategory if you add it
      validation: rule => rule.required(),
    }),

    // Description
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "fullDescription",
      title: "Full Description",
      type: "text",
      rows: 6,
    }),

    // Pricing
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      initialValue: "USD",
    }),

    // Delivery
    defineField({
      name: "deliveryDays",
      title: "Delivery Time (Days)",
      type: "number",
    }),
    defineField({
      name: "revisions",
      title: "Revisions Included",
      type: "number",
    }),

    // Scope control
    defineField({
      name: "features",
      title: "What’s Included",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "exclusions",
      title: "What’s NOT Included",
      type: "array",
      of: [{ type: "string" }],
    }),

    // Tech
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "serviceType",
      title: "Service Type",
      type: "string",
      options: {
        list: [
          { title: "Fixed Package", value: "fixed" },
          { title: "All-in-One Package", value: "bundle" },
          { title: "Custom Solution", value: "custom" },
        ],
      },
      initialValue: "fixed",
    }),
    defineField({
      name: "scopeSummary",
      title: "Scope Summary",
      type: "text",
      rows: 3,
    }), defineField({
      name: "startingPrice",
      title: "Starting Price",
      type: "number",
      description: "Used for custom solutions only",
    }),
    defineField({
      name: "ctaMode",
      title: "CTA Mode",
      type: "string",
      options: {
        list: [
          { title: "Direct Inquiry", value: "inquiry" },
          { title: "Book Call", value: "call" },
        ],
      },
      initialValue: "inquiry",
    }),
    // Flags
    defineField({
      name: "isPopular",
      title: "Mark as Popular",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
