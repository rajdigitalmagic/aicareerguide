// src/content/config.ts
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

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  timeToBuild: z.string(),
  techStack: z.array(z.string()),
  githubUrl: z.string().url().optional(),
  demoUrl: z.string().url().optional(),
  draft: z.boolean().default(false),
});

export const collections = {
  blog: defineCollection({ type: 'content', schema: blogSchema }),
  roadmaps: defineCollection({ type: 'content', schema: roadmapSchema }),
  projects: defineCollection({ type: 'content', schema: projectSchema }),
};
