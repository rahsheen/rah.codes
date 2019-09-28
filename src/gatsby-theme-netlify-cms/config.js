import { createConfig } from 'gatsby-theme-netlify-cms';

const config = createConfig({
  collections: [
    {
      label: 'Pages',
      name: 'pages',
      files: [
        {
          label: 'Index',
          name: 'index',
          file: 'content/pages/index.md',
          fields: [
            {
              label: 'Template Key',
              name: 'templateKey',
              widget: 'hidden',
              default: 'about-page'
            },
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Body', name: 'body', widget: 'markdown' }
          ]
        }
      ]
    },
    {
      name: "blog",
      label: "Blog",
      folder: "content/posts",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields:
        [{ label: "Template Key", name: "templateKey", widget: "hidden", default: "blog-post" },
        { label: "Title", name: "title", widget: "string" },
        { label: "Publish Date", name: "date", widget: "datetime" },
        { label: "Description", name: "description", widget: "text" },
        { label: "Body", name: "body", widget: "markdown" },
        { label: "Tags", name: "tags", widget: "list" },]
    }
  ]
});

export default config;