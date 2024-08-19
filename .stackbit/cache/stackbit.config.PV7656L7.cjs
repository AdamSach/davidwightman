var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.ts
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_types = require("@stackbit/types");
var import_cms_git = require("@stackbit/cms-git");
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.6.0",
  ssgName: "hugo",
  contentSources: [
    new import_cms_git.GitContentSource({
      rootPath: "/Users/jazbogross/Documents/Websites/davidwightman",
      contentDirs: [
        "site/content/fables",
        "site/content/ikons",
        "site/content/untitled",
        "site/content/collections",
        "site/content/miscellaneous",
        "site/content/biography",
        "site/content"
        // for homepage and other pages
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
//# sourceMappingURL=stackbit.config.PV7656L7.cjs.map
