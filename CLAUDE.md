# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

Single-page Jekyll academic/research portfolio for Phongsakon Mark Konrad, hosted on GitHub Pages at `phomarkon.github.io`. Positioned toward funding decision-makers (Cambridge Trust, Open Philanthropy / Coefficient Giving CDT, LTFF, Anthropic Fellows) and research hiring at AI safety labs.

## Build & Development

```bash
bundle install
bundle exec jekyll serve        # http://localhost:4000
```

### Production Build
```bash
JEKYLL_ENV=production bundle exec jekyll build
```

## Architecture

| File | Purpose |
|------|---------|
| `index.html` | Single-page site: Hero → About → **Selected Work** (4 flagship cards) → **Funding** → Full Research Portfolio → News → CV sections |
| `_layouts/default.html` | Layout shell with nav, theme toggle, Newsreader Google Font |
| `_layouts/research.html` | Per-project page layout for `_research/*.md` files |
| `_research/*.md` | One markdown file per research project with YAML frontmatter |
| `assets/css/main.css` | All styles (Newsreader serif headings, system-font body) |
| `assets/js/main.js` | Theme toggle, scroll-spy nav, publication filter/sort, BibTeX copy |
| `_data/news.yml` | News items, reverse-chronological, trimmed to the strongest signals |
| `_data/cv.yml` | CV data (education, experience, skills, awards, certifications) |
| `_config.yml` | Jekyll config (3 plugins: jekyll, jekyll-feed, jekyll-sitemap) |
| `assets/img/research/*/hero.png` | Hero figure per research project, used in Selected Work and on project pages |

## Positioning Conventions

- **Primary self-label is "mechanistic interpretability"** (with alignment, interpretability, XAI as adjacent), not generic "AI safety". Safety is the outcome, not the method.
- **Never write "Targeting [venue]"** in `venue:` fields. Use honest, non-forward-looking labels like `Working paper, 2026`, `Preprint, 2026`, or the actual submission venue if truly submitted.
- **Research status values** (drive filter chips, sort order, and CSS classes), in this order:
  `Published`, `Accepted`, `Under Revision`, `Under Review`, `Preprint`, `Working paper`, `In Progress`.
  **Do not use `PoC`**. It undersells publication-grade work.
- **Hero (`<p class="lede">`)**: lead with the research category and the verbs the researcher actually performs (trace, ablate, probe), not a tag list.
- **About section opens with the strike**, then numbers, then credentials, then the unusual path. The `.about-lede` paragraph is the punch.
- **Selected Work section** (`#selected-work`): 4 flagship cards with hero image, tag, headline result, meta. Pure mech interp / alignment / theory only. No applied ML or generic safety papers in this section. Curate ruthlessly.
- **Funding section** (`#funding`): humble, specific, named programmes. Do not add URLs you cannot verify.

## Design and Writing Philosophy: Anthropic-Style

The site is designed to feel like Anthropic's own writing surfaces, not like a Silicon Valley landing page. The intent is "scientists who care about craft," not "tech startup."

### Visual philosophy

- **Warm, not bright.** Background is cream (`#FAF7F2`), text is warm near-black (`#1F1B16`). No pure white. No pure black. The warmth signals care, slowness, considered choices.
- **Serif everywhere.** Fraunces (the closest free analogue to Anthropic's Copernicus) is used for body, headings, and lede. The all-serif look reads as "research paper," not "marketing site." Inter sans is used only for nav, contact links, and tag micro-labels (UI chrome).
- **Restraint over decoration.** No drop shadows except subtle hover states. No gradients. No accent backgrounds for normal sections. Hairline 1px borders for section dividers. No more than two notable colours visible at once.
- **Generous whitespace.** Single column at ~820px max width. Body line-height 1.65. Section margins are airy. Reading width is capped at ~46rem for paragraph copy.
- **One subtle accent.** Deep teal (`#1D4E5C`) for links and subtle micro-labels. Used sparingly. Anthropic-style means: do not let the page have more than two notable colours at any given moment.

### Writing philosophy

- **Plain language.** Say what you mean. No "leverages," "synergies," "pioneering," "transformative," "revolutionary," "next-generation," "10x." If a sentence sounds like a press release, rewrite it.
- **Specific over abstract.** Numbers, model names, layer indices. Not "significant improvement," but "+79 pp at p < 0.001 on Gemma-2-2B."
- **Honest about uncertainty.** "I think," "I believe," "the result suggests" are welcome when accurate. Confidence comes from evidence, not adjectives.
- **Lead with reasoning, not the claim alone.** Anthropic posts spend more time on *why we think this* than on *what we did*. State the claim, then immediately give the why.
- **Active voice, present tense.** "I trace circuits," not "circuits are being traced."
- **No em dashes (—) anywhere.** Use periods, commas, colons, parentheses, or middle-dots (`·`). Hard rule.
- **Cut sentence padding.** "It is worth noting that," "in order to," "due to the fact that" all get killed.

### About-section voice: Steve Jobs writing as a researcher

The About section is the only place on the site where the voice is unapologetically Jobs-style. Not Jobs as a CEO. Jobs as someone who reads carefully and writes with rhythm.

- **Three-beat rhythm.** State, specify, resolve. Three short sentences in sequence is a signature move.
- **Concrete physical metaphor.** "I take language models apart by hand" creates an image; "I conduct interpretability research" does not. Always pick the concrete one.
- **One contrarian belief, stated plainly.** Jobs always told you what he rejected. "I do not believe X. I believe Y." The contrarian belief is the moat.
- **Cut everything that is not identity or bet.** Credentials live in the `.lede-meta` line and the Education section. Specific numbers live in Selected Work directly below. DreamBear lives in Experience. The About section does *not* repeat any of those.
- **Length: 75 to 100 words total.** No more.
- **The job of the About is to make the reader want to scroll one screen further (to Selected Work).** If the About already gives them the numbers, you have stolen Selected Work's job and made the page redundant.

## Key Technical Conventions

- Everything is on one page (`index.html`) using Liquid loops over `_data/` YAML files and the `site.research` collection.
- Minimal JavaScript: theme toggle, nav scroll-spy, publication filter/sort, BibTeX copy.
- **Typography**: Fraunces variable serif (Google Fonts) for body, headings, and lede. Inter sans only for nav, contact links, and tag micro-labels. The intent is the Anthropic Copernicus / research-paper aesthetic.
- **Palette**: warm cream background (`#FAF7F2`), warm dark text (`#1F1B16`), deep teal accent (`#1D4E5C`). Dark mode mirrors with warm dark (`#14110C`) and warm cream text. Tokens defined in `:root` and `[data-theme="dark"]` of `assets/css/main.css`.
- CV sections render based on `type` field: `map`, `time_table`, `nested_list`, `list`.
- Every research project in `_research/*.md` should have: `title`, `status`, `venue`, `year`, `authors`, `tags`, `headline_result`, `method`, `abstract`, `contributions`. Optional: `hero_figure`, `hero_caption`, `tldr`, `links`, `bibtex`, `paper_html`.
- **Selected Work card image aspect ratio is fixed at 16/10** with `object-fit: cover; object-position: center top` so portrait figures crop cleanly to landscape.

## Deployment

`.github/workflows/deploy.yml` triggers on push to main. Runs `bundle exec jekyll build` and deploys to `gh-pages`.
