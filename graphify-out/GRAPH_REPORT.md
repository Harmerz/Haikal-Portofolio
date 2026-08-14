# Graph Report - my-portofolio-general  (2026-08-15)

## Corpus Check
- 58 files · ~813,534 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 294 nodes · 537 edges · 38 communities (16 shown, 22 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6eff8c77`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Software engineering projects
- portfolio-export.ts
- devDependencies
- data-engineer/page.tsx
- compilerOptions
- FEATURED_IDS array
- eslint.config.mjs
- Global Data Inspirasi (client company)
- Graphify Usage Rules
- PT Aksarakan Bhumi Indonesia (client company)
- postcss.config.mjs
- Project interface
- LanguageProvider.tsx
- useLanguage
- projects/[id]/page.tsx
- middleware.ts
- AGENTS.md
- next.config.ts
- PreToolUse Bash Hook (grep/rg detection)
- PreToolUse Read/Glob Hook (source-file gate)
- Robota product (mentioned in testimonial)
- Semesta Data Digital (client company)
- package.json Manifest
- PostCSS Config (@tailwindcss/postcss)
- Getting Started doc
- Captured portfolio gallery HTML snippet
- Alamsyah Pangestu testimonial entry
- Jeesun Kim testimonial entry
- Widyawan testimonial entry
- SUBDOMAIN_ROUTES map
- TypeScript Config (@/* path alias)

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 39 edges
2. `Localized` - 22 edges
3. `t()` - 21 edges
4. `Software engineering projects` - 18 edges
5. `compilerOptions` - 16 edges
6. `dict shared UI strings object` - 14 edges
7. `getCtaUrl()` - 9 edges
8. `getProjectMeta()` - 9 edges
9. `Haikal Hilmi` - 9 edges
10. `Data engineering projects` - 9 edges

## Surprising Connections (you probably didn't know these)
- `Footer()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Footer.tsx → src/i18n/LanguageProvider.tsx
- `LanguageToggle()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/LanguageToggle.tsx → src/i18n/LanguageProvider.tsx
- `Testimonials()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Testimonials.tsx → src/i18n/LanguageProvider.tsx
- `ExperienceItem` --references--> `Localized`  [EXTRACTED]
  src/data/experience.ts → src/i18n/config.ts
- `Testimonial` --references--> `Localized`  [EXTRACTED]
  src/data/testimonials.ts → src/i18n/config.ts

## Import Cycles
- None detected.

## Communities (38 total, 22 thin omitted)

### Community 0 - "Software engineering projects"
Cohesion: 0.05
Nodes (40): Atensi — Sentiment Monitoring, Auto-Engagement Bot, Blockchain Supply Chain, ByteDance, Client testimonials, Contact and profiles, Core capabilities, Create Carousels (+32 more)

### Community 1 - "portfolio-export.ts"
Cohesion: 0.15
Nodes (16): GET(), GET(), pdfSafe(), plainMarkdown(), TextStyle, wrapText(), Testimonials(), experience (+8 more)

### Community 2 - "devDependencies"
Cohesion: 0.05
Nodes (40): eslint, eslint-config-next, @eslint/eslintrc, next, dependencies, next, pdf-lib, react (+32 more)

### Community 3 - "data-engineer/page.tsx"
Cohesion: 0.14
Nodes (25): dataTech, Home(), metadata, Home(), Home(), metadata, About(), CrossLinkBanner() (+17 more)

### Community 4 - "compilerOptions"
Cohesion: 0.07
Nodes (26): dom, dom.iterable, esnext, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx (+18 more)

### Community 6 - "eslint.config.mjs"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 12 - "LanguageProvider.tsx"
Cohesion: 0.09
Nodes (26): inter, metadata, CrossLinkBannerProps, HowIWork(), Step, STEPS, SUBTITLE, TITLE (+18 more)

### Community 13 - "useLanguage"
Cohesion: 0.15
Nodes (22): ContextBadge(), STYLES, EngineeringStandards(), STANDARDS, FeaturedHero(), LanguageSuggestBanner(), Modal(), ProjectCard() (+14 more)

### Community 17 - "projects/[id]/page.tsx"
Cohesion: 0.24
Nodes (6): ProjectModal(), generateMetadata(), ProjectPage(), staticRoutes, allProjects, getProjectById()

## Knowledge Gaps
- **127 isolated node(s):** `__filename`, `__dirname`, `compat`, `eslintConfig`, `nextConfig` (+122 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **22 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLanguage()` connect `useLanguage` to `portfolio-export.ts`, `data-engineer/page.tsx`, `LanguageProvider.tsx`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Why does `Localized` connect `LanguageProvider.tsx` to `portfolio-export.ts`, `data-engineer/page.tsx`, `useLanguage`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `__filename`, `__dirname`, `compat` to the rest of the system?**
  _127 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Software engineering projects` be split into smaller, more focused modules?**
  _Cohesion score 0.04878048780487805 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.04878048780487805 - nodes in this community are weakly interconnected._
- **Should `data-engineer/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13781512605042018 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._