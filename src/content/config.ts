import { defineCollection, z } from "astro:content";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";

export const collections = {
	docs: defineCollection({
		schema: docsSchema({
			extend: z.object({
				description: z.string(),
				misc: z.optional(
					z.object({
						tag: z.string(),
						status: z.enum(["fixed", "wontfix", "invalid"]),
					}),
				),
			}),
		}),
	}),
	i18n: defineCollection({ type: "data", schema: i18nSchema() }),
};
