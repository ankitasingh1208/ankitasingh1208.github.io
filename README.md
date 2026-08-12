# Ankita Singh — Full Stack Developer Portfolio

Modern, responsive portfolio aligned with the professional resume (Full Stack Developer at PPS International).

## What's included

- **Hero** — Full Stack Developer positioning
- **About** — 2+ years experience summary
- **Experience** — PPS International (railway systems, NVR, SPUT)
- **Skills** — Frontend, Backend, Database, Tools (from resume)
- **Projects** — NVR, SPUT Tool + personal clones (BigBasket, Sephora, Netflix)
- **Education & Certifications**
- **GitHub Stats**
- **Contact** — Noida, phone, email, LinkedIn
- **Resume** — loads from GitHub (with local fallback)

## Resume from GitHub (how it works)

1. Push `Ankita_FullStack_Developer.pdf` to your GitHub Pages / portfolio repo, for example:
   - Repo: `Anshi1208/Anshi1208.github.io` (or whatever hosts this site)
   - Path: root or `/resume/Ankita_FullStack_Developer.pdf`

2. Open `main.js` and set the raw URL:

```js
const RESUME_GITHUB_URL =
  "https://raw.githubusercontent.com/Anshi1208/Anshi1208.github.io/main/Ankita_FullStack_Developer.pdf";
```

3. When you update the PDF on GitHub and push, the Resume buttons will open the latest file.
   - If browsers cache an old PDF, append `?v=2` (or a new number) to the URL after updates.

4. Local fallback: `./Ankita_FullStack_Developer.pdf` is included so the site still works offline or before the GitHub URL is set.

## Deploy

### GitHub Pages

1. Create or use repo `Anshi1208.github.io` (or enable Pages on this portfolio repo).
2. Push all files in this folder to the `main` branch (or `gh-pages`).
3. Enable **Settings → Pages → Deploy from branch**.
4. Site will be at `https://anshi1208.github.io` (or your custom domain).

### Netlify / Vercel

- Drag & drop this folder, or connect the GitHub repo.
- No build step required (static HTML/CSS/JS).

## Update checklist when resume changes

1. Replace `Ankita_FullStack_Developer.pdf` in the repo.
2. Push to GitHub.
3. Optionally bump `?v=` on `RESUME_GITHUB_URL` if caching is an issue.
4. Mirror any text changes in `index.html` (About, Experience, Skills, Projects) so the site stays in sync.

## Tech

- HTML5, CSS3, vanilla JavaScript
- Font Awesome 6, Google Fonts (Inter + Space Grotesk)
- No build tools required
