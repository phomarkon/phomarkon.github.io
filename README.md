# phomarkon.github.io

Personal academic portfolio for Phongsakon Mark Konrad. Built with Astro.

## Stack

- [Astro](https://astro.build) static site generator
- Vanilla CSS, no frameworks
- LaTeX CV compiled with pdfLaTeX

## Development

```bash
bun install
bun run dev        # http://localhost:4321
bun run build      # static output in dist/
```

## CV

The CV source lives in `public/cv/cv.tex`. After editing, compile with:

```bash
cd public/cv
pdflatex cv.tex && pdflatex cv.tex
cp cv.pdf ../cv.pdf
```

## Deployment

Deployed to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.
