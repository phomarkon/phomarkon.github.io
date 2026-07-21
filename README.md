# phomarkon.github.io

Academic website for Phongsakon Mark Konrad, built with [Academic Pages](https://github.com/academicpages/academicpages.github.io) v0.8.4 and Jekyll.

## Local development

```bash
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
```

The site is deployed to GitHub Pages by `.github/workflows/deploy.yml` after pushes to `main`.

The academic CV source is `cv/cv.tex`. Compile it twice with `pdflatex`, then copy `cv/cv.pdf` to `/cv.pdf`.
