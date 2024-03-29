import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import unocss from "@unocss/astro";
import remarkGithub, { defaultBuildUrl } from "remark-github";

// https://astro.build/config
export default defineConfig({
	site: "https://nyanrus.github.io",
	base: "/docs_floorp",
	markdown: {
		remarkPlugins: [
			[
				remarkGithub,
				{ repository: "https://github.com/Floorp-Projects/Floorp" },
			],
		],
	},
	integrations: [
		starlight({
			title: "NyanRus's Floorp Docs",
			logo: {
				light: "./public/lfo_floorp_docs_black.svg",
				dark: "./public/lfo_floorp_docs_white.svg",
			},
			social: {
				github: "https://github.com/nyanrus/docs_floorp",
			},
			components: {
				PageTitle: "./src/override/PageTitle.astro",
			},
			sidebar: [
				{
					label: "Entry",
					items: [
						{
							label: "Welcome!",
							link: "/entry/welcome/",
						},
					],
				},
				{
					label: "Guides",
					autogenerate: {
						directory: "guides",
					},
				},
				{
					label: "Issue Tracker",
					autogenerate: {
						directory: "issues",
					},
				},
				{
					label: "Misc",
					autogenerate: {
						directory: "misc",
					},
				},
			],
		}),
		unocss(),
	],
});
