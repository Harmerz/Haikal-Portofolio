# Graph Report - my-portofolio-general  (2026-08-24)

## Corpus Check
- 60 files · ~729,296 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 271 nodes · 530 edges · 41 communities (19 shown, 22 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fed03969`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- projects.ts
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
- Q: sekarang apakah yang dua porto tadi sudah masuk ke portofolio.md?
- Experience.tsx
- package.json
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
- Q: Where should a reusable Copy page as Markdown action live for project detail pages, and how can project data be serialized to Markdown?

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 41 edges
2. `Localized` - 22 edges
3. `t()` - 21 edges
4. `compilerOptions` - 16 edges
5. `dict shared UI strings object` - 15 edges
6. `getCtaUrl()` - 9 edges
7. `getProjectMeta()` - 9 edges
8. `buildPortfolioMarkdown()` - 8 edges
9. `Project` - 7 edges
10. `isVideo()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Footer()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Footer.tsx → src/i18n/LanguageProvider.tsx
- `LanguageToggle()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/LanguageToggle.tsx → src/i18n/LanguageProvider.tsx
- `TechStackProps` --references--> `Localized`  [EXTRACTED]
  src/components/TechStack.tsx → src/i18n/config.ts
- `Testimonials()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Testimonials.tsx → src/i18n/LanguageProvider.tsx
- `ExperienceItem` --references--> `Localized`  [EXTRACTED]
  src/data/experience.ts → src/i18n/config.ts

## Import Cycles
- None detected.

## Communities (41 total, 22 thin omitted)

### Community 0 - "projects.ts"
Cohesion: 0.12
Nodes (15): ProjectModal(), generateMetadata(), ProjectPage(), staticRoutes, SUBTITLE, TITLE, allProjects, dataProjects (+7 more)

### Community 1 - "portfolio-export.ts"
Cohesion: 0.32
Nodes (12): GET(), GET(), pdfSafe(), plainMarkdown(), TextStyle, wrapText(), getPipeline(), buildPortfolioMarkdown() (+4 more)

### Community 2 - "devDependencies"
Cohesion: 0.09
Nodes (23): eslint, eslint-config-next, @eslint/eslintrc, devDependencies, eslint, eslint-config-next, @eslint/eslintrc, prettier (+15 more)

### Community 3 - "data-engineer/page.tsx"
Cohesion: 0.12
Nodes (28): dataTech, Home(), metadata, Home(), Home(), metadata, About(), CrossLinkBanner() (+20 more)

### Community 4 - "compilerOptions"
Cohesion: 0.07
Nodes (26): dom, dom.iterable, esnext, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx (+18 more)

### Community 6 - "eslint.config.mjs"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 12 - "LanguageProvider.tsx"
Cohesion: 0.10
Nodes (23): inter, metadata, CrossLinkBannerProps, HowIWork(), Step, STEPS, LANG_LABELS, LanguageToggle() (+15 more)

### Community 13 - "useLanguage"
Cohesion: 0.18
Nodes (19): ContextBadge(), STYLES, EngineeringStandards(), STANDARDS, FeaturedHero(), LanguageSuggestBanner(), Modal(), labels (+11 more)

### Community 15 - "Q: sekarang apakah yang dua porto tadi sudah masuk ke portofolio.md?"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: sekarang apakah yang dua porto tadi sudah masuk ke portofolio.md?, Source Nodes

### Community 16 - "Experience.tsx"
Cohesion: 0.47
Nodes (4): Experience(), experience, ExperienceItem, getExperience()

### Community 17 - "package.json"
Cohesion: 0.11
Nodes (17): next, dependencies, next, pdf-lib, react, react-dom, name, private (+9 more)

### Community 40 - "Q: Where should a reusable Copy page as Markdown action live for project detail pages, and how can project data be serialized to Markdown?"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: Where should a reusable Copy page as Markdown action live for project detail pages, and how can project data be serialized to Markdown?, Source Nodes

## Knowledge Gaps
- **100 isolated node(s):** `__filename`, `__dirname`, `compat`, `eslintConfig`, `nextConfig` (+95 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **22 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Work-memory lessons

**Preferred sources** — corroborated by past sessions; start here.
- `buildPortfolioMarkdown()` (2× useful, score=1.998910627)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLanguage()` connect `useLanguage` to `Experience.tsx`, `projects.ts`, `data-engineer/page.tsx`, `LanguageProvider.tsx`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Why does `Localized` connect `LanguageProvider.tsx` to `projects.ts`, `Experience.tsx`, `data-engineer/page.tsx`, `useLanguage`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `__filename`, `__dirname`, `compat` to the rest of the system?**
  _100 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `projects.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11857707509881422 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `data-engineer/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11522048364153627 - nodes in this community are weakly interconnected._