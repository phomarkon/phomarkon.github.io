# Website audit

Audit date: 21 July 2026

## Current architecture

- Repository: `phomarkon/phomarkon.github.io`
- Audited branch and commit: `main` at `4db7c08af6905ac2d8b763fc5e8a4c1bcc21ff03`
- Remote: `https://github.com/phomarkon/phomarkon.github.io.git`
- Generator before migration: Astro 4 with vanilla CSS and Bun
- Generated output before migration: `dist/`
- Live URL: <https://phomarkon.github.io/>
- Custom domain: none. No `CNAME` exists in the repository and the GitHub Pages API reports `cname: null`.
- Analytics: none found.
- Backup reference: annotated local tag `pre-academic-pages-2026-07-21`, pointing to the audited commit. The tag has not been pushed.

The existing site is a one-page Astro portfolio with separate publication-detail routes and a teaching route. Data lives in TypeScript files under `src/data/`. The homepage assembles a biography, research questions, selected work, an interactive research landscape, publications, thesis, highlights, and a career timeline. Publication detail pages are generated from `src/pages/publications/[slug].astro`.

## Deployment

The repository contains `.github/workflows/deploy.yml`. On every push to `main`, it installs dependencies with Bun, runs the Astro build, uploads `dist/`, and deploys with GitHub's Pages Actions. Recent runs through 5 July 2026 succeeded.

GitHub's Pages API nevertheless reports `build_type: legacy` and `source: gh-pages`, where the last commit dates from 12 May 2026. The Actions deployment is newer and is what the live site currently serves. This stale source metadata is the main deployment risk. The migration will keep an explicit Pages Actions workflow, change only its build steps to Jekyll, and avoid changing repository settings.

## Existing routes

Routes generated before migration:

- `/`
- `/teaching/`
- `/publications/acceptance-cards/`
- `/publications/agentic-hybrid-retrieval/`
- `/publications/cake/`
- `/publications/conformal-market-redesign/`
- `/publications/counterfactual-self-reports/`
- `/publications/decoded-but-unused/`
- `/publications/flood-detection/`
- `/publications/fruit-hyperspectral/`
- `/publications/open-box-fallacy/`
- `/publications/path-already-walked/`
- `/publications/small-organ-segmentation/`
- `/publications/vibe-architecting/`
- `/cv.pdf` and `/cv/cv.pdf`
- `/papers/<filename>.pdf` for twelve local papers

The migration keeps `/`, adds the required complete `/publications/` page, retains all PDF routes, and uses `jekyll-redirect-from` for old publication-detail and teaching URLs.

## Navigation, metadata, and presentation

Before migration, the navigation exposed About, Research, Publications, Teaching, and CV. It did not expose a standalone complete publications page, Scholar, GitHub, or a research resume. The site had title, description, Open Graph title/description/image, favicon, and a Twitter summary card. It did not define a canonical URL, JSON-LD, sitemap link, or robots file explicitly. No analytics identifier or site-verification token was found.

The site used remote Google Fonts, a dark-mode toggle, animated hover states, filters, a horizontal career timeline, and an interactive research map. These are all unnecessary for the requested academic presentation and add JavaScript and visual complexity.

## Content inventory and migration decision

| Content or asset | Decision | Reason |
|---|---|---|
| Name, email, Scholar, GitHub, ORCID, LinkedIn | Preserve | Verified in the site, CV, and public profiles. |
| `public/profile.png` | Preserve and move to `images/profile.png` | Suitable square professional headshot; no replacement was supplied. |
| Twelve local paper PDFs | Preserve at `/papers/` | Stable, important scholarly downloads. |
| `public/cv/cv.tex` | Rewrite | Editable source exists, but the current version is three pages, includes a long summary and full publication list, and names Cambridge rather than Tübingen. |
| `public/cv.pdf`, `public/cv/cv.pdf` | Replace after compiling source | Both are the same three-page CV and contain outdated graduate-study information. |
| Research questions | Rewrite | Current wording overstates a unified causal programme and theoretical position. |
| Recent interpretability work | Preserve and foreground | Strongest alignment with the current direction, with empirical papers and artifacts. |
| BSc thesis and conformal work | Preserve but reduce prominence | Strong evidence of end-to-end engineering; no longer the central research interest. |
| Complete publication list | Preserve, regroup, and de-duplicate | Status distinctions were previously compressed into cards and detail pages. |
| Teaching role and AI course | Preserve compactly on home | Relevant evidence; a separate teaching page is not required. |
| Awards, grant, military recognition | Preserve selectively | Strong factual signals, with conservative wording. |
| Startup and long professional history | Compress; retain SaturoLabs/DreamBear as one concrete shipped-product entry on the home page and CV | The product supports the applied side of the profile without competing with the research narrative. |
| Interactive landscape, skill-like maps, timeline, filters, dark toggle | Remove | Conflicts with the requested lean Academic Pages presentation. |
| Astro source and Bun lockfile | Archive in Git history, remove from active site | Superseded by Jekyll migration. |
| `.claude/` | Leave untouched and untracked | Unrelated local user material. |

## Broken, outdated, or conflicting information

