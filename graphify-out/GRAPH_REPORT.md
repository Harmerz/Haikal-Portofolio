# Graph Report - my-portofolio-general  (2026-09-01)

## Corpus Check
- 66 files · ~732,218 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 306 nodes · 638 edges · 40 communities (18 shown, 22 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d9d2ded4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
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
- projects.ts
- site.ts
- Q: sekarang apakah yang dua porto tadi sudah masuk ke portofolio.md?
- Q: taruh copy pagenya di navbar sebelah ganti bahasa
- Q: Add Cross-Platform Customer Review Scraper to the portfolio and portfolio.md
- middleware.ts
- AGENTS.md
- next.config.ts
- opengraph-image.tsx
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
- Q: Where should a reusable Copy page as Markdown action live for project detail pages, and how can project data be serialized to Markdown?

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 41 edges
2. `Localized` - 22 edges
3. `t()` - 21 edges
4. `dict` - 16 edges
5. `compilerOptions` - 16 edges
6. `SITE_URL` - 11 edges
7. `getCtaUrl()` - 9 edges
8. `getProjectMeta()` - 9 edges
9. `ProjectDetail()` - 8 edges
10. `buildPortfolioMarkdown()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `ProjectMeta` --references--> `Localized`  [EXTRACTED]
  src/data/projects.ts → src/i18n/config.ts
- `Testimonial` --references--> `Localized`  [EXTRACTED]
  src/data/testimonials.ts → src/i18n/config.ts
- `same()` --calls--> `t()`  [EXTRACTED]
  src/data/testimonials.ts → src/i18n/config.ts
- `ProjectModal()` --calls--> `getProjectById()`  [EXTRACTED]
  src/app/@modal/(.)projects/[id]/page.tsx → src/data/projects.ts
- `ContextBadge()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/ContextBadge.tsx → src/i18n/LanguageProvider.tsx

## Import Cycles
- None detected.

## Communities (40 total, 22 thin omitted)

### Community 1 - "portfolio-export.ts"
Cohesion: 0.17
Nodes (19): GET(), GET(), pdfSafe(), plainMarkdown(), runtime, TextStyle, wrapText(), UPWORK_URL (+11 more)

### Community 2 - "devDependencies"
Cohesion: 0.05
Nodes (40): eslint, eslint-config-next, @eslint/eslintrc, next, dependencies, next, pdf-lib, react (+32 more)

### Community 3 - "data-engineer/page.tsx"
Cohesion: 0.17
Nodes (27): dataTech, Home(), metadata, Home(), Home(), metadata, About(), CrossLinkBanner() (+19 more)

### Community 4 - "compilerOptions"
Cohesion: 0.07
Nodes (26): dom, dom.iterable, esnext, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx (+18 more)

### Community 6 - "eslint.config.mjs"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 12 - "LanguageProvider.tsx"
Cohesion: 0.10
Nodes (24): CrossLinkBannerProps, STANDARDS, Step, STEPS, SUBTITLE, TITLE, LANG_LABELS, DEFAULT_LABEL (+16 more)

### Community 13 - "projects.ts"
Cohesion: 0.11
Nodes (28): ProjectModal(), generateMetadata(), ProjectPage(), staticRoutes, ContextBadge(), STYLES, FeaturedHero(), Modal() (+20 more)

### Community 14 - "site.ts"
Cohesion: 0.10
Nodes (21): metadata, RootLayout(), GoogleAnalytics(), INTERACTION_EVENTS, Window, companies, LanguageSuggestBanner(), LanguageToggle() (+13 more)

### Community 15 - "Q: sekarang apakah yang dua porto tadi sudah masuk ke portofolio.md?"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: sekarang apakah yang dua porto tadi sudah masuk ke portofolio.md?, Source Nodes

### Community 16 - "Q: taruh copy pagenya di navbar sebelah ganti bahasa"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: taruh copy pagenya di navbar sebelah ganti bahasa, Source Nodes

### Community 17 - "Q: Add Cross-Platform Customer Review Scraper to the portfolio and portfolio.md"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: Add Cross-Platform Customer Review Scraper to the portfolio and portfolio.md, Source Nodes

### Community 26 - "opengraph-image.tsx"
Cohesion: 0.40
Nodes (3): alt, contentType, size

### Community 40 - "Q: Where should a reusable Copy page as Markdown action live for project detail pages, and how can project data be serialized to Markdown?"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: Where should a reusable Copy page as Markdown action live for project detail pages, and how can project data be serialized to Markdown?, Source Nodes

## Knowledge Gaps
- **113 isolated node(s):** `__filename`, `__dirname`, `compat`, `eslintConfig`, `nextConfig` (+108 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **22 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Work-memory lessons

**Preferred sources** — corroborated by past sessions; start here.
- `Footer()` (2× useful, score=1.948842806)
- `PortfolioScope` (2× useful, score=1.948842806) _(code changed — re-verify)_
- `buildPortfolioMarkdown()` (2× useful, score=1.948327554) _(code changed — re-verify)_

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLanguage()` connect `data-engineer/page.tsx` to `LanguageProvider.tsx`, `projects.ts`, `site.ts`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Why does `Localized` connect `LanguageProvider.tsx` to `portfolio-export.ts`, `projects.ts`, `site.ts`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `SITE_URL` connect `site.ts` to `portfolio-export.ts`, `data-engineer/page.tsx`, `projects.ts`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `__filename`, `__dirname`, `compat` to the rest of the system?**
  _113 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.04878048780487805 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `LanguageProvider.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10420168067226891 - nodes in this community are weakly interconnected._