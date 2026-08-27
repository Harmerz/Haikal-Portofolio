# Haikal Hilmi — Portfolio

Personal portfolio for Haikal Hilmi, showcasing data engineering and software engineering work through a multilingual, exportable Next.js application.

**Live site:** [haikalhilmi.my.id](https://haikalhilmi.my.id)

## Highlights

- Dedicated Data Engineering and Software Engineering portfolios
- Detailed project pages with intercepting-route modals
- Six languages: English, Indonesian, German, French, Spanish, and Italian
- Browser-language detection with a persisted language preference
- General and Upwork-specific experiences selected by subdomain
- Portfolio exports generated from the same typed data as the website
- AI discovery through `/llms.txt` and structured Markdown exports
- Dynamic sitemap and project-level SEO routes

## Portfolio routes

| Route                | Description                                               |
| -------------------- | --------------------------------------------------------- |
| `/`                  | Combined Data and Software Engineering portfolio          |
| `/data-engineer`     | Data Engineering projects, infrastructure, and experience |
| `/software-engineer` | Software Engineering products and experience              |
| `/projects/[id]`     | Shareable detail page for an individual project           |
| `/portfolio.md`      | AI- and RAG-friendly Markdown export                      |
| `/portfolio.pdf`     | Downloadable PDF generated from the Markdown export       |
| `/llms.txt`          | Canonical portfolio sources for AI systems                |

The export routes accept an optional `scope` query parameter:

- `?scope=de` — Data Engineering only
- `?scope=se` — Software Engineering only
- No query parameter — combined portfolio

Examples: [`/portfolio.md?scope=de`](https://haikalhilmi.my.id/portfolio.md?scope=de) and [`/portfolio.pdf?scope=se`](https://haikalhilmi.my.id/portfolio.pdf?scope=se).

## Tech stack

- Next.js 15 with the App Router and Turbopack
- React 19 and TypeScript
- Tailwind CSS 4
- `pdf-lib` for server-side PDF generation
- ESLint 9 and Prettier

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm

### Run locally

```bash
git clone https://github.com/Harmerz/my-portofolio-general.git
cd my-portofolio-general
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No environment variables are required for local development.

## Available scripts

| Command         | Purpose                                |
| --------------- | -------------------------------------- |
| `npm run dev`   | Start the Turbopack development server |
| `npm run build` | Create a production build              |
| `npm run start` | Serve the production build             |
| `npm run lint`  | Run ESLint                             |

## Project structure

```text
src/
├── app/                 # Pages, layouts, metadata, and export routes
├── components/          # Reusable portfolio UI
├── config/              # Site URLs and portfolio-mode configuration
├── data/                # Typed projects, experience, and testimonials
├── i18n/                # Language types, dictionaries, and provider
├── lib/                 # Markdown and PDF export preparation
└── middleware.ts        # Subdomain routing and portfolio-mode selection
public/                  # Project media, logos, and profile assets
```

Portfolio content has a single source of truth:

- Projects live in `src/data/projects.ts`.
- Experience lives in `src/data/experience.ts`.
- Testimonials live in `src/data/testimonials.ts`.
- `buildPortfolioMarkdown()` turns the typed data into the canonical Markdown representation.
- `/portfolio.md` and `/portfolio.pdf` generate their responses at request time from that representation.

## Adding a project

Add the project to the appropriate exported collection in `src/data/projects.ts`:

- `dataProjects` for Data Engineering work
- `softwareProjects` for Software Engineering work

Keep all localized fields complete, add supporting media under `public/`, and verify the result on both the website and its generated export:

```text
/projects/<project-id>
/portfolio.md?scope=de
/portfolio.md?scope=se
```

Do not create or maintain a separate static `portfolio.md`; the route at `src/app/portfolio.md/route.ts` generates it through `buildPortfolioMarkdown()`.

## Subdomain behavior

`src/middleware.ts` maps production subdomains to a portfolio route and presentation mode:

| Subdomain                     | Portfolio            | Mode    |
| ----------------------------- | -------------------- | ------- |
| `www.haikalhilmi.my.id`       | Combined             | General |
| `de.haikalhilmi.my.id`        | Data Engineering     | General |
| `se.haikalhilmi.my.id`        | Software Engineering | General |
| `upwork.haikalhilmi.my.id`    | Combined             | Upwork  |
| `upwork-de.haikalhilmi.my.id` | Data Engineering     | Upwork  |
| `upwork-se.haikalhilmi.my.id` | Software Engineering | Upwork  |

Upwork mode changes calls to action and hides external testimonial links while reusing the same portfolio content.

## Validation

Before opening a pull request, run:

```bash
npm run lint
npm run build
```
