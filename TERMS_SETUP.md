# Terms and Conditions Setup

This document explains how to set up the dynamic Terms and Conditions page that pulls content from Google Docs.

## Setup Instructions

### 1. Create a Google Docs Document

1. Go to [Google Docs](https://docs.google.com) and create a new document
2. Write your Terms and Conditions content in the document
3. Make sure the document is set to "Anyone with the link can view" (not edit)
4. Copy the document ID from the URL

The document ID is the long string in the URL between `/d/` and `/edit`. For example:

```
https://docs.google.com/document/d/1ABC123DEF456GHI789JKL/edit
```

In this case, the document ID is: `1ABC123DEF456GHI789JKL`

### 2. Configure Environment Variables

1. Copy the `.env.example` file to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

2. Add your Google Docs document ID to the `.env.local` file:
   ```
   GOOGLE_DOCS_TERMS_ID=your_actual_document_id_here
   ```

### 3. Test the Integration

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Navigate to `/terms` to see your Terms and Conditions page
3. The content should load dynamically from your Google Docs document

## Features

- **Dynamic Content**: Content is fetched from Google Docs in real-time
- **Loading States**: Shows skeleton loading while fetching content
- **Error Handling**: Displays error messages and retry options if fetching fails
- **Responsive Design**: Styled to match your site's theme
- **SEO Optimized**: Proper meta tags and page structure

## Customization

### Styling

The terms content is styled using the `styles/terms.css` file. You can modify this file to customize the appearance of your terms content.

### Content Formatting

When writing your Google Docs content, use standard formatting:

- Use headings (H1, H2, H3) for sections
- Use bullet points and numbered lists
- Use bold and italic text as needed
- The content will be automatically styled to match your site's design

## Troubleshooting

### Content Not Loading

1. Check that your Google Docs document is set to "Anyone with the link can view"
2. Verify the document ID in your environment variables
3. Check the browser console for any error messages

### Styling Issues

1. Make sure the `styles/terms.css` file is properly imported
2. Check that your Google Docs content uses standard HTML formatting

### Performance

- The content is cached by the browser
- Consider implementing server-side caching for better performance in production

## Security Notes

- The Google Docs document should be set to "view only" for security
- The document ID is not sensitive information, but keep your environment variables secure
- Consider implementing rate limiting for the API endpoint in production
