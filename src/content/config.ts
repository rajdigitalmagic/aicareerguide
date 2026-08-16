// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogSchema = ({ image }) => z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.date(),
  updatedDate: z.date().optional(),
  author: z.string().default('AI Career Guide'),
  category: z.string(),
  topics: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  image: image().optional(),
  readingTime: z.string().optional(),
  featured: z.boolean().optional().default(false),
  draft: z.boolean().optional().default(false),
  canonical: z.string().url().optional(),
  lastReviewed: z.date().optional(),
  sources: z.array(z.string()).optional(),
});

const roadmapSchema = ({ image }) => z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  estimatedTime: z.string(),
  image: image().optional(),
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
  pubDate: z.date(),
});

export const collections = {
  blog: defineCollection({ type: 'content', schema: blogSchema }),
  roadmaps: defineCollection({ type: 'content', schema: roadmapSchema }),
  projects: defineCollection({ type: 'content', schema: projectSchema }),
});
