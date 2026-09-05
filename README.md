# MeSite

Personal portfolio / about-me website for myself, Sheryna Kuipers. Built on top of MUI's Marketing Page template, restyled with a custom green theme derived from a personal banner image. The website is available in English and Dutch.

## Tech stack

| Concern    | Choice                            |
| ---------- | --------------------------------- |
| Framework  | React 19                          |
| Language   | TypeScript                        |
| UI library | MUI (Material UI) v9              |
| Styling    | Emotion, via `styled()` (no `sx`) |
| Build tool | Vite                              |
| Linting    | ESLint (flat config) + Prettier   |
| CI         | GitHub Actions                    |

## Getting started

### With the devcontainer (recommended)

1. Install Docker and the VS Code **Dev Containers** extension.
2. Open the repository in VS Code and choose **Reopen in Container**.
3. Dependencies install automatically (`npm install` runs as `postCreateCommand`).
4. Run `npm run dev` — the Vite dev server is forwarded on port `5173`.

### Without the devcontainer

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

## Scripts

| Script                 | Description                               |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Start the Vite dev server                 |
| `npm run build`        | Type-check and produce a production build |
| `npm run preview`      | Serve the production build locally        |
| `npm run typecheck`    | Type-check without emitting               |
| `npm run lint`         | Run ESLint                                |
| `npm run lint:fix`     | Run ESLint with `--fix`                   |
| `npm run format`       | Format with Prettier                      |
| `npm run format:check` | Check formatting without writing          |

CI (`.github/workflows/ci.yml`) runs `lint`, `format:check`, `typecheck` and
`build` on every push to `main` and on every pull request.

## Project structure

```
.devcontainer/           Development container definition
.github/workflows/       CI (lint, format check, typecheck, build)
public/
  Banner.jpg              Source banner the site's colors/portrait were derived from
  portrait.png            Portrait cropped from the banner, used in the Hero and header/footer logo
  favicon.png             Favicon cropped from the banner's watering-can illustration
src/
  App.tsx                 Application root — renders AboutMePage
  main.tsx                React entry point
  about-me/                The live site
    AboutMePage.tsx         Assembles every section, in order
    components/             One component per section/UI element
  content/                 Editable copy — see "Editing content" below
    types.ts                 Shape of the page's content
    en.ts / nl.ts             English and Dutch copy
    socialLinks.ts            LinkedIn/GitHub URLs (not translated)
    index.ts                  useContent() hook — returns copy for the active language
  i18n/                    Language toggle (English/Dutch)
    language.ts               Context + useLanguage() hook
    LanguageProvider.tsx       Provider — persists the choice to localStorage
  theme/                   The site's green theme, derived from public/Banner.jpg
    palette.ts               Color scales (olive, mustard, cream) and light/dark schemes
    customizations.ts         Fixes vendored-theme components (buttons, icon buttons, toggles)
                              that otherwise ignore the custom palette
    AboutMeAppTheme.tsx       Wires the above into a theme, alongside shared-theme's
                              typography/shadows/customizations
  shared-theme/             Shared theme the template depends on (vendored, unmodified)
```

## Editing content

Nearly everything on the page is data-driven and duplicated across two files, `src/content/en.ts` (English) and `src/content/nl.ts` (Dutch), so most content changes don't touch component code. Edit both files to keep the two languages in sync.

| To change...                          | Edit                                                                                     |
| ------------------------------------- | ---------------------------------------------------------------------------------------- |
| Name, tagline, intro text             | `hero` in `en.ts` / `nl.ts`                                                              |
| Tools & technologies chip row         | `techStack` in `en.ts` / `nl.ts`                                                         |
| Work experience entries               | `experience` in `en.ts` / `nl.ts` (see `ExperienceItem` in `types.ts`)                   |
| Strengths cards                       | `strengths` in `en.ts` / `nl.ts` — icons are matched by array order in `Strengths.tsx`   |
| Skills tiers (Frontend/Backend/Tools) | `skills` in `en.ts` / `nl.ts`                                                            |
| Recommendations/testimonials          | `recommendations` in `en.ts` / `nl.ts` — the section stays hidden while `items` is empty |
| FAQ questions and answers             | `faq` in `en.ts` / `nl.ts`                                                               |
| Contact section copy                  | `contact` in `en.ts` / `nl.ts`                                                           |
| Footer bio and copyright name         | `footer` in `en.ts` / `nl.ts`                                                            |
| LinkedIn / GitHub URLs                | `src/content/socialLinks.ts` (not translated)                                            |
| Nav labels                            | `nav` in `en.ts` / `nl.ts`                                                               |
| Page title/description (SEO)          | `meta` in `en.ts` / `nl.ts`, and `index.html` for the static fallback                    |

Each section in `AboutMePage.tsx` is a single line, delete a line (and its neighbouring `Divider`) to remove that section entirely.

## Theming

The color palette lives in `src/theme/palette.ts` and was sampled directly from `public/Banner.jpg` (the olive green diagonal and the mustard yellow plant pot). To re-theme the site, edit the `olive` and `mustard` color scales there, every component reads color from the theme, nothing is hardcoded per-component.

`src/theme/customizations.ts` exists because the vendored `shared-theme` components hardcode certain colors (e.g. contained primary buttons render grey/black, icon buttons always use a fixed border/text color) regardless of the active palette. Rather than edit the vendored files, this file re-declares just those component overrides using the real theme palette.

## Internationalization

The language toggle (EN/NL) in the header is backed by a small custom context in `src/i18n/`, no external i18n library. `useLanguage()` exposes the current language and a setter; the choice is persisted to `localStorage` and defaults to the browser's language on first visit. `useContent()` (in `src/content/index.ts`) returns the full copy object for the active language.

## About the vendored template

`src/shared-theme/` is copied verbatim from [MUI's Marketing Page template](https://github.com/mui/material-ui/tree/v9.3.1/docs/data/material/getting-started/templates/marketing-page) at tag `v9.3.1`. It's kept unmodified, component overrides live in `src/theme/customizations.ts` instead, so it can still be diffed against upstream MUI if needed. The template's own page/section components (`marketing-page/`) have been fully replaced by `src/about-me/` and removed.
