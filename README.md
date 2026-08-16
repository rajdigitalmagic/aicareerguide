# AI Career Guide

AI Career Guide is a lightweight Astro publication focused on practical AI, technology, projects, and careers.

## Content model

- `src/content/blog/` — articles
- `src/content/roadmaps/` — career roadmaps
- `src/content/projects/` — structured project guides
- `src/content/tools/` — curated tools
- `src/content/resources/` — curated courses, books, datasets, APIs, and roadmaps

## Routes

- `/` — homepage
- `/ai/` — AI learning hub
- `/ai/[topic]/` — topic pages
- `/careers/` — career roadmaps
- `/projects/` — project database
- `/tools/` — tool directory
- `/resources/` — resource directory
- `/blog/` — article index and filters

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Publishing workflow

1. Add or edit a Markdown file in the appropriate content collection.
2. Keep frontmatter complete and accurate.
3. Commit the change to GitHub.
4. Cloudflare builds and deploys the static Astro site.

## Important

Newsletter and contact forms are intentionally provider-independent. Connect a real form/email service before treating those forms as production data collection.
