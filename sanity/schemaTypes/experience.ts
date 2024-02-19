import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "jobTitle",
      title: "JobTitle",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      
    }),
    defineField({
      name: "company",
      title: "Compnay",
      type: "string",
    }),
    defineField({
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
    }),
    defineField({
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
    }),
    defineField({
      name: "isCurrentlyWorkingHere",
      title: "IsCurrentlyWorkingHere",
      type: "boolean",
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
