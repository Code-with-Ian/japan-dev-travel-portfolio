import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    titleJa: z.string().optional(),
    description: z.string(),
    descriptionJa: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    tagsJa: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
  }),
});

const travel = defineCollection({
  loader: glob({
    base: "./src/content/travel",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    titleJa: z.string().optional(),
    place: z.string(),
    placeJa: z.string().optional(),
    description: z.string(),
    descriptionJa: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    tagsJa: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects,
  travel,
};
