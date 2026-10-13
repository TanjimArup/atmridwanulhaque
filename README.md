# ATM Ridwanul Haque — Portfolio Website

A responsive, accessible portfolio website built with **plain HTML, CSS and JavaScript**. No build step, framework, paid plugin or backend is required. It is ready to upload to a GitHub repository and publish with GitHub Pages.

## What's included

- `index.html` — complete portfolio sections, contact actions, publication links, metadata and Schema.org JSON-LD.
- `styles.css` — responsive layout, brand-green palette, dark/light themes and reduced-motion support.
- `script.js` — accessible mobile navigation, dark-mode persistence and publication filters.
- `assets/` — optimized WebP portrait and team image, logo image, icon files and 1200×630 social preview graphic.
- `robots.txt` — crawler guidance, including common AI/search crawlers, plus sitemap location.
- `sitemap.xml` — basic XML sitemap for the intended custom domain.
- `llms.txt` — a concise, AI-readable profile overview.
- `site.webmanifest` and `favicon.ico` — browser/app identity assets.

## Preview locally

1. Unzip this project.
2. Open `index.html` in a browser. Most sections work from a local file.
3. For a more realistic local web preview, open a terminal inside this folder and run `python -m http.server 8000`, then visit `http://localhost:8000`.

No Node.js or package installation is needed.

## Deploy on GitHub Pages

1. Sign in to GitHub and create a **public repository** such as `atm-ridwanul-haque-portfolio` (or use a user site repository if preferred).
2. Upload every file and folder from this project to the repository root. `index.html` must be at the top level, not nested inside another folder.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. GitHub will show the published Pages URL once the deployment finishes. Open it on desktop and on a phone to test navigation, images, contact links and dark mode.
6. Make future changes by editing files in the repository and committing the updates. GitHub Pages will publish the new version.

If you deploy to a `username.github.io/repository-name/` project URL before the custom domain is connected, update the canonical URL and absolute metadata URLs as explained in the domain section below. This avoids telling search engines to index a URL that does not resolve yet.

## Connect `atmridwanulhaque.com` later

After you purchase the domain from a registrar:

1. Publish the site on GitHub Pages first, and verify ownership of the domain in GitHub if that option is available for the account.
2. In the repository, open **Settings → Pages → Custom domain** and enter `atmridwanulhaque.com`, then save. GitHub Pages may create a `CNAME` file automatically for branch-based publishing.
3. At your domain registrar, set the apex/root (`@`) **A records** to GitHub Pages' published IPv4 addresses: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. Use the current GitHub documentation in case the published values change.
4. Add a `CNAME` record for `www` pointing to your **GitHub Pages user-site host**, e.g. `YOUR-USERNAME.github.io` (replace with your actual GitHub username; do not include a repository path). You may instead follow the registrar-specific recommendations GitHub shows for the domain.
5. Wait for DNS to propagate, then return to **Settings → Pages** and enable **Enforce HTTPS** once GitHub offers it. Do not use wildcard DNS records.
6. Change the canonical URL and all absolute `og:*`, `twitter:image`, JSON-LD, `robots.txt`, `sitemap.xml`, and `llms.txt` website URLs to the working final domain. The current project is pre-filled with `https://atmridwanulhaque.com/` as the intended future domain. If it is not active yet, use the actually deployed GitHub Pages URL temporarily, then switch back after the custom domain and HTTPS work.

GitHub's official guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## SEO and AI crawler notes

- The page has a clear title and description, index/follow robots metadata, Open Graph fields, Twitter large-card fields, canonical URL, JSON-LD for `Person`, `Organization` and `WebSite`, a sitemap, and `llms.txt`.
- `robots.txt` asks several crawlers to access public pages. It is an advisory convention, not a technical guarantee. Crawlers, search engines and AI assistants decide independently what to crawl, index or cite; no metadata can guarantee recommendations or placement.
- After the website is publicly deployed, add the sitemap to Google Search Console and Bing Webmaster Tools. Confirm their current ownership-verification and sitemap-submission steps in their official documentation.
- Social previews need absolute HTTPS URLs and the image must be publicly reachable. Once live, test the home URL and preview image in social sharing/debugging tools.
- GitHub Pages serves static assets only. Contact actions use `tel:`, `wa.me`, `mailto:` and a Facebook link; there is no contact-form backend. A future form would need a trusted form service or serverless backend.

