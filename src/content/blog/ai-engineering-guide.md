---
title: "AI Engineering: What It Is, What AI Engineers Do, and How to Become One in 2026"
description: "A practical guide to AI engineering covering production AI systems, LLM applications, APIs, RAG, evaluation, deployment, MLOps, security, observability, and the skills needed to become an AI engineer."
pubDate: 2026-08-16
author: "AI Career Guide"
category: "AI"
topics: ["ai-engineering", "artificial-intelligence", "machine-learning", "llms", "software-engineering"]
tags: ["AI engineering", "AI engineer", "LLM engineering", "MLOps", "RAG", "AI systems", "AI deployment", "AI projects", "machine learning engineering"]
image: ../../assets/blog/ai-engineering-guide.webp
readingTime: "17"
featured: false
draft: false
lastReviewed: 2026-08-16
sources:
  - "https://www.nist.gov/itl/ai-risk-management-framework"
  - "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"
  - "https://cloud.google.com/architecture"
  - "https://aws.amazon.com/what-is/mlops/"
  - "https://aws.amazon.com/sagemaker/ai/mlops/"
  - "https://hai.stanford.edu/ai-index/2026-ai-index-report"
---

# AI Engineering: What It Is, What AI Engineers Do, and How to Become One in 2026

**AI engineering** is the discipline of turning artificial intelligence capabilities into reliable software systems that solve real problems.

It sits at the intersection of artificial intelligence, machine learning, software engineering, data, infrastructure, and product development.

That distinction matters.

Training a model is one job.

Building a useful product around a model is another.

A machine learning experiment might end with:

```text
Dataset
  ↓
Model
  ↓
Accuracy = 94%
```

An AI product cannot.

A production system may need:

```text
User
  ↓
Frontend
  ↓
API
  ↓
Authentication
  ↓
Data / Retrieval
  ↓
Model
  ↓
Validation
  ↓
Business Logic
  ↓
Database
  ↓
Monitoring
```

And then the work continues.

The system must be tested, observed, secured, updated, optimized, and maintained.

This is where AI engineering becomes important.

Modern AI capabilities are advancing quickly, but organizations still need engineers who can turn those capabilities into dependable systems. Stanford's 2026 AI Index reports rapid progress in model capabilities while also highlighting growing challenges around evaluation, transparency, and responsible deployment. ([Stanford HAI — 2026 AI Index](https://hai.stanford.edu/ai-index/2026-ai-index-report))

This guide explains what AI engineering means in practice, how it differs from machine learning engineering and AI research, what skills you need, how modern AI applications are structured, what tools are worth learning, and how to build a career in AI engineering in 2026.

## What Is AI Engineering?

There is no single universally accepted job definition for "AI engineer."

Companies use the title differently.

But a useful working definition is:

> **AI engineering is the practice of designing, building, deploying, evaluating, and operating software systems that use artificial intelligence models to solve real-world problems.**

The phrase **software systems** is important.

An AI engineer is not necessarily training a model from scratch.

They may instead be:

- integrating a foundation model
- building a RAG pipeline
- exposing a model through an API
- designing an evaluation system
- deploying a model
- optimizing inference
- connecting AI to databases and tools
- monitoring production behavior
- improving system reliability

In other words:

```text
Model Capability
      +
Software Engineering
      +
Data
      +
Infrastructure
      +
Evaluation
      =
AI Engineering
```

The exact balance depends on the company and role.

## Why AI Engineering Exists

A model by itself is rarely a complete product.

Imagine a company wants an internal assistant that can answer questions about its engineering documentation.

Buying or training a capable language model does not solve the whole problem.

You still need to answer:

- How do documents enter the system?
- How are they updated?
- How are relevant passages retrieved?
- Which employees are allowed to see which documents?
- What happens when the model is wrong?
- How are answers evaluated?
- How are requests authenticated?
- What happens when the model provider is unavailable?
- How much does each request cost?
- How do you monitor latency?
- How do you know the system became worse after an update?

Those are engineering questions.

A production AI system therefore looks more like:

