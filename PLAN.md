# Plan: Kinolektoriy

## Project
One-page landing for psychological film lecture series.
URL: https://sgrodnik.github.io/kinolektoriy/
Stack: React + Vite + Tailwind CSS v4 + lucide-react

## Sections
1. Nav — sticky, blur, mobile burger
2. Hero — title, dates, CTA, decorative blobs
3. About — format description, 4 benefit bullets
4. Schedule — 2 days, 3 slots each (speaker + film)
5. Speakers — 6 cards (photo, credentials, contacts, film description)
6. Pricing — 1000/2 days, 1500/2 days + CTA
7. Footer — organizers, offer contract link

## Status
- [x] Project scaffold (Vite + React + Tailwind v4)
- [x] All sections built
- [x] Fonts: Lora + Inter
- [x] Colors: stone + rose palette
- [x] Dark theme (data-theme="dark")
- [x] 10 accent color themes (ThemeSwitcher)
- [x] Speaker data: Obolenskaya (full), Murtich (full)
- [x] Speaker photos: Obol.jpg, Mur.jpg
- [x] GitHub Actions deploy workflow
- [ ] Speaker data: Demir, Nekrasova, Traulko, Zotov
- [ ] Speaker photos: 4 remaining
- [ ] OG image (public/og-image.jpg, 1200x630)
- [ ] Final accent color decision
- [ ] Connect repo sgrodnik/kinolektoriy + push

## Key Notes
- base: /kinolektoriy/ in vite.config.js
- Photos: public/images/, ref as photoFile in speakers.js
- ThemeSwitcher always rendered (client preview tool)