## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
## Portfolio synchronization

- Whenever a portfolio project is added, place it in the appropriate exported collection in `src/data/projects.ts` (`dataProjects` or `softwareProjects`) so the generated `/portfolio.md` and `/portfolio.pdf` exports include it automatically.
- After adding a project, verify that its title appears in `/portfolio.md` for the relevant scope (`?scope=de`, `?scope=se`, or the general export).
- Do not maintain a separate static `portfolio.md`; `src/app/portfolio.md/route.ts` generates it from the typed portfolio data through `buildPortfolioMarkdown()`.
