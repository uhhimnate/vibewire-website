# Vibe Wire website

Website-only presentation for Vibe Wire, an independently developed Windows
media utility. Current development version: **0.4.0 Beta — The Music Update**.

Public application downloads are **Coming Soon**. This folder contains no
application source code, executables, dependencies, settings or credentials.
It is a static website, not a desktop application distribution.

## Files

- `index.html`: home, features, screenshots, privacy, downloads, history, about and contact.
- `styles.css`: responsive navy/purple/blue layout, visible keyboard focus and reduced-motion support.
- `app.js`: mobile menu, screenshot selection and keyboard-accessible image dialogs.
- `assets/`: approved brand images and actual app screenshots with demonstration content.
- `.nojekyll`: serve plain static assets on GitHub Pages.
- `ASSETS.md`: public artwork and screenshot provenance.

No package installation, build step, third-party script, web font, analytics,
advertisement, embedded player or runtime API is needed. All asset paths are
relative so the site can work beneath a GitHub Pages project path.

## Local preview

From this folder, use a local static web server, for example:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:8000/`. Modern browsers are required for the native
image dialog. The content can be read without JavaScript; gallery switching,
the mobile menu and enlarged screenshot dialogs use JavaScript.

## Publication gate

Separate website-only repository: **oofitsnathaniel/vibewire-website**.
The project owner approved initial website publication on October 24, 2026.
GitHub Pages can serve these files from `main` / root. This approval covers the
website only. Never upload the application workspace, previous builds, personal
settings, credentials or private development files to this repository.

GitHub guidance: [Creating a Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
and [configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Future edits must preserve the no-download gate until a public application
release is separately approved. Keep privacy limitations accurate: Protected
Offline Mode is unavailable and live MusicBrainz/Cover Art Archive retrieval
remains unverified. Do not describe Vibe Wire itself as publicly open source.

Public contact: [vibewire.dev@gmail.com](mailto:vibewire.dev@gmail.com).
