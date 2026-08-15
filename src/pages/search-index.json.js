// src/pages/search-index.json.js
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const projects = await getCollection('projects', ({ data }) => !data.draft);

  const index = [
    ...posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      category: post.data.category,
      tags: post.data.tags || [],
      url: `/blog/${post.slug}/`,
    })),
    ...projects.map(proj => ({
      title: proj.data.title,
      description: proj.data.description,
      category: 'Project',
      tags: proj.data.techStack || [],
      url: `/projects/${proj.slug}/`,
    }))
  ];

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'max-age=3600' },
  });
}
