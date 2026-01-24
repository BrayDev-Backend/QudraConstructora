# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview
This repository contains a small static website for **Constructora Qudra SAS** (HTML/CSS/JavaScript). The main page is a single, hand-written HTML file with assets stored locally.

## Key files / structure
- `index.HTML`: Main (and currently only) page. Contains the navigation, “Quiénes Somos”, location buttons, contact form UI, and footer/social links.
- `style.CSS`: Intended stylesheet (currently empty).
- `script.JS`: Intended JavaScript (currently empty).
- `imagenes/`: Image assets referenced by `index.HTML` (logos, icons, photos).

## Run locally (no build step)
There is no framework/build tool configured.

### Option A: open the HTML file directly
This is enough for most edits.
- Windows (PowerShell): `Invoke-Item .\index.HTML`

### Option B: serve with a local HTTP server
Useful if you later add JS that relies on fetch/XHR or want a more realistic environment.
- Python (if installed): `python -m http.server 8000`
  - Then open `http://localhost:8000/index.HTML`
- Node (if installed): `npx serve .`
  - Then open the printed local URL

## Implementation notes / gotchas
- **Filename mismatch (case + name):** `index.HTML` links to `styles.css` and `script.js`, but the repo currently has `style.CSS` and `script.JS` (and both files are empty). This works on Windows (case-insensitive) but will break on case-sensitive filesystems.
  - Prefer standardizing to lowercase filenames (e.g., `index.html`, `styles.css`, `script.js`) or updating the `<link>` / `<script>` references to match.
- Navigation links currently use `href="#"` placeholders. If you want in-page navigation, add stable section IDs in the HTML (e.g., `<section id="nosotros">...</section>`) and update the nav links to `href="#nosotros"`.
- The contact form is currently UI-only (no `action` / submit handler). If form submission is added, it will likely be implemented in `script.js` (client-side) or by introducing a backend endpoint.
