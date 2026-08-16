---
title: "Production-Ready URL Shortener"
description: "Build a production-style URL shortener API that creates short links, redirects users, tracks analytics, and introduces databases, caching, authentication, testing, and deployment."
category: "Software"
difficulty: "Intermediate"
timeToBuild: "1–2 weeks"
techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "GitHub Actions"]
skills: ["Backend Development", "REST APIs", "Databases", "Caching", "Authentication", "Testing", "System Design", "Deployment"]
featured: false
draft: false
pubDate: 2026-08-16
---

## The problem

Long URLs are inconvenient to share, difficult to remember, and often contain tracking parameters or complex paths.

A URL shortener solves this by converting a long URL into a short identifier:

```text
https://example.com/products/artificial-intelligence/course?campaign=summer
                         ↓
                  https://short.ly/aB7xK2
```

When someone opens the short URL, the service looks up the identifier and redirects the user to the original address.

At first, this looks like a very small project.

It is.

That is exactly why it is useful.

You can start with a simple CRUD-style API and then progressively introduce the engineering problems that appear in real backend systems:

- database design
- unique identifiers
- validation
- authentication
- caching
- rate limiting
- analytics
- testing
- observability
- deployment
- scalability

## What you are building

The final application should allow a user to:

1. Submit a long URL.
2. Receive a unique short URL.
3. Open the short URL and be redirected.
4. View basic click statistics.
5. Create and manage their links.
6. Disable a link when necessary.

A basic interaction looks like:

```text
POST /api/urls
       ↓
Generate Short Code
       ↓
Store URL
       ↓
Return Short URL
```

When someone visits it:

```text
GET /aB7xK2
       ↓
Check Cache
       ↓
Check Database
       ↓
Record Visit
       ↓
HTTP Redirect
```

## Why this is a strong software project

This project does not depend on artificial intelligence.

That is intentional.

A strong AI engineer still needs strong software engineering fundamentals.

This project gives you practice with:

- HTTP
- REST
- API design
- database schemas
- indexes
- transactions
- caching
- authentication
- testing
- Docker
- CI/CD
- deployment
- system design

These skills transfer directly to AI systems later.

## Architecture

Start with a simple architecture:

```text
                 Client
                   ↓
                FastAPI
             ┌─────┴─────┐
             ↓           ↓
          Cache       PostgreSQL
             │           │
             └─────┬─────┘
                   ↓
               Redirect
```

A more complete version can become:

```text
                    ┌───────────────┐
                    │    Client     │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │ Reverse Proxy │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │   FastAPI     │
                    └───────┬───────┘
                            │
              ┌─────────────┼─────────────┐
              ↓             ↓             ↓
         PostgreSQL       Redis       Analytics
              │             │             │
              └─────────────┼─────────────┘
                            ↓
                         Response
```

Do not build the complete architecture immediately.

Add complexity only when the simpler system works.

## Step 1 — Design the API

Start by defining the API before writing implementation code.

Example endpoints:

```text
POST   /api/urls
GET    /api/urls/{id}
GET    /api/urls/{id}/stats
DELETE /api/urls/{id}

GET    /{short_code}
```

A request to create a URL might be:

```json
{
  "url": "https://example.com/articles/software-engineering"
}
```

The response could be:

```json
{
  "id": "42",
  "short_code": "aB7xK2",
  "short_url": "https://short.example/aB7xK2",
  "url": "https://example.com/articles/software-engineering"
}
```

Keep the API small at first.

## Step 2 — Validate URLs

Never trust user input.

Validate:

- scheme
- hostname
- URL format
- maximum length
- unsupported protocols

For example, your service should normally accept:

```text
https://example.com
http://example.com
```

and reject malformed input.

Use application-level validation before writing anything to the database.

## Step 3 — Design the database

A minimal URL table could contain:

```text
urls
──────────────────────────────
id
short_code
original_url
created_at
updated_at
expires_at
user_id
is_active
```

Important constraints include:

```text
short_code → UNIQUE
```

Depending on your product requirements, you may also want an index on:

```text
user_id
created_at
expires_at
```

The database should enforce important invariants instead of relying only on application code.

## Step 4 — Generate short codes

You need a way to generate short identifiers.

For example:

```text
aB7xK2
xP4mQ9
K8zT1c
```

Possible strategies include:

- random strings
- encoded numeric IDs
- hash-based identifiers

Do not use a scheme that can silently produce duplicate values.

Your system should handle collisions safely.

A good design treats uniqueness as a database-level guarantee.

## Step 5 — Create the API

Build the first version using FastAPI.

The application should:

```text
Receive URL
   ↓
Validate
   ↓
Generate short code
   ↓
Insert into database
   ↓
Return response
```

Keep your route handlers thin.

A useful separation is:

```text
API Route
   ↓
Service Layer
   ↓
Repository / Database Layer
```

This keeps business logic from becoming tangled with HTTP-specific code.

## Step 6 — Implement redirects

The redirect endpoint is the most important part of the service:

```text
GET /{short_code}
```

It should:

1. Validate the short code.
2. Find the record.
3. Check whether the link is active.
4. Check expiration.
5. Record the visit.
6. Redirect to the original URL.

