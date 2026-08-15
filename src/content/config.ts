import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.date(),
  updatedDate: z.date().optional(),
  author: z.string().default('AI Career Guide'),
  category: z.enum(['AI', 'Career', 'Projects', 'Technology']),
  tags: z.array(z.string()).optional(),
  image: z.string().optional(),
  draft: z.boolean().optional(),
  readingTime: z.string().optional(),
});

const roadmapSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  estimatedTime: z.string(),
  image: z.string().optional(),
});

export const collections = {
  blog: defineCollection({
    type: 'content',
    schema: blogSchema,
  }),
  roadmaps: defineCollection({
    type: 'content',
    schema: roadmapSchema,
  }),
};
