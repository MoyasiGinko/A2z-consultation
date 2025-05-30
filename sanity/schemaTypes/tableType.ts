// import { Table } from "@sanity/icons"; // Removed because 'Table' does not exist in '@sanity/icons'
import { defineArrayMember, defineField, defineType } from "sanity";

export const tableType = defineType({
  name: "table",
  title: "Table",
  type: "document",
  // icon: Table, // Removed because 'Table' does not exist in '@sanity/icons'
  fields: [
    defineField({
      name: "title",
      title: "Table Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Table Description",
      type: "text",
      rows: 3,
      description: "Optional description for the table",
    }),
    defineField({
      name: "headers",
      title: "Table Headers",
      type: "array",
      of: [
        defineArrayMember({
          type: "string",
          name: "header",
          title: "Header",
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "rows",
      title: "Table Rows",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "row",
          title: "Row",
          fields: [
            defineField({
              name: "cells",
              title: "Cells",
              type: "array",
              of: [
                defineArrayMember({
                  type: "string",
                  name: "cell",
                  title: "Cell",
                }),
              ],
            }),
          ],
          preview: {
            select: {
              cells: "cells",
            },
            prepare({ cells }) {
              return {
                title:
                  cells && cells.length > 0 ? cells.join(" | ") : "Empty row",
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "tableStyle",
      title: "Table Style",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Striped", value: "striped" },
          { title: "Bordered", value: "bordered" },
          { title: "Compact", value: "compact" },
        ],
        layout: "radio",
      },
      initialValue: "default",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      headers: "headers",
      rows: "rows",
    },
    prepare({ title, headers, rows }) {
      const headerCount = headers ? headers.length : 0;
      const rowCount = rows ? rows.length : 0;
      return {
        title: title || "Untitled Table",
        subtitle: `${headerCount} columns, ${rowCount} rows`,
      };
    },
  },
});
