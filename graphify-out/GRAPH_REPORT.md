# Graph Report - .  (2026-07-01)

## Corpus Check
- Large corpus: 138 files � ~709,195 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 192 nodes · 463 edges · 12 communities (9 shown, 3 thin omitted)
- Extraction: 94% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 25 edges (avg confidence: 0.85)
- Token cost: 201,505 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Layout, Header & i18n Setup|Layout, Header & i18n Setup]]
- [[_COMMUNITY_Project Showcase Components|Project Showcase Components]]
- [[_COMMUNITY_Package Manifest & Dependencies|Package Manifest & Dependencies]]
- [[_COMMUNITY_Data Engineer Landing Page|Data Engineer Landing Page]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Software Engineer Landing Page|Software Engineer Landing Page]]
- [[_COMMUNITY_Build Config & Subdomain Routing|Build Config & Subdomain Routing]]
- [[_COMMUNITY_Projects Data & Footer|Projects Data & Footer]]
- [[_COMMUNITY_Graphify Automation Hooks|Graphify Automation Hooks]]
- [[_COMMUNITY_Testimonial Aksarakan Bhumi|Testimonial: Aksarakan Bhumi]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Project Type Interface|Project Type Interface]]

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 38 edges
2. `t()` - 36 edges
3. `Localized` - 22 edges
4. `compilerOptions` - 16 edges
5. `dict shared UI strings object` - 14 edges
6. `dataProjects` - 10 edges
7. `ContextBadge()` - 9 edges
8. `FeaturedHero()` - 9 edges
9. `ProjectDetail()` - 9 edges
10. `getProjectMeta()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Captured portfolio gallery HTML snippet` --semantically_similar_to--> `softwareProjects`  [AMBIGUOUS] [semantically similar]
  src/app/data-engineer/test.html → src/data/projects.ts
- `Getting Started doc` --references--> `package.json Manifest`  [EXTRACTED]
  README.md → package.json
- `PreToolUse Bash Hook (grep/rg detection)` --rationale_for--> `Graphify Usage Rules`  [EXTRACTED]
  .claude/settings.json → CLAUDE.md
- `PreToolUse Read/Glob Hook (source-file gate)` --rationale_for--> `Graphify Usage Rules`  [EXTRACTED]
  .claude/settings.json → CLAUDE.md
- `package.json Manifest` --shares_data_with--> `eslintConfig`  [EXTRACTED]
  package.json → eslint.config.mjs

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Project rendering components sharing ContextBadge + Project meta helpers** — components_featuredhero_featuredhero, components_projectcard_projectcard, components_projectdetail_projectdetail, components_contextbadge_contextbadge [INFERRED 0.85]
- **Components consuming the shared CTA_URL config value** — components_header_header, components_herosection_herosection, config_site_cta_url [EXTRACTED 0.95]
- **Components implementing the useLanguage + dict localization pattern** — components_about_about, components_footer_footer, components_experience_experience, components_header_header, components_howiwork_howiwork, components_engineeringstandards_engineeringstandards, components_testimonials_testimonials, components_hpcstats_hpcstats [INFERRED 0.75]
- **Next.js @modal Parallel Route Pattern** — app_layout_rootlayout, modal_default_default, id_page_projectmodal [INFERRED 0.85]
- **'@/*' Path Alias Consumers** — tsconfig_tsconfig, data_projects_getprojectbyid, i18n_config_t, app_layout_rootlayout [INFERRED 0.75]
- **Subdomain Routing for se./de. haikalhilmi.my.id** — src_middleware_middleware, next_config_nextconfig, software_engineer_page_home, data_engineer_page_home [INFERRED 0.85]

## Communities (12 total, 3 thin omitted)

### Community 0 - "Layout, Header & i18n Setup"
Cohesion: 0.09
Nodes (26): inter, metadata, RootLayout(), CrossLinkBannerProps, Header(), companies, HeroSection(), Step (+18 more)

### Community 1 - "Project Showcase Components"
Cohesion: 0.20
Nodes (20): ContextBadge(), STYLES, FeaturedHero(), Modal(), PipelineDiagram(), ProjectCard(), ProjectCardProps, ProjectDetail() (+12 more)

### Community 2 - "Package Manifest & Dependencies"
Cohesion: 0.08
Nodes (24): dependencies, next, react, react-dom, devDependencies, eslint, eslint-config-next, @eslint/eslintrc (+16 more)

### Community 3 - "Data Engineer Landing Page"
Cohesion: 0.15
Nodes (18): CrossLinkBanner(), EngineeringStandards(), STANDARDS, HowIWork(), HpcStats(), SUBTITLE, TITLE, SectionHeader() (+10 more)

### Community 4 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 5 - "Software Engineer Landing Page"
Cohesion: 0.20
Nodes (13): Home(), About(), Experience(), Reveal(), RevealProps, experience, ExperienceItem, getExperience() (+5 more)

### Community 6 - "Build Config & Subdomain Routing"
Cohesion: 0.13
Nodes (12): compat, __dirname, eslintConfig, __filename, nextConfig, package.json Manifest, PostCSS Config (@tailwindcss/postcss), Getting Started doc (+4 more)

### Community 7 - "Projects Data & Footer"
Cohesion: 0.20
Nodes (12): Footer(), Global Data Inspirasi (client company), Robota product (mentioned in testimonial), Semesta Data Digital (client company), Captured portfolio gallery HTML snippet, allProjects, getProjectById(), softwareProjects (+4 more)

### Community 8 - "Graphify Automation Hooks"
Cohesion: 0.67
Nodes (3): Graphify Usage Rules, PreToolUse Bash Hook (grep/rg detection), PreToolUse Read/Glob Hook (source-file gate)

## Ambiguous Edges - Review These
- `softwareProjects` → `Captured portfolio gallery HTML snippet`  [AMBIGUOUS]
  src/app/data-engineer/test.html · relation: semantically_similar_to

## Knowledge Gaps
- **70 isolated node(s):** `__filename`, `__dirname`, `compat`, `name`, `version` (+65 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `softwareProjects` and `Captured portfolio gallery HTML snippet`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **Why does `t()` connect `Data Engineer Landing Page` to `Layout, Header & i18n Setup`, `Project Showcase Components`, `Software Engineer Landing Page`, `Projects Data & Footer`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **Why does `SUBDOMAIN_ROUTES map` connect `Build Config & Subdomain Routing` to `Data Engineer Landing Page`, `Software Engineer Landing Page`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `t()` (e.g. with `About()` and `ContextBadge()`) actually correct?**
  _`t()` has 10 INFERRED edges - model-reasoned connections that need verification._
- **What connects `__filename`, `__dirname`, `compat` to the rest of the system?**
  _72 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Layout, Header & i18n Setup` be split into smaller, more focused modules?**
  _Cohesion score 0.09176788124156546 - nodes in this community are weakly interconnected._
- **Should `Package Manifest & Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._