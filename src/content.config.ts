import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const offres = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/offres" }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    price: z.number(),
    unit: z.string(),
    minPlayers: z.number(),
    duration: z.string(),
    guidapActivityId: z.string(),
    badge: z.string(),
    order: z.number(),
  }),
});

export const collections = { offres };
