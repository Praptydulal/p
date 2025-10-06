# Prapty Dulal — Portfolio

A fast, elegant single-page portfolio for Prapty Dulal (Leader • Model • Host • Public Speaker).

## How to use

- Open `index.html` in your browser to preview locally.
- Replace images in `assets/img/` with your photos. Keep names:
  - `hero.jpg` — main portrait on the top banner
  - `portfolio-featured.jpg` — most recent portfolio photo
  - `portfolio-1.jpg` ... `portfolio-5.jpg` — additional photos
- Update text (if needed) inside `index.html`.
- Social links and email are already set to:
  - Instagram: https://www.instagram.com/prapty_dulal/
  - Facebook:  https://www.facebook.com/prapty.dulal
  - Email:     Praptys1312@gmail.com

## Deploy (GitHub Pages)

1. Create a new GitHub repository (public). Name it anything, e.g. `prapty-portfolio`.
2. On your Mac terminal, run:
   - `git init`
   - `git remote add origin https://github.com/<your-username>/prapty-portfolio.git`
   - `git branch -M main`
   - `git add . && git commit -m "Initial site" && git push -u origin main`
3. In the GitHub repo, go to Settings → Pages:
   - Source: `Deploy from a branch`
   - Branch: `main` and folder `/ (root)`
   - Save. Wait 1–2 minutes; you'll get a live URL.
4. Optional: set a custom domain in Pages settings.

Netlify (alternative): drag-and-drop the folder on the Netlify dashboard or connect the repo.

## Custom domain (www.praptydulal.com)

1. In this repo, ensure a `CNAME` file exists with:
   - `www.praptydulal.com`
2. In GitHub → Settings → Pages → Custom domain:
   - Enter `www.praptydulal.com` and enable "Enforce HTTPS" after the certificate is issued.
3. In your domain DNS provider, set records:
   - CNAME: `www` → `<your-username>.github.io`
   - Optional apex domain (praptydulal.com) → A records to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
4. Wait for DNS to propagate (can take up to a few hours). Then visit `https://www.praptydulal.com`.

## Structure

- `index.html` — markup
- `assets/css/styles.css` — theme & layout
- `assets/js/main.js` — interactions (mobile menu, lightbox)
- `assets/img/` — images and `favicon.png` (optional)
- `assets/video/` — videos you embed in the Media section
