# Data Tables Feature Guide

## Overview

This feature allows you to create and manage data tables in Sanity CMS that can be referenced and displayed in blog posts. Tables are rendered with customizable styles and are fully responsive.

## Features

- ✅ Create tables with custom headers and rows
- ✅ Multiple table styles (default, striped, bordered, compact)
- ✅ Reference tables in blog posts
- ✅ Responsive table rendering
- ✅ Table preview in Sanity Studio
- ✅ Row/column count indicators

## Schema Structure

### Table Schema (`tableType.ts`)

```typescript
{
  name: 'dataTable',
  title: 'Data Table',
  type: 'document',
  fields: [
    title,           // String - Table title
    slug,           // Slug - Unique identifier
    description,    // Text - Optional table description
    headers,        // Array of strings - Column headers
    rows,          // Array of row objects with cells
    tableStyle     // String - Style variant
  ]
}
```

### Post Integration

Blog posts can reference multiple tables via the `dataTables` field:

```typescript
{
  name: 'dataTables',
  title: 'Data Tables',
  type: 'array',
  of: [{ type: 'reference', to: [{ type: 'dataTable' }] }]
}
```

## Usage in Sanity Studio

### Creating a Table

1. Navigate to "Data Tables" in the Sanity Studio
2. Click "Create new Data Table"
3. Fill in the required fields:
   - **Title**: Display name for the table
   - **Slug**: URL-friendly identifier
   - **Description**: Optional context for the table
   - **Headers**: Column names (add/remove as needed)
   - **Rows**: Data rows with cells corresponding to headers
   - **Table Style**: Choose from available styles

### Adding Tables to Blog Posts

1. Edit a blog post
2. Scroll to the "Data Tables" section
3. Click "Add item" and select existing tables
4. Tables will appear after the main blog content

## Table Styles

### Default

Clean, professional styling with hover effects

### Striped

Alternating row colors for better readability

### Bordered

Full borders around all cells

### Compact

Reduced padding for dense data display

## Frontend Rendering

Tables are automatically rendered in blog posts using the `TableComponent`:

```tsx
{
  blogPost.dataTables && blogPost.dataTables.length > 0 && (
    <div className="my-8">
      {blogPost.dataTables.map((table, index) => (
        <TableComponent
          key={table.slug?.current || table._id || index}
          table={table}
          className="mb-8 last:mb-0"
        />
      ))}
    </div>
  );
}
```

## Technical Implementation

### Files Modified/Created

- `sanity/schemaTypes/tableType.ts` - Table schema definition
- `sanity/schemaTypes/postType.ts` - Added dataTables field
- `sanity/schemaTypes/index.ts` - Export table schema
- `sanity/structure.ts` - Added table navigation
- `app/utils/api/SanityAPI.tsx` - Enhanced GROQ queries
- `types/blog.ts` - TypeScript definitions
- `components/Blog/lib/TableComponent.tsx` - React component
- `components/Blog/blogDetails.tsx` - Integration
- `components/Blog/blogDetailsData.tsx` - Data mapping
- `app/globals.css` - Table-specific styles

### GROQ Query Enhancement

```groq
dataTables[]-> {
  _id,
  title,
  description,
  headers,
  rows,
  tableStyle,
  slug
}
```

## Styling Classes

### CSS Classes Available

- `.table-default` - Base table styling
- `.table-striped` - Striped rows
- `.table-bordered` - Full borders
- `.table-compact` - Compact spacing

### Responsive Design

- Tables scroll horizontally on small screens
- Maintains readability across all devices
- Touch-friendly on mobile devices

## Testing

### Fallback Data

Sample table data is included in `blogDetailsData.tsx` for testing:

```javascript
dataTables: [
  {
    _id: "sample-table-1",
    title: "Sample Data Table",
    headers: ["Feature", "Basic Plan", "Pro Plan", "Enterprise"],
    rows: [
      { cells: ["Users", "5", "25", "Unlimited"] },
      // ... more rows
    ],
    tableStyle: "striped",
  },
];
```

### Manual Testing Steps

1. Start development servers: `npm run dev`
2. Navigate to a blog post
3. Verify table rendering (fallback data should show)
4. Test Sanity Studio table creation
5. Test table assignment to posts
6. Verify responsive behavior

## Troubleshooting

### Common Issues

1. **Tables not displaying**: Check if `dataTables` field is populated
2. **Styling issues**: Verify CSS classes are loading correctly
3. **Data not fetching**: Check GROQ query in SanityAPI
4. **Type errors**: Ensure TypeScript definitions match schema

### Debug Steps

1. Check browser console for errors
2. Verify Sanity query response in Network tab
3. Test with fallback data first
4. Validate schema in Sanity Studio

## Future Enhancements

- [ ] Table sorting functionality
- [ ] CSV export feature
- [ ] Advanced styling options
- [ ] Table search/filter
- [ ] Cell formatting options (bold, italic, links)
- [ ] Table templates
