# phomarkon.github.io

Personal academic homepage for **Phongsakon Mark Konrad**. Single-page static site served at `https://phomarkon.github.io/`. No build step — `index.html` is the page.

The page layout adapts the pattern from Jon Barron's personal site ([jonbarron.info](https://jonbarron.info/) / [jonbarron/jonbarron.github.io](https://github.com/jonbarron/jonbarron.github.io)). Content, prose, and styling choices are original; layout attribution is preserved in the page footer.

## Structure

```
.
├── index.html          # the entire page (header, research, news, CV, footer)
├── stylesheet.css      # Lato via Google Fonts; table-based layout à la jonbarron
├── cv.pdf              # CV mirror
├── images/
│   ├── profile.png     # hero photo
│   ├── favicon.ico
│   ├── favicon.svg
│   └── apple-touch-icon.png
├── robots.txt
├── LICENSE             # MIT for original content; attribution for layout
└── .github/workflows/deploy.yml
```

## Local preview

Open `index.html` directly in a browser, or serve the directory:

```bash
python3 -m http.server 4000
# then open http://127.0.0.1:4000/
```

No build, no dependencies.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which uploads the working tree to GitHub Pages directly (no Jekyll build step — the page is already static HTML/CSS).

## Editing publications

`index.html` is hand-authored. Publications live inline under the **Research** section (the four highlighted entries) and the full list under **Publications**, grouped into Preprints / Published / Workshops / Thesis. Every entry links to its arXiv abstract, journal page, or OpenReview discussion — no local PDFs.

## Rebuilding the CV PDF

The CV PDF lives at `cv.pdf` (root) and is the file linked from the page. To rebuild from LaTeX, compile the moderncv source separately and overwrite `cv.pdf` at the repo root:

```bash
# (not part of the repo; done externally)
pdflatex cv.tex
cp cv.pdf /path/to/phomarkon.github.io/cv.pdf
git commit -am "Update CV" cv.pdf
```