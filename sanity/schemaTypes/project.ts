import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options:{
        hotspot: true,
      }
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    }),
    defineField({
      name: "linkBuild",
      title: "LinkBuild",
      type: "url",
    }),
    
  ],
});
