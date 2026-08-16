import { defineCollection, z } from 'astro:content';

const url = z.string().url();

export const collections = {
  blog: defineCollection({
    type: 'content',
    schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      author: z.string().default('AI Career Guide'),
      category: z.enum(['AI', 'Career', 'Projects', 'Technology']),
      topics: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      image: image().optional(),
      readingTime: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      canonical: url.optional(),
      lastReviewed: z.date().optional(),
      sources: z.array(url).default([]),
    }),
  }),
  roadmaps: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      category: z.string(),
      difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
      estimatedTime: z.string(),
      draft: z.boolean().default(false),
      image: z.string().optional(),
      skills: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
    }),
  }),
  projects: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum(['AI', 'ML', 'LLM', 'Software']),
      difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
      timeToBuild: z.string(),
      techStack: z.array(z.string()),
      skills: z.array(z.string()).default([]),
      githubUrl: url.optional(),
      demoUrl: url.optional(),
      image: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
    }),
  }),
  tools: defineCollection({
    type: 'content',
    schema: z.object({
      name: z.string(),
      description: z.string(),
      category: z.enum(['AI', 'Developer', 'Career', 'Research', 'Productivity', 'Design']),
      tags: z.array(z.string()).default([]),
      url,
      pricing: z.enum(['Free', 'Freemium', 'Paid']).default('Freemium'),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
  }),
  resources: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      type: z.enum(['Course', 'Book', 'Dataset', 'API', 'Roadmap']),
      category: z.string(),
      url,
      provider: z.string().optional(),
      price: z.enum(['Free', 'Paid', 'Freemium']).default('Free'),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
  }),
};
