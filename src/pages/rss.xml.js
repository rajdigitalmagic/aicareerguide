// src/pages/rss.xml.js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // Fetch both collections, filtering out drafts
  const blog = await getCollection('blog', ({ data }) => !data.draft);
  const projects = await getCollection('projects', ({ data }) => !data.draft);

  // Map blog posts
  const blogItems = blog.map((post) => ({
    title: post.data.title,
    pubDate: post.data.pubDate,
    description: post.data.description,
    link: `/blog/${post.slug}/`,
  }));

  // Map projects (Adding a prefix to the title helps subscribers identify the content type)
  const projectItems = projects.map((project) => ({
    title: `Project: ${project.data.title}`,
    pubDate: project.data.pubDate, 
    description: project.data.description,
    link: `/projects/${project.slug}/`,
  }));

  // Combine both arrays and sort them by date (newest first)
  const allItems = [...blogItems, ...projectItems].sort(
    (a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf()
  );

  return rss({
    title: 'AI Career Guide',
    description: 'Practical AI, technology, and career guidance.',
    site: context.site,
    items: allItems,
    customData: `<language>en-us</language>`,
  });
}
