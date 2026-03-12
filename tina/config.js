import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: null,
  token: null,
  build: {
    outputFolder: "admin",
    publicFolder: ".",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: ".",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Seiten",
        path: "content",
        fields: [
          { type: "string", name: "title", label: "Titel" },
          { type: "rich-text", name: "body", label: "Inhalt", isBody: true },
        ],
      },
    ],
  },
});
