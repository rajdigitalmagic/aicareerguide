// src/content/config.ts
import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
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
    }),
  }),
  roadmaps: defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      description: z.string(),
      category: z.string(),
      difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
      estimatedTime: z.string(),
      image: image().optional(),
    }),
  }),// src/content/config.ts
import { defineCollection, z, image } from 'astro:content'; // ✅ import image helper

// Blog posts schema
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('AI Career Guide'),
    category: z.string(), // flexible – you can use any string
    topics: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    image: image().optional(), // ✅ now works
    readingTime: z.string().optional(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    canonical: z.string().url().optional(),
    lastReviewed: z.date().optional(),
    sources: z.array(z.string()).optional(),
  }),
});

// Roadmaps schema
const roadmaps = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    estimatedTime: z.string(),
    image: image().optional(), // ✅ now works
    draft: z.boolean().optional().default(false), // added for consistency
  }),
});

// Projects schema
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    timeToBuild: z.string(),
    techStack: z.array(z.string()),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
    pubDate: z.date(),
  }),
});

export const collections = {
  blog,
  roadmaps,
  projects,
};

  projects: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
      timeToBuild: z.string(),
      techStack: z.array(z.string()),
      githubUrl: z.string().url().optional(),
      demoUrl: z.string().url().optional(),
      draft: z.boolean().default(false),
      pubDate: z.date(),
    }),
  }),
};
