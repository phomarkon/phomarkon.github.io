# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

Ultra-minimal single-page Jekyll site for Phongsakon Mark Konrad, hosted on GitHub Pages at `phomarkon.github.io`. No theme gem, no JavaScript, minimal CSS.

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
| `index.html` | Single-page site with all sections (About, News, Publications, CV) |
| `_layouts/default.html` | Minimal HTML5 layout shell |
| `assets/css/main.css` | All styles (~150 lines) |
| `_data/publications.yml` | Publications list |
| `_data/news.yml` | News/announcements |
| `_data/cv.yml` | CV data (education, experience, skills, awards, certifications) |
| `_config.yml` | Jekyll config (3 plugins: jekyll, jekyll-feed, jekyll-sitemap) |
| `assets/img/profile_img.png` | Profile photo |

## Key Conventions

- Everything is on one page (`index.html`) using Liquid loops over `_data/` YAML files
- Zero JavaScript — abstracts use `<details>` elements
- System font stack — no web fonts loaded
- CV sections render based on `type` field: `map`, `time_table`, `nested_list`, `list`

## Deployment

`.github/workflows/deploy.yml` triggers on push to main. Runs `bundle exec jekyll build` and deploys to `gh-pages`.
