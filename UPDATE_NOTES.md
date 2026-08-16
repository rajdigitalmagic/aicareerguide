# AI Career Guide — Latest Update

## Critical fix
- Fixed theme persistence across Astro View Transitions. The selected light/dark theme now survives page navigation.
- Theme initialization runs before route swaps and updates the new document's `html` class, `color-scheme`, and theme-color meta tag.
- System preference changes are respected when the user has not explicitly selected a theme.

## UI / UX fixes
- Theme toggle now uses delegated click handling, so it remains reliable after client-side navigation.
- Navigation now marks the current section with `aria-current="page"`.
- Blog/resource/tool filter buttons now expose `aria-pressed` state.
- Blog page search now also indexes article topics.
- Homepage roadmap selection now actually prioritizes roadmaps marked `featured`.

## SEO improvements
- Added BreadcrumbList JSON-LD for article, AI topic, career roadmap, and project pages.
- Added `article:published_time` and `article:modified_time` Open Graph metadata.
- Dynamic theme-color metadata now matches the active theme.

## Existing fixes retained
- AI topic static routes use a locally scoped topic definition.
- Resources route exists.
- Career roadmap content exists for the major roadmap links.
- Search index includes blog posts, projects, roadmaps, tools, and resources.
- Placeholder links and fake repository URLs have been removed.

## Recommended next work
1. Run `npm run build` in Cloudflare after committing.
2. Test light/dark mode while navigating between at least 10 routes.
3. Test browser back/forward navigation.
4. Test mobile menu + theme toggle together.
5. Add pagination when the blog exceeds roughly 20–30 visible articles.
6. Add a dedicated learning-path graph connecting articles → projects → career roadmaps.
7. Add a real newsletter provider only after the content pipeline is established.
8. Review npm audit vulnerabilities separately; do not use `npm audit fix --force` blindly.
