import { getCollection } from 'astro:content';

export async function GET() {
  const [posts, projects, roadmaps, tools, resources] = await Promise.all([
    getCollection('blog', ({ data }) => !data.draft),
    getCollection('projects', ({ data }) => !data.draft),
    getCollection('roadmaps', ({ data }) => !data.draft),
    getCollection('tools', ({ data }) => !data.draft),
    getCollection('resources', ({ data }) => !data.draft),
  ]);
  const index = [
    ...posts.map(item => ({ title:item.data.title, description:item.data.description, category:item.data.category, tags:[...(item.data.tags||[]),...(item.data.topics||[])], url:`/blog/${item.slug}` })),
    ...projects.map(item => ({ title:item.data.title, description:item.data.description, category:item.data.category, tags:[...(item.data.techStack||[]),...(item.data.skills||[])], url:`/projects/${item.slug}` })),
    ...roadmaps.map(item => ({ title:item.data.title, description:item.data.description, category:'Career', tags:[item.data.category,item.data.difficulty,...(item.data.skills||[])], url:`/careers/${item.slug}` })),
    ...tools.map(item => ({ title:item.data.name, description:item.data.description, category:'Tool', tags:[item.data.category,...(item.data.tags||[])], url:item.data.url })),
    ...resources.map(item => ({ title:item.data.title, description:item.data.description, category:'Resource', tags:[item.data.type,item.data.category,...(item.data.tags||[])], url:item.data.url })),
  ];
  return new Response(JSON.stringify(index), { headers:{'Content-Type':'application/json','Cache-Control':'public, max-age=3600'} });
}
