# Kinolektoriy — Agent Instructions

## Project
Landing page for psychological film lecture series "Семья на экране и в жизни".  
Stack: **React + Vite + Tailwind CSS v4**.  
Deploy: **GitHub Pages** → `https://iragrodnik.github.io/kinolektoriy/`

## Key Files
- `src/data/speakers.js` — speaker data (`photoFile`, `credentials`, `contacts`, `filmDescription` as string array)
- `src/data/schedule.js` — event schedule (2 days, 3 slots each)
- `src/components/ThemeSwitcher.jsx` — floating 🌙/☀️ dark-mode toggle; accent color is randomised on each page load
- `src/index.css` — all styles via CSS custom properties (`--color-accent`, `--color-bg`, etc.)
- `vite.config.js` — `base: '/kinolektoriy/'`

## Content Rules
- All UI text in Russian
- All code strings, console output, error messages in English
- Do NOT display ИНН on the site

## Photos
Place speaker photos in `public/images/`.  
Reference in `speakers.js` as `photoFile: 'Name.jpg'`.  
Component resolves path via `import.meta.env.BASE_URL`.

## Themes
Dark mode: auto-detected from `prefers-color-scheme`, overridable via `data-theme` on `<html>`.  
Accent colour: **randomly chosen** on each page load from 20 variants via `data-accent="NAME"` on `<html>`.  
ThemeSwitcher renders a single 🌙/☀️ button (bottom-right, always visible).

## filmDescription
Store as an **array of strings** (one element = one paragraph). Component renders each as `<p>`.

## GitHub Actions
Push to `main` → auto-deploy to GitHub Pages via `.github/workflows/deploy.yml`.  
Enable GitHub Pages in repo Settings → Pages → Source: **GitHub Actions**.
