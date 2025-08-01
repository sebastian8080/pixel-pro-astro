import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
  }),
});

export const collections = {
  posts,
};
