import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://nyanrus.github.io',
  base: "/docs_floorp",
  integrations: [
    starlight({
      title: "NyanRus's Floorp Docs",
      logo: {
        src:"./public/favicon.svg"
      },
      social: {
        github: "https://github.com/nyanrus/docs_floorp",
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