A missing URL should return an appropriate HTTP error rather than a generic server failure.

## Step 7 — Add analytics

Track useful information such as:

```text
url_id
timestamp
status
referrer
user_agent
```

You can later add:

- country
- device type
- browser
- operating system

Be careful about privacy.

Collect only what you actually need and clearly communicate what is being collected.

## Step 8 — Add Redis caching

Most successful short URLs may be requested repeatedly.

Without caching:

```text
Request
  ↓
FastAPI
  ↓
PostgreSQL
  ↓
Redirect
```

With caching:

```text
Request
  ↓
Redis
  ├── Hit  → Redirect
  │
  └── Miss
       ↓
   PostgreSQL
       ↓
   Redis SET
       ↓
    Redirect
```

This changes the performance characteristics of the redirect path.

Start without Redis.

Add it after you have measured the basic system.

## Step 9 — Cache carefully

Caching introduces its own engineering problems.

You need to decide:

- cache key
- expiration time
- invalidation strategy
- what happens when a URL is deleted
- what happens when a URL expires

For example:

```text
DELETE /api/urls/aB7xK2
        ↓
Database disabled
        ↓
Cache invalidated
```

Otherwise a deleted link may continue redirecting because stale data remains in the cache.

## Step 10 — Add authentication

Create user accounts or API authentication if you want users to manage their links.

An authenticated user should be able to:

```text
Create URLs
List URLs
View analytics
Delete URLs
Manage expiration
```

The redirect endpoint can remain public.

Keep authentication separate from public link resolution.

## Step 11 — Add rate limiting

Public APIs are vulnerable to abuse.

A user could repeatedly call:

```text
POST /api/urls
```

and generate thousands of links.

Add rate limiting such as:

```text
100 requests / hour / user
```

The exact value is a product decision.

The important lesson is understanding that public endpoints need abuse protection.

## Step 12 — Add URL expiration

Allow users to define:

```text
expires_at
```

When the URL expires:

```text
GET /aB7xK2
        ↓
Expired
        ↓
410 Gone
```

An expiration feature introduces practical database and caching concerns.

You must consider:

- timezone handling
- cache expiration
- cleanup
- race conditions
- user expectations

## Step 13 — Write tests

Do not wait until the end.

Start testing early.

Important test cases include:

```text
Create valid URL
Create invalid URL
Duplicate short code
Unknown short code
Expired URL
Disabled URL
Authenticated request
Unauthorized request
Redirect behavior
Analytics recording
Rate limiting
```

Organize tests around behavior rather than implementation details.

For example:

```text
test_expired_url_returns_gone()
```

is more useful than a test that only verifies an internal function was called.

## Step 14 — Add integration tests

Unit tests are not enough.

Test the complete flow:

```text
POST URL
   ↓
Database
   ↓
GET short URL
   ↓
Redirect
   ↓
Analytics
```

This verifies that your components actually work together.

## Step 15 — Containerize with Docker

Once the application works locally, containerize it.

A production-style environment may include:

```text
FastAPI
PostgreSQL
Redis
```

Docker lets you define a reproducible development environment.

A simple local setup might use:

```text
docker compose up
```

with services for:

```text
api
db
redis
```

Keep environment-specific secrets outside the image.

## Step 16 — Add configuration management

Do not hard-code:

```text
DATABASE_URL
SECRET_KEY
REDIS_URL
```

Use environment variables.

For example:

```text
DATABASE_URL=...
REDIS_URL=...
SECRET_KEY=...
```

Keep secrets out of Git.

Your repository should include an example configuration file such as:

```text
.env.example
```

without real credentials.

## Step 17 — Add CI/CD

Configure GitHub Actions to run:

```text
Push
 ↓
Install dependencies
 ↓
Lint
 ↓
Tests
 ↓
Build
 ↓
Deploy
```

A pull request should not be merged if the test suite fails.

CI is not just a deployment tool.

It creates a repeatable quality gate.

## Step 18 — Add logging

A production service needs useful logs.

Examples:

```text
request_id
endpoint
status_code
latency
user_id
error_type
```

Avoid logging secrets or unnecessary personal information.

Structured logs make debugging and analysis easier.

## Step 19 — Add monitoring

Monitor the things that matter.

For example:

```text
Requests / second
Error rate
Redirect latency
Database latency
Cache hit rate
API latency
```

A useful metric for the caching layer is:

```text
Cache Hit Rate
=
Cache Hits / Total Cache Lookups
```

If your cache hit rate is poor, the cache may not be helping much.

Measure before optimizing.

## Step 20 — Deploy

Deploy the service to a cloud platform that supports your stack.

The deployment architecture could be:

```text
Internet
   ↓
HTTPS
   ↓
Application
   ↓
PostgreSQL
   ↓
Redis
```

Configure:

- environment variables
- database connection
- health checks
- HTTPS
- logging
- monitoring

Start with one service instance.

You do not need Kubernetes for the first deployment.

## Health Checks

Add an endpoint such as:

```text
GET /health
```

A healthy response might be:

```json
{
  "status": "ok"
}
```

