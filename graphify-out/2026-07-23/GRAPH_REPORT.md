# Graph Report - my-portofolio-general  (2026-07-23)

## Corpus Check
- 53 files · ~722,249 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 218 nodes · 410 edges · 40 communities (15 shown, 25 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `686020c1`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Layout, Header & i18n Setup
- Project Showcase Components
- Package Manifest & Dependencies
- page.tsx
- TypeScript Config
- Software Engineer Landing Page
- Build Config & Subdomain Routing
- Projects Data & Footer
- Graphify Automation Hooks
- Testimonial: Aksarakan Bhumi
- PostCSS Config
- Project Type Interface
- Community 12
- projects.ts
- Community 14
- Community 15
- useLanguage
- page.tsx
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
4. `compilerOptions` - 16 edges
5. `getProjectMeta()` - 7 edges
6. `isVideo()` - 7 edges
7. `Footer()` - 6 edges
8. `ProjectDetail()` - 6 edges
9. `Project` - 6 edges
10. `getProjectById()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Home()` --calls--> `t()`  [EXTRACTED]
  src/app/data-engineer/page.tsx → src/i18n/config.ts
- `Home()` --calls--> `t()`  [EXTRACTED]
  src/app/page.tsx → src/i18n/config.ts
- `Home()` --calls--> `t()`  [EXTRACTED]
  src/app/software-engineer/page.tsx → src/i18n/config.ts
- `Header()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Header.tsx → src/i18n/LanguageProvider.tsx
- `LanguageToggle()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/LanguageToggle.tsx → src/i18n/LanguageProvider.tsx

## Import Cycles
- None detected.

## Communities (40 total, 25 thin omitted)

### Community 2 - "Package Manifest & Dependencies"
Cohesion: 0.08
Nodes (24): dependencies, next, react, react-dom, devDependencies, eslint, eslint-config-next, @eslint/eslintrc (+16 more)

### Community 3 - "page.tsx"
Cohesion: 0.10
Nodes (26): dataTech, Home(), metadata, Home(), Home(), metadata, About(), Experience() (+18 more)

### Community 4 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 6 - "Build Config & Subdomain Routing"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 12 - "Community 12"
Cohesion: 0.14
Nodes (18): CrossLinkBanner(), CrossLinkBannerProps, EngineeringStandards(), STANDARDS, companies, HeroSection(), HowIWork(), Step (+10 more)

### Community 13 - "projects.ts"
Cohesion: 0.20
Nodes (18): ContextBadge(), STYLES, FeaturedHero(), ProjectCard(), ProjectCardProps, ProjectDetail(), FEATURED_IDS, getPipeline() (+10 more)

### Community 14 - "Community 14"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 16 - "useLanguage"
Cohesion: 0.17
Nodes (12): inter, metadata, Header(), LanguageSuggestBanner(), LANG_LABELS, LanguageToggle(), Lang, LANGS (+4 more)

### Community 17 - "page.tsx"
Cohesion: 0.21
Nodes (7): ProjectModal(), generateMetadata(), ProjectPage(), staticRoutes, Modal(), allProjects, getProjectById()

## Knowledge Gaps
- **90 isolated node(s):** `__filename`, `__dirname`, `compat`, `eslintConfig`, `nextConfig` (+85 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **25 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLanguage()` connect `projects.ts` to `useLanguage`, `page.tsx`, `page.tsx`, `Community 12`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Why does `Localized` connect `Community 12` to `useLanguage`, `page.tsx`, `projects.ts`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Why does `t()` connect `Community 12` to `page.tsx`, `projects.ts`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **What connects `__filename`, `__dirname`, `compat` to the rest of the system?**
  _93 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Package Manifest & Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `TypeScript Config` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._