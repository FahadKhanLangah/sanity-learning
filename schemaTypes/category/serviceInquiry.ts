import { defineField, defineType } from "sanity";

export default defineType({
  name: "serviceInquiry",
  title: "Service Inquiry",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: rule => rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone / WhatsApp",
      type: "string",
    }),
    defineField({
      name: "service",
      title: "Selected Service",
      type: "reference",
      to: [{ type: "fixedPricingService" }],
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["new", "contacted", "closed"],
      },
      initialValue: "new",
    }),
  ],
});