For a more serious system, the health check can distinguish application health from dependency health.

For example:

```text
Application: healthy
Database: healthy
Redis: degraded
```

Do not make a simple health endpoint perform expensive work.

## System Design Questions

Once the basic application works, start thinking like a backend engineer.

### What happens if two requests generate the same short code?

The database must enforce uniqueness.

### What happens if Redis is unavailable?

The system should usually fall back to PostgreSQL rather than becoming completely unavailable.

### What happens if PostgreSQL is slow?

Requests may become slow.

You need timeouts and monitoring.

### What happens when one URL receives millions of visits?

Caching and horizontal scaling may become important.

### What happens when a link is deleted?

Invalidate or update related cached state.

### What happens if the service restarts?

Persistent data must live outside the application process.

These questions are where a small project turns into system-design practice.

## What you will learn

By completing this project, you should understand:

- REST API design
- HTTP methods and status codes
- request validation
- service-layer architecture
- PostgreSQL schema design
- database indexes
- uniqueness constraints
- transactions
- Redis caching
- cache invalidation
- authentication
- rate limiting
- testing
- Docker
- CI/CD
- logging
- monitoring
- deployment
- basic scalability

## Version roadmap

### Version 1 — Basic API

```text
FastAPI
   ↓
PostgreSQL
   ↓
Create + Redirect URLs
```

Goal: understand HTTP and database-backed APIs.

### Version 2 — User Accounts

Add:

- authentication
- user-owned links
- management endpoints
- expiration

### Version 3 — Analytics

Add:

- clicks
- timestamps
- basic referrer tracking
- dashboard

### Version 4 — Performance

Add:

- Redis
- cache hit metrics
- rate limiting

### Version 5 — Production

Add:

- Docker
- tests
- CI/CD
- health checks
- structured logging
- monitoring

Do not start at Version 5.

Build each layer deliberately.

## Possible improvements

After the core system works, you can add:

- custom aliases
- QR code generation
- link previews
- password-protected links
- scheduled expiration
- team accounts
- API keys
- usage limits
- custom domains
- analytics dashboards
- bulk URL creation

Pick improvements that reinforce the skills you want to learn.

## GitHub repository structure

A practical repository could look like:

```text
url-shortener/
│
├── app/
│   ├── api/
│   ├── core/
│   ├── models/
│   ├── repositories/
│   ├── services/
│   └── main.py
│
├── tests/
│   ├── unit/
│   └── integration/
│
├── migrations/
├── scripts/
│
├── Dockerfile
├── compose.yaml
├── .env.example
├── README.md
└── pyproject.toml
```

The exact structure can change.

The important principle is separation of concerns.

## What makes this project portfolio-worthy?

A basic URL shortener is a common project.

The value comes from the engineering depth you add.

Instead of:

> "Built a URL shortener with FastAPI."

Aim for:

> "Built a containerized URL-shortening service with PostgreSQL persistence, Redis caching, authenticated link management, rate limiting, integration tests, click analytics, CI/CD, and production monitoring."

Then prove those claims in the repository.

Include:

- architecture diagram
- API documentation
- tests
- load-test results
- cache hit rate
- latency measurements
- deployment link
- failure analysis

## Benchmark the system

Don't just say it is fast.

Measure it.

For example:

```text
Without cache:
Average redirect latency = X ms

With Redis:
Average redirect latency = Y ms

Cache hit rate:
Z%
```

The actual values depend on your environment.

The important part is that you measure before and after the optimization.

## Common mistakes

### Building too much too early

Start with the database-backed API.

### Adding Redis without measuring

A cache is not automatically useful.

### Hard-coding configuration

Use environment variables.

### No tests

Even small services need tests.

### Poor database design

Indexes and constraints matter.

### Ignoring failure cases

Ask what happens when dependencies fail.

### Using Kubernetes unnecessarily

Complex infrastructure is not a badge of engineering maturity.

### Writing one giant file

Separate API, services, repositories, and configuration as the project grows.

## Final challenge

Once the basic URL shortener works, run a small load test.

Then ask:

1. What is the average latency?
2. What is the p95 latency?
3. How many requests can the service handle?
4. What percentage of requests hit Redis?
5. What happens when Redis is unavailable?
6. What happens when the database is unavailable?
7. Where is the bottleneck?

Then improve one bottleneck at a time.

That exercise will teach you more about backend engineering than adding another five endpoints.

## What you'll learn

This project is a foundation for larger software systems.

It prepares you for:

```text
REST APIs
   ↓
Database Applications
   ↓
Caching
   ↓
Authentication
   ↓
Distributed Systems
   ↓
Cloud Deployment
   ↓
System Design
```

It also transfers directly to AI engineering.

The same concepts appear in:

- model-serving APIs
- RAG applications
- AI agents
- inference services
- analytics systems
- AI SaaS products

## Final thought

The best software projects don't become valuable because they are large.

They become valuable because they force you to understand how real systems behave.

This project starts with a simple idea:

```text
Long URL
   ↓
Short URL
```

and gradually introduces the engineering realities behind a reliable service.

That is exactly the kind of progression a strong software portfolio should show.
