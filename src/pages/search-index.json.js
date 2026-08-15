import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const index = posts.map(post => ({
    title: post.data.title,
    description: post.data.description,
    category: post.data.category,
    tags: post.data.tags || [],
    url: `/blog/${post.slug}/`,
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
}
