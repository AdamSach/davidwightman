import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: 'hugo',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: [
        "site/content/fables",
        "site/content/ikons",
        "site/content/untitled",
        "site/content/collections",
        "site/content/miscellaneous",
        "site/content/biography",
        "site/content" // for homepage and other pages
      ],
      models: [
        {
          name: "Fable",
          type: "object",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "year", type: "number", required: true },
            { name: "dimensions", type: "string", required: true },
            { name: "image", type: "image", required: true },
            { name: "body", type: "markdown", required: true }
          ]
        },
        {
          name: "Ikon",
          type: "object",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "year", type: "number", required: true },
            { name: "dimensions", type: "string", required: true },
            { name: "image", type: "image", required: true },
            { name: "body", type: "markdown", required: true }
          ]
        },
        {
          name: "Untitled",
          type: "object",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "year", type: "number", required: true },
            { name: "dimensions", type: "string", required: true },
            { name: "image", type: "image", required: true },
            { name: "body", type: "markdown", required: true }
          ]
        },
        {
          name: "Collection",
          type: "object",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "year", type: "number", required: true },
            { name: "dimensions", type: "string", required: true },
            { name: "image", type: "image", required: true },
            { name: "body", type: "markdown", required: true }
          ]
        },
        {
          name: "Miscellaneous",
          type: "object",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "year", type: "number", required: true },
            { name: "dimensions", type: "string", required: true },
            { name: "image", type: "image", required: true },
            { name: "body", type: "markdown", required: true }
          ]
        },
        {
          name: "Biography",
          type: "object",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "year", type: "number", required: true },
            { name: "dimensions", type: "string", required: true },
            { name: "image", type: "image", required: true },
            { name: "body", type: "markdown", required: true }
          ]
        },
        {
          name: "Homepage",
          type: "page",
          urlPath: "/",
          filePath: "site/content/_index.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "text", required: true },
            { name: "sharingimage", type: "image", required: false },
            { name: "textcolor", type: "string", required: true },
            { name: "backgroundcolor", type: "string", required: true },
            {
              name: "menu_items",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "heading", type: "string", required: true },
                  { name: "image", type: "image", required: true }
                ]
              }
            }
          ]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "site/static",
        uploadDir: "img",
        publicPath: "/"
      }
    })
  ],
  modelExtensions: [
    { name: "fables", type: "page", urlPath: "/fables/{slug}" },
    { name: "ikons", type: "page", urlPath: "/ikons/{slug}" },
    { name: "untitled", type: "page", urlPath: "/untitled/{slug}" },
    { name: "collections", type: "page", urlPath: "/collections/{slug}" },
    { name: "miscellaneous", type: "page", urlPath: "/miscellaneous/{slug}" },
    { name: "biography", type: "page", urlPath: "/biography/{slug}" }
  ]
});