```text
                    ┌───────────────┐
                    │   Frontend    │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │     API       │
                    └───────┬───────┘
                            ↓
               ┌────────────┴────────────┐
               ↓                         ↓
        Authentication              AI Workflow
                                         ↓
                              ┌───────────┴───────────┐
                              ↓                       ↓
                         Retrieval                 Tools
                              ↓                       ↓
                              └───────────┬───────────┘
                                          ↓
                                        Model
                                          ↓
                                   Validation
                                          ↓
                                     Response
```

The model is one component among many.

## AI Engineer vs Machine Learning Engineer vs AI Researcher

These roles overlap, but they emphasize different problems.

### AI Engineer

Usually focuses on:

- AI-powered applications
- model integration
- LLM systems
- RAG
- tools and agents
- APIs
- evaluation
- deployment
- observability
- reliability

### Machine Learning Engineer

Often focuses more heavily on:

- training models
- feature pipelines
- model serving
- experimentation
- data pipelines
- model evaluation
- MLOps
- production ML systems

AWS describes MLOps as practices that automate and simplify ML workflows and deployments, covering development, testing, integration, release, and infrastructure management. ([AWS — What is MLOps?](https://aws.amazon.com/what-is/mlops/))

### AI Researcher

Usually focuses more heavily on:

- new model architectures
- optimization methods
- training techniques
- experiments
- mathematical analysis
- scientific questions

These categories are not rigid.

A strong AI engineer may work deeply with machine learning.

A machine learning engineer may build LLM applications.

A researcher may build production systems.

The boundaries depend on the organization.

## The AI Engineering Stack

A modern AI engineer needs to think in layers.

A useful stack looks like:

```text
Product
   ↓
Application
   ↓
AI Workflow
   ↓
Models
   ↓
Data
   ↓
Infrastructure
   ↓
Evaluation + Observability
   ↓
Security + Governance
```

Let's break those layers down.

## 1. Software Engineering

This is the foundation.

If you want to become an AI engineer, do not treat software engineering as a secondary skill.

You need to be able to build reliable programs.

Important fundamentals include:

- data structures
- algorithms
- functions
- modules
- object-oriented programming
- testing
- debugging
- version control
- API design
- databases
- concurrency basics
- networking basics
- Linux
- system design

Python is especially useful because of its AI ecosystem.

But AI engineering is not only Python.

You may also encounter:

- JavaScript / TypeScript
- C++
- Go
- Java
- SQL
- shell scripting

The correct language depends on the system.

## 2. Machine Learning

You don't need to become a specialist in every classical ML algorithm.

But you should understand:

- training
- validation
- test sets
- loss functions
- metrics
- overfitting
- regularization
- feature engineering
- data leakage
- model selection
- generalization

This gives you the ability to reason about model behavior.

Without those concepts, AI engineering becomes a collection of API calls.

## 3. Deep Learning

You should understand the mechanics behind neural networks.

At minimum:

- tensors
- layers
- activation functions
- forward propagation
- loss
- backpropagation
- gradient descent
- optimizers
- training loops
- evaluation

You do not need to train frontier models.

You need enough understanding to know what the model is doing and how to diagnose problems.

## 4. Large Language Models

For modern AI engineering, LLM knowledge is increasingly important.

Learn:

- tokens
- embeddings
- transformers
- attention
- inference
- context windows
- prompting
- structured outputs
- RAG
- fine-tuning
- tool calling
- agents
- evaluation

The goal is not to memorize the names of dozens of models.

The goal is to understand the design space.

## 5. APIs

Most AI systems are accessed through APIs.

A typical architecture might be:

```text
Frontend
   ↓
Backend API
   ↓
AI Service
   ↓
Model Provider
   ↓
Response
```

You should understand:

- HTTP
- REST
- JSON
- authentication
- rate limiting
- retries
- timeouts
- error handling
- streaming responses

For example, an LLM request should not simply assume the provider will always respond instantly.

Production code needs failure handling.

## 6. Databases

AI applications frequently need persistent data.

Learn:

### Relational databases

For:

- users
- permissions
- transactions
- metadata
- application state

PostgreSQL is an excellent skill.

### Vector storage

For:

- embeddings
- semantic search
- retrieval systems

But don't assume every AI application needs a dedicated vector database.

Sometimes PostgreSQL with vector capabilities can be sufficient.

Choose architecture based on actual requirements rather than hype.

## 7. Retrieval-Augmented Generation

RAG is one of the most practical patterns in current AI application development.

A simplified architecture is:

```text
Documents
    ↓
Chunking
    ↓
Embeddings
    ↓
Vector Index
```

At query time:

```text
Question
    ↓
Retriever
    ↓
Relevant Context
    ↓
Prompt
    ↓
LLM
    ↓
Answer
```

Google's current architecture guidance for RAG applications separates ingestion, serving, and quality evaluation into interconnected subsystems. ([Google Cloud Architecture Center](https://docs.cloud.google.com/architecture/rag-capable-gen-ai-app-using-vertex-ai))

The important lesson is that RAG is not just:

```text
PDF → Vector DB → Chatbot
```

A useful RAG system needs:

- good ingestion
- sensible chunking
- reliable retrieval
- metadata filtering
- ranking
- context construction
- evaluation
- monitoring

## 8. Tool Use and Agents

An AI system becomes more capable when it can interact with external tools.

For example:

```text
LLM
 ↓
Choose Tool
 ↓
API
 ↓
Result
 ↓
LLM
 ↓
Response
```

Tools might include:

- database queries
- web search
- calculators
- code execution
- internal APIs
- ticketing systems
- file operations

But adding tools also increases risk.

A model should not have unlimited access to sensitive systems.

Use controlled interfaces, authentication, authorization, validation, and least-privilege access.

## 9. Evaluation

Evaluation is one of the most underappreciated AI engineering skills.

A demo can look great while the underlying system is unreliable.

Instead of asking:

> "Does this output look good?"

build a repeatable evaluation process.

```text
Test Dataset
     ↓
Run System
     ↓
Collect Outputs
     ↓
Score Results
     ↓
Analyze Failures
     ↓
Improve
     ↓
Run Again
```

Google Cloud's current guidance emphasizes evaluation as a critical part of moving generative AI applications from prototypes toward production, including evaluating RAG systems and agents rather than relying only on subjective inspection. ([Google Cloud — Generative AI Evaluation](https://cloud.google.com/blog/topics/developers-practitioners/master-generative-ai-evaluation-from-single-prompts-to-complex-agents))

Evaluate things such as:

- correctness
- relevance
- factuality
- citation quality
- retrieval quality
- tool-call accuracy
- safety
- latency
- cost

The exact metrics depend on the application.

## 10. Observability

Traditional software systems already need monitoring.

AI systems add new dimensions.

You may need to track:

- request latency
- error rates
- token usage
- model version
- prompt version
- retrieval results
- response quality
- tool calls
- cost
- user feedback

An AI engineer should be able to answer:

> What happened to this request?

and:

> Why did the system produce this result?

Without good logs and traces, debugging becomes guesswork.

## 11. MLOps and Deployment

AI systems need deployment processes just like traditional software.

MLOps extends DevOps practices into machine learning workflows.

AWS describes MLOps as a set of practices that helps automate and standardize the ML lifecycle, including model development, testing, release, infrastructure management, and production monitoring. ([AWS — What is MLOps?](https://aws.amazon.com/what-is/mlops/))

A simplified AI deployment pipeline looks like:

```text
Code
 ↓
Tests
 ↓
Build
 ↓
Model / Prompt Validation
 ↓
Deploy
 ↓
Monitor
 ↓
Evaluate
 ↓
Rollback or Improve
```

Depending on your system, you may also need:

- CI/CD
- model registries
- experiment tracking
- data versioning
- containerization
- Kubernetes
- cloud infrastructure
- GPU scheduling

Don't learn all of these at once.

Learn them when your projects require them.

## 12. Security

AI applications create familiar software-security problems and some new ones.

Important areas include:

- authentication
- authorization
- secrets management
- prompt injection
- data leakage
- insecure tool execution
- malicious file content
- model abuse
- supply-chain risks

NIST's AI Risk Management Framework is designed to help organizations incorporate trustworthiness considerations into the design, development, use, and evaluation of AI systems. Its Generative AI Profile specifically addresses risks that can be introduced or intensified by generative AI. ([NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework), [NIST Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence))

Security should therefore be part of system design, not something added after deployment.

## 13. Governance and Responsible AI

AI systems can affect users in ways that ordinary software systems sometimes do not.

Depending on the application, you may need to consider:

- bias
- privacy
- explainability
- safety
- human oversight
- misuse
- data provenance
- auditability

NIST's framework organizes AI risk management around functions that help organizations govern, map, measure, and manage AI risks across the lifecycle. ([NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework))

You don't need to become a policy specialist to be a good AI engineer.

But you should understand that shipping an AI feature involves more than model accuracy.

## AI Engineering Architecture

Consider a document-assistant application.

A reasonable architecture could be:

```text
                    USER
                     │
                     ↓
                Web Interface
                     │
                     ↓
                  API Layer
                     │
          ┌──────────┴──────────┐
          ↓                     ↓
    Authentication          Request Validation
          │                     │
          └──────────┬──────────┘
                     ↓
               AI Orchestrator
                 /        \
                /          \
               ↓            ↓
         Retriever        Tools
               │            │
               ↓            ↓
          Vector Store    Internal APIs
                \           /
                 \         /
                   ↓     ↓
                    LLM
                     │
                     ↓
               Output Validation
                     │
          ┌──────────┴──────────┐
          ↓                     ↓
       Response             Logging
                                │
                                ↓
                          Evaluation /
                          Monitoring
```

The exact design changes by product, but the pattern is useful.

AI engineering is largely about making all these components work together safely and efficiently.

## Choosing Between Models

AI engineers often have multiple models available.

A common mistake is asking:

> "Which model is the best?"

That's usually the wrong question.

A better question is:

> "Which model gives the required quality at acceptable cost, latency, reliability, and operational complexity?"

Consider:

```text
Quality
  ↕
Latency
  ↕
Cost
  ↕
Reliability
  ↕
Privacy
```

A model that is slightly less capable but five times cheaper and much faster may be the better product decision.

You need measurements.

Not hype.

## Model Routing

A mature AI application may not use one model for every task.

For example:

```text
Simple classification
      ↓
Small / cheap model

Complex reasoning
      ↓
Stronger model

Embedding generation
      ↓
Embedding model

Safety check
      ↓
Specialized classifier
```

This is one reason AI engineering resembles distributed systems engineering.

Different components can be optimized independently.

## Prompt Management

Prompts are part of the application.

Treat them like code.

That means:

- version them
- test them
- review changes
- measure performance
- avoid accidental breaking changes

A useful workflow is:

```text
Prompt v1
  ↓
Evaluation
  ↓
Prompt v2
  ↓
Comparison
  ↓
Deploy best version
```

Do not change a production prompt casually without checking whether system behavior changed.

## Structured Outputs

LLMs are often used to generate text, but software systems frequently need structured data.

For example:

```json
{
  "category": "bug",
  "priority": "high",
  "summary": "Database connection failure"
}
```

Structured output lets an LLM communicate with application code more reliably.

But validation is still necessary.

Never assume the model will always produce exactly what you want.

Use:

- schemas
- validation
- retries
- safe fallbacks

The model generates.

Your software verifies.

## Human-in-the-Loop Systems

Not every decision should be fully automated.

For high-impact tasks, a human review step can be appropriate.

For example:

```text
AI Recommendation
       ↓
Confidence / Validation
       ↓
Human Review
       ↓
Final Decision
```

Google's current generative AI application guidance explicitly recommends considering whether humans should remain in the loop for critical decision stages, particularly where quality and responsible-use requirements are important. ([Google Cloud](https://docs.cloud.google.com/docs/ai-ml/generative-ai/develop-generative-ai-application))

AI engineering is therefore partly about deciding where automation should stop.

## Building AI Systems That Fail Gracefully

AI systems will fail.

The objective is not to pretend they won't.

Instead, design predictable failure behavior.

Examples:

```text
Model unavailable
      ↓
Fallback model / message

Retrieval failed
      ↓
Ask user for clarification

Tool failed
      ↓
Retry safely or stop

Low confidence
      ↓
Human review / limited response
```

Good engineering makes failures visible and controlled.

Bad engineering hides failures until users discover them.

## AI Engineering Tools Worth Learning

You do not need an enormous tool collection.

Start with a small stack.

### Core

- Python
- Git
- Linux
- SQL
- HTTP
- Docker

### ML / AI

- NumPy
- pandas
- scikit-learn
- PyTorch
- Hugging Face

### AI Applications

- LLM APIs
- embeddings
- vector search
- RAG
- structured outputs
- tool calling

### Backend

- FastAPI
- PostgreSQL
- Redis when needed

### Deployment

- Docker
- CI/CD
- cloud platform basics
- monitoring

### Systems

- networking basics
- caching
- queues
- authentication
- observability

Learn the concepts first.

Then pick tools.

## What Should You Build?

Your project portfolio should prove that you can engineer complete systems.

### Project 1: AI API

Build an API around a model.

Learn:

- FastAPI
- authentication
- validation
- error handling
- logging
- deployment

### Project 2: RAG Document Assistant

Build:

```text
Documents
 ↓
Chunking
 ↓
Embeddings
 ↓
Vector Search
 ↓
Retriever
 ↓
LLM
 ↓
Citations
```

Then evaluate retrieval and answer quality.

### Project 3: AI Agent

Create an agent that can use a small set of controlled tools.

Focus on:

- tool schemas
- permissions
- retries
- state
- evaluation

### Project 4: Production ML Service

Train a model and expose it through an API.

Add:

- Docker
- CI/CD
- model versioning
- monitoring

### Project 5: AI Product

Build something a real user could actually use.

The product should solve a specific problem.

Avoid building another generic chatbot with a different background color.

## What Makes an AI Engineering Project Strong?

A strong AI project should answer:

### What problem does it solve?

Be specific.

### Why does AI help?

Don't add AI just because it sounds impressive.

### How does the architecture work?

Show the components.

### How do you evaluate it?

Define measurable success.

### How does it fail?

Document limitations.

### How is it deployed?

A local notebook is not a production system.

### What did you improve?

Show engineering iteration.

A strong GitHub repository could look like:

```text
project/
├── app/
├── tests/
├── scripts/
├── evaluation/
├── data/
├── Dockerfile
├── README.md
└── pyproject.toml
```

The exact structure can vary, but the principle is the same:

**make the project understandable and reproducible.**

## A Practical AI Engineering Learning Path

A strong long-term progression is:

```text
1. Programming
   ↓
2. Data Structures & Algorithms
   ↓
3. Python
   ↓
4. SQL + Databases
   ↓
5. Linux + Git
   ↓
6. Mathematics
   ↓
7. Machine Learning
   ↓
8. Deep Learning
   ↓
9. LLMs
   ↓
10. APIs + Backend Engineering
   ↓
11. RAG + Embeddings
   ↓
12. Tool Use + Agents
   ↓
13. Evaluation
   ↓
14. Docker + Cloud
   ↓
15. MLOps / LLMOps
   ↓
16. Security + Observability
   ↓
17. Production AI Projects
```

You do not need to master each item equally.

Your goal is to become strong in the intersection.

## What Should You Not Do?

### Don't become an API-only developer

Knowing how to call an LLM API is useful.

It is not a complete AI engineering skill set.

### Don't chase every framework

Frameworks change quickly.

Concepts such as retrieval, evaluation, caching, APIs, and deployment last longer.

### Don't build everything with agents

Sometimes a deterministic workflow is better.

### Don't ignore software engineering

An unreliable AI product is still unreliable software.

### Don't ignore evaluation

A demo is not evidence that a system works.

### Don't ignore security

AI features can expose data and create new attack paths.

### Don't learn cloud services before you understand the problem

Cloud infrastructure is useful when you actually need it.

## AI Engineering in 2026

The AI landscape is moving toward increasingly capable models and more complex systems built around them.

But stronger models do not remove engineering work.

They change the engineering work.

Instead of:

```text
Can the model generate an answer?
```

teams increasingly need to ask:

```text
Is the answer correct?
Is the information current?
Is the response safe?
Is retrieval working?
Are tools being used correctly?
Is latency acceptable?
Is the system affordable?
Can we monitor it?
Can we reproduce failures?
Can we roll back a change?
```

This shift is important.

AI engineering is moving from experimentation toward systems engineering.

Google's current generative AI application guidance organizes development around model selection, customization, evaluation, and deployment, while modern RAG architecture guidance treats ingestion, serving, and quality evaluation as interconnected components. ([Google Cloud](https://docs.cloud.google.com/docs/ai-ml/generative-ai/develop-generative-ai-application), [Google Cloud Architecture Center](https://docs.cloud.google.com/architecture/rag-capable-gen-ai-app-using-vertex-ai))

## How to Become an AI Engineer Without Trying to Learn Everything

You do not need to learn every technology in the AI ecosystem.

Instead, build a strong core.

### First

Become a good software engineer.

### Then

Learn machine learning and deep learning properly.

### Then

Learn LLMs and modern AI systems.

### Then

Build backend and production systems around them.

### Finally

Learn the infrastructure needed to operate those systems reliably.

The progression is:

```text
Software Engineer
       +
ML Understanding
       +
Deep Learning
       +
LLM Systems
       +
Production Engineering
       =
AI Engineer
```

That is a much more durable strategy than trying to become an expert in every new AI framework.

## Frequently Asked Questions

### What does an AI engineer do?

An AI engineer builds software systems that use AI or machine learning models to solve real problems. The work can include model integration, RAG, APIs, evaluation, deployment, monitoring, security, and product engineering.

### Is AI engineering the same as machine learning engineering?

They overlap substantially.

Machine learning engineering often focuses more on model development, training, deployment, and ML infrastructure.

AI engineering can include those responsibilities but often extends further into LLM applications, agents, retrieval, tools, product integration, and broader software engineering.

### Do AI engineers need to know mathematics?

Yes, but the depth depends on the role.

You need enough mathematics to understand the models you're working with. Stronger mathematical depth becomes more important as you move toward research and advanced model development.

### Do I need to train models from scratch?

Usually no.

Understanding training is important, but many production applications use pretrained models and focus engineering effort on integration, adaptation, evaluation, and deployment.

### Is RAG part of AI engineering?

Yes.

RAG is one of the common patterns used to connect language models to external knowledge.

### Should I learn MLOps?

Yes, eventually.

You don't need to start with Kubernetes and complex deployment systems. Begin with reproducible training, testing, Docker, CI/CD, monitoring, and model/version management.

### Should I learn cloud computing?

Yes.

AI systems increasingly depend on cloud or distributed infrastructure, but you don't need to learn every cloud service. Learn the underlying concepts and then use the provider your projects require.

### Is AI engineering a good career in 2026?

AI engineering is a strong technical direction because companies need people who can turn AI capabilities into usable software systems. But the field is competitive, and simply knowing how to call AI APIs is not enough.

Strong software engineering fundamentals, ML understanding, systems thinking, and real projects are much harder to replace.

## Final Thoughts

AI engineering is not about attaching a model to a button.

It is about building a complete system around an AI capability.

That system may include:

```text
Data
 ↓
Models
 ↓
Retrieval
 ↓
Tools
 ↓
APIs
 ↓
Business Logic
 ↓
Security
 ↓
Evaluation
 ↓
Deployment
 ↓
Monitoring
```

The model is important.

But the surrounding engineering determines whether the product is actually useful.

If you want to become an AI engineer, build your foundation in software engineering first, learn machine learning and deep learning properly, understand modern LLM systems, and then repeatedly build production-style projects.

Don't optimize for the number of AI tools you know.

Optimize for the number of difficult problems you can solve.

That's the skill that compounds.

## Where to Go Next

You've now completed the **LEARN → AI** pillar of AI Career Guide:

**Artificial Intelligence → Machine Learning → Deep Learning → LLMs → AI Engineering**

The next step is to turn this knowledge into something tangible.

Move into the **BUILD** pillar:

**AI Projects → ML Projects → LLM Projects → Software Projects**

Start with a project that forces you to connect model knowledge with real software engineering.

### Sources

- [NIST — AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [NIST — Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)
- [Google Cloud — Develop a Generative AI Application](https://docs.cloud.google.com/docs/ai-ml/generative-ai/develop-generative-ai-application)
- [Google Cloud Architecture Center — RAG-Capable Generative AI Application](https://docs.cloud.google.com/architecture/rag-capable-gen-ai-app-using-vertex-ai)
- [Google Cloud — Generative AI Evaluation](https://cloud.google.com/blog/topics/developers-practitioners/master-generative-ai-evaluation-from-single-prompts-to-complex-agents)
- [AWS — What Is MLOps?](https://aws.amazon.com/what-is/mlops/)
- [AWS — SageMaker MLOps](https://aws.amazon.com/sagemaker/ai/mlops/)
- [Stanford HAI — 2026 AI Index Report](https://hai.stanford.edu/ai-index/2026-ai-index-report)