1. The homepage and CV say that the next degree is the Cambridge MPhil. The requested and current factual position is incoming MSc Machine Learning at the University of Tübingen in October 2026. Cambridge and Copenhagen should appear, if at all, only as a neutral admissions news item.
2. The homepage describes current work as already being about the theoretical foundations of learning. The stronger supported claim is empirical ML and research engineering, with a developing interest in deeper theory.
3. The homepage uses the requested-to-remove sushi metaphor and a slogan-like question.
4. The CV presents `3.8/4.0` without saying that the conversion is unofficial.
5. The CV is three pages and includes a full publication list despite the requested two-page academic CV.
6. The current publication labels risk readers reading workshop acceptance as main-conference acceptance. Exact workshop names and presentation types are required.
7. `NeurIPS 2026` appears as a venue field for two preprints. Local manuscripts state that they were submitted to NeurIPS 2026. The public site must label them as preprints, not NeurIPS publications.
8. Several local PDFs still contain anonymous-submission wording or temporary anonymous artifact links. Their publication metadata must come from verified site/CV records, not from the anonymous author block.
9. Scholar initially rejected the automated fetch with HTTP 403, although a later direct link check returned HTTP 200. The profile URL is retained, but the publication inventory is grounded in the repository, PDFs, OpenReview, arXiv links, and the editable CV rather than volatile Scholar indexing.
10. The exact official name and amount of the William Demant Foundation support are not documented locally. It is described only as support for graduate study, not a research grant.
11. The faculty-wide thesis-award nomination appears in the current site and CV, but no linked official confirmation is available locally. It is omitted from prominent public copy pending documentary confirmation.
12. The exact status of the Biomedical Signal Processing and Control manuscript is not independently confirmed beyond “preprint”; it remains a preprint.

## Reusable assets and links

- Headshot: `public/profile.png`
- Favicons: `public/favicon.*`, `public/apple-touch-icon.png`
- CV source and PDFs: `public/cv/`
- Papers: `public/papers/`
- Scholar: <https://scholar.google.com/citations?user=zPHjLREAAAAJ&hl=en>
- GitHub: <https://github.com/phomarkon>
- ORCID: <https://orcid.org/0009-0004-2521-7879>
- LinkedIn: <https://www.linkedin.com/in/phongsakonmarkkonrad>
- Thesis code: <https://github.com/phomarkon/heimdall-src>
- Thesis model: <https://huggingface.co/Phongsakon/heimdall>
- Teaching material: <https://phomarkon.github.io/ai101/#/welcome>
- Decoded but Unused: <https://openreview.net/forum?id=da9ylT2doy>
- A Path Already Walked: <https://openreview.net/forum?id=dSfjkJB3bQ>
- Vibe Architecting code: <https://github.com/phomarkon/vibe-architecting-case-study>
- CAKE benchmark: <https://github.com/timadam03/CAKE-benchmark>

## Migration method

The migration uses Academic Pages stable release `v0.8.4`, tag commit `b99c36e022146cc6f4e884496c976d4a30386794`. Core layouts, includes, Sass, assets, and data are taken from that release. The upstream `github-pages` bundle pins Jekyll 3.9 and Liquid 4.0.3, which fail on supported modern Ruby because Liquid calls the removed `tainted?` method. The site therefore uses Jekyll 4.4 and the same standard plugins in the explicit Actions build. Sample posts, talks, teaching pages, portfolio pages, CV JSON, and other unused content types are not migrated. Collections not used by this site are disabled.

Only two authored HTML content pages remain: Home and Publications. The CV is a direct PDF link. Old detail routes redirect to Publications, and `/teaching/` redirects to the homepage teaching section. The existing explicit GitHub Pages Actions deployment is retained and adapted to Jekyll, avoiding any dependency on the stale `gh-pages` branch.

No push, merge, pull request, or repository-settings change is part of this migration.

## Final validation

- Production build: passed with Ruby 3.3, Jekyll 4.4.1, and the locked bundle. Academic Pages' vendored Sass emits deprecation warnings but no build errors.
- Responsive browser check: passed at 1280 x 720 and 390 x 844 on Home and Publications. There is no horizontal overflow; the compact navigation moves five links into its mobile menu; the headshot loads; and all twelve publication entries render.
- Browser console: no errors after adding a light-theme compatibility value for the v0.8.4 bundle's out-of-scope theme fallback.
- Readability: body text is 16 px at the mobile viewport. Measured contrast is 14.16:1 for body text and 7.39:1 for links against white, above WCAG AA requirements.
- CV: compiled to a two-page A4 PDF and visually inspected page by page. No clipped text, overlaps, broken glyphs, or poor section transitions were found.
- Internal paths: all site-owned links resolve in the generated output. The separately deployed `/ai101/#/welcome` teaching application also returns HTTP 200.
- External links: all checked research/profile destinations responded successfully except ScienceDirect and LinkedIn, which reject automated clients, and the temporary anonymous 4open artifact, which returns HTTP 401. The 4open link was removed; the other two canonical public links were retained.
- Metadata: canonical URLs, Open Graph title/description/image, Person JSON-LD, viewport, favicon, robots file, and XML sitemap are present. The sitemap contains the two authored pages and scholarly PDFs, not source or audit files.
- Repository hygiene: `git diff --check` passes. The pre-existing untracked `.claude/` directory remains untouched.
