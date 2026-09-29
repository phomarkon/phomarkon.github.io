# phomarkon.github.io

Personal academic homepage for **Phongsakon Mark Konrad**. Single-page static site served at `https://phomarkon.github.io/`. No build step — `index.html` is the page.

The page layout adapts the pattern from Jon Barron's personal site ([jonbarron.info](https://jonbarron.info/) / [jonbarron/jonbarron.github.io](https://github.com/jonbarron/jonbarron.github.io)). Content, prose, and styling choices are original; layout attribution is preserved in the page footer.

## Structure

```
.
├── index.html          # the entire page (bio, news, publications, talks, service, awards, footer)
├── stylesheet.css      # Lato via Google Fonts; table-based layout à la jonbarron
├── cv.pdf              # CV linked from the page (copy of cv/cv.pdf)
├── cv/
│   ├── cv.tex          # moderncv source
│   └── cv.pdf          # compiled output
├── images/
│   ├── profile.png     # hero photo
│   └── favicon*.png, favicon.ico, apple-touch-icon.png
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

`index.html` is hand-authored. Publications live under **Publications**, grouped into Preprints / Conference & Journal / Workshops / Thesis. Every entry links to its arXiv abstract, journal page, or OpenReview discussion — no local PDFs.

## Rebuilding the CV PDF

The source is `cv/cv.tex` (moderncv). The page links to `cv.pdf` at the repo root, so copy the compiled PDF there after building. Run pdflatex twice so references settle, and check the CV still fits on two pages:

```bash
cd cv
pdflatex cv.tex && pdflatex cv.tex
cp cv.pdf ../cv.pdf
```