## How to update content

### Add a new publication

1. In `index.html`, copy one `<article class="publication-card" ...>` inside `#publication-grid`.
2. Set `data-category` to `wash`, `finance` or `policy` so the category filter works. Use `finance` for Soft Microfinance articles.
3. Replace the title, short summary, publisher, date and outbound link with the verified information.
4. Update the publication count label in the filter controls if desired; the JavaScript counter itself updates automatically.

### Update latest work

Edit the cards in the `#latest` section of `index.html`. Keep descriptions factual, add a date/status if known, and link to an official project page or published article when available.

### Replace images / branding

- Replace `assets/ridwanul-haque.webp` to change the hero portrait. Keep the same filename or update its references in `index.html`, JSON-LD and social metadata.
- Replace `assets/agroho-team.webp` to change the team image.
- Replace `assets/agroho-logo.jpg` to change the logo. The little browser icon and social card are separate files in `assets/`; regenerate or replace them too if the logo changes.

### Add LinkedIn, GitHub or a CV download later

Add only verified profile URLs. Place any new social URL in the contact section, and update Person `sameAs` in the JSON-LD block. For a CV PDF, add the file under `assets/` and link it with a descriptive label. Do not add empty or invented URLs.

### Keep the website scalable

This starter is a static site, so the easiest future upgrades are:
- a dedicated page for each publication or project, with its own title/description and structured data;
- a Bangla language version using a separate `/bn/` page and `lang="bn-BD"` metadata;
- a content-management workflow (for example, content stored as Markdown and a static-site generator) if updates become frequent;
- an accessible contact form using a backend or reputable form service;
- performance monitoring, analytics with appropriate privacy disclosures, and search-console monitoring.

Keep the original source files in Git. Make changes in a branch or backup commit first and test at 320px mobile width, tablet and desktop before merging.

## Research notes & source checks

- **Agroho / mobile hospitals:** Drip by Drip documents mobile hospital work with Agroho, including a pilot launched in 2022 and a later programme with Stanley/Stella; see https://dripbydrip.org/mobile-hospitals/. The page does not replace official registration or audited organizational information; use only the claims actually published on that page.
- **Sanitation supply-chain research:** IRC catalogues *Sanitation demand and supply in rural Bangladesh: rapid assessment to identify supply chain challenges* and lists IRC and BRAC as publishers: https://www.ircwash.org/resources/sanitation-demand-and-supply-rural-bangladesh
- **Faecal-sludge recovery paper:** IRC lists *Nothing left to waste: the prospects for faecal sludge-based organic fertiliser in Bangladesh*: https://www.ircwash.org/sites/default/files/faecal_sludge_management_paper_brac_irc_2015.pdf
- **Soft microfinance coverage:** Daily Sun published *Soft Microfinance, a Welfare Financing* at https://www.daily-sun.com/post/773576/; The New Nation lists its related piece at https://dailynewnation.com/news/682638; New Age has *Soft microfinance: potential game-changer* at https://www.newagebd.net/post/opinion/258247/soft-microfinance-potential-game-changer.
  The New Age page is dated **19 February 2025** by the publisher; the website card shows `Feb 2025` rather than the different day supplied in the original notes.
- **Financial Express article:** The supplied link contained a malformed space and an outdated route. The verified article page used in the site is https://today.thefinancialexpress.com.bd/views-reviews/influx-of-rohingya-refugees-entails-a-serious-burden-on-the-economy-1513516045?amp=true, dated 17 December 2017 and attributed to ATM Ridwanul Haque.
- Some newspaper/e-paper URLs may be moved, restricted, or require an account. The site links directly to those publishers; check each link periodically.

## Content review items before launch

- Confirm the final official spelling/style for the MBA institution line, because the supplied details name both Military Institute of Science and Technology and Bangladesh University of Professionals.
- The duplicate BRAC Senior Sector Specialist entry in the supplied material is represented once to avoid duplicate experience.
- Verify the wording, exact years and attribution of all awards and programme metrics before promoting them in other materials.
- Add any verified LinkedIn/GitHub URLs, CV file, and official Agroho website/registration record if you have them.
