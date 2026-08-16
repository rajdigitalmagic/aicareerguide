# AI Career Guide — Production Audit & Fixes

## Audit scope
Reviewed the uploaded Astro source against the AI Career Guide blueprint covering UX, mobile responsiveness, themes, accessibility, SEO, search, content architecture, performance, sharing, and publishing workflow.

## Fixed
- Fixed duplicate SEO title suffixes such as `Blog | AI Career Guide | AI Career Guide`.
- Removed duplicate BreadcrumbList JSON-LD emitted by both the layout and breadcrumb component.
- Added a real `/search` page and aligned the site SearchAction with it.
- Kept lightweight Fuse.js search and expanded it to blog posts, projects, roadmaps, tools, and resources.
- Fixed search initialization so Astro View Transitions do not create duplicate listeners.
- Fixed mobile header width pressure by using a dedicated mobile search button and keeping the full search field on larger screens.
- Improved mobile menu accessibility with open/close icons and correct labels.
- Fixed draft filtering for roadmaps and resources and updated the content schemas to support `draft`.
- Added article previous/next navigation.
- Added a lightweight article reading-progress indicator.
- Improved TOC active-section handling and made initialization idempotent across View Transitions.
- Improved code blocks with copy controls while preserving Shiki syntax highlighting.
- Updated X sharing to the current `x.com` intent endpoint.
- Added article-card images with explicit dimensions and lazy loading.
- Removed external Google Fonts loading to reduce render-blocking network work; the site now uses the system font stack.
- Improved article structured data author semantics by using an Organization representation for the site author.
- Kept canonical URLs, sitemap, robots.txt, RSS, Open Graph, article schema, breadcrumbs, and static generation intact.

## Verification
- JavaScript syntax checks pass for the generated `.js` route files.
- Full Astro production build could not be executed in this environment because dependency installation timed out; run `npm install` followed by `npm run build` in the project/Cloudflare environment before deployment.

## Next high-value additions
1. Publish more original articles before adding more directory features.
2. Add pagination once the blog grows beyond roughly 20–30 visible articles.
3. Add a learning graph linking articles → projects → roadmaps.
4. Connect a real newsletter provider only after the content pipeline is established.
5. Add analytics/Search Console and measure search queries, CTR, engagement, and newsletter conversion.
6. Add an explicit editorial/review workflow for factual AI content.
