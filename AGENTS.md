# Kinolektoriy — Agent Instructions

## Project
Landing page for psychological film lecture series "Семья на экране и в жизни".  
Stack: **React + Vite + Tailwind CSS v4**.  
Deploy: **GitHub Pages** → `https://sgrodnik.github.io/kinolektoriy/`

## Key Files
- `src/data/speakers.js` — speaker data (add `photoFile`, `credentials`, `contacts`, `filmDescription`)
- `src/data/schedule.js` — event schedule (2 days, 3 slots each)
- `src/components/ThemeSwitcher.jsx` — dev-only colour/dark mode panel (always include, visible in all modes)
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
Dark mode toggled via `data-theme="dark"` on `<html>`.  
Accent colour via `data-accent="NAME"` on `<html>` (10 variants in CSS).  
ThemeSwitcher is always rendered — it is a dev tool that stays in production for client preview.

## GitHub Actions
Push to `main` → auto-deploy to GitHub Pages via `.github/workflows/deploy.yml`.  
Enable GitHub Pages in repo Settings → Pages → Source: **GitHub Actions**.
