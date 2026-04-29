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
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
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
    place: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects,
  travel,
};
