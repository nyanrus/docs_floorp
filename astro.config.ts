import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "NyanRus's Floorp Docs",
      logo: {
        src:"./public/favicon.svg"
      },
      social: {
        github: "https://github.com/nyanrus/Floorp",
      },
      sidebar: [
        {
          label: "Entry",
          items: [
            {label:"Welcome!",link:"/entry/welcome/"}
          ]
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Issue Tracker",
          autogenerate: {directory:"issues"}
        }
      ],
    }),
  ],
});
