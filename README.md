# ATM Ridwanul Haque — Bilingual Portfolio Website

A responsive static website built with HTML, CSS and JavaScript. It has English and Bengali pages, dark mode, publication filters, responsive navigation, SEO/social metadata, Schema.org structured data, a sitemap, robots.txt and llms.txt. No backend or build process is required.

## Project files

- `index.html` — English portfolio.
- `bn/index.html` — Bengali portfolio.
- `styles.css`, `script.js` — layout and interactions.
- `assets/` — portrait, team photo, Agroho logo, favicons and 1200×630 Open Graph/social-sharing image.
- `CNAME` — custom domain `atmridwanulhaque.com` for branch-based GitHub Pages publishing.
- `robots.txt`, `sitemap.xml`, `llms.txt`, `site.webmanifest` — discovery and site metadata.

## 1. Connect Namecheap domain to GitHub Pages

The custom-domain metadata in this package points to `https://atmridwanulhaque.com/`. Set up the domain first or coordinate deployment with the DNS change so the canonical URL resolves.

### A. Verify domain ownership on GitHub

1. On GitHub, open **Profile picture → Settings → Pages** (profile-level settings, not repository settings).
2. Choose **Add a domain**, enter `atmridwanulhaque.com`, and follow GitHub's instructions to create a TXT record.
3. In Namecheap, open **Domain List → Manage → Advanced DNS → Host Records** and add the exact TXT host/value provided by GitHub. Save it, return to GitHub, and complete verification. Keep the TXT record.

Namecheap Host Records are available when the domain uses Namecheap BasicDNS, PremiumDNS or FreeDNS. If the domain uses custom nameservers, manage DNS at the active DNS provider instead.

### B. Set the custom domain in the repository

1. Open `https://github.com/TanjimArup/atmridwanulhaque`.
2. Go to **Settings → Pages**.
3. Under **Custom domain**, enter `atmridwanulhaque.com` and click **Save**. With branch-based deployment GitHub Pages normally writes a root-level `CNAME` file; this package also includes it.
4. Keep the current publishing source set to `main` and `/(root)` unless the repository is configured differently.

### C. Add website DNS records in Namecheap

In **Domain List → Manage → Advanced DNS → Host Records**, add these records:

| Type | Host | Value |
|---|---|---|
| A Record | `@` | `185.199.108.153` |
| A Record | `@` | `185.199.109.153` |
| A Record | `@` | `185.199.110.153` |
| A Record | `@` | `185.199.111.153` |
| CNAME Record | `www` | `tanjimarup.github.io` |

Use the default/automatic TTL. GitHub documents additional IPv6 AAAA records if you want IPv6 support. Replace only conflicting website records for `@`/`www`; do not delete MX records used for email or unrelated TXT records. Avoid wildcard records such as `*`. Do not set `www` to the apex domain; point it directly to `tanjimarup.github.io`.

### D. Confirm HTTPS

DNS changes may take up to 24 hours. Return to the repository's **Settings → Pages**, wait for the custom domain to verify and the certificate to become available, and enable **Enforce HTTPS**. Test:

- `https://atmridwanulhaque.com/` (primary English page)
- `https://www.atmridwanulhaque.com/` (www alias)
- `https://atmridwanulhaque.com/bn/` (Bengali page)

Official instructions:
- GitHub: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- GitHub domain verification: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages
- Namecheap: https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/

## 2. Deploy or update the site

1. Download and extract this ZIP.
2. Clone the existing repository using GitHub Desktop: `https://github.com/TanjimArup/atmridwanulhaque`.
3. Copy the *contents* of the extracted project folder into the repository folder. Keep the repository's hidden `.git` folder. `index.html`, `CNAME`, `styles.css`, `script.js`, `robots.txt`, and `sitemap.xml` should be at the repository root; the Bengali page should be `bn/index.html`.
4. Review files, commit (for example, `Connect custom domain and improve Bangladesh SEO`), then push to `main`.
5. Verify deployment in the repository's **Actions** tab and test both language pages on phone and desktop.

## 3. SEO configuration for Bangladesh

The site uses Bangladesh-focused copy (Dhaka, Bangladesh and the relevant fields of work), `en-BD` and `bn-BD` page language signals, matching titles/descriptions, canonical URLs on the custom domain, reciprocal hreflang links, Open Graph/Twitter social metadata, a custom 1200×630 social thumbnail, Person/Organization/WebSite/ProfilePage JSON-LD, favicons, sitemap, robots.txt and an AI-readable `llms.txt`. Structured address data uses Dhaka 1207, BD.

The sitemap is `https://atmridwanulhaque.com/sitemap.xml`; submit it in Google Search Console and Bing Webmaster Tools after the domain works over HTTPS. Verify ownership in each service using its current verification method. Use Search Console URL Inspection and Google's Rich Results Test to check how the pages and structured data are interpreted. Re-test the social preview after DNS and HTTPS are active.

No metadata can guarantee indexing, rankings or recommendation by AI systems. `llms.txt` and robots directives are advisory; the crawler/operator controls whether content is fetched, indexed or used. Search performance also depends on useful, factual content, relevant references from reputable sites, page speed, accessible links, image alt text and ongoing maintenance. Google does not use `meta keywords` as a ranking factor; the keyword meta tags here are supplementary only.

### Bangladesh SEO maintenance checklist

- Keep the English and Bengali pages accurate and in sync; update `index.html` and `bn/index.html` together.
- Keep the canonical host as `https://atmridwanulhaque.com/`; do not mix the old `tanjimarup.github.io/atmridwanulhaque/` URL into canonical, Open Graph, JSON-LD, sitemap or `llms.txt` after the domain is live.
- Add a Search Console property for the domain and submit `/sitemap.xml`.
- Use descriptive headings and body content for actual work in Bangladesh, not keyword repetition.
- Publish new work with a date, clear summary and original source link. For a major publication or project, consider creating a dedicated page with its own title, description, author and appropriate `Article`/`CreativeWork` markup.
- Only add social profile links, organization IDs, achievements or registrations when the corresponding details are verified.

## 4. Update site content

- Latest work: edit the cards inside the `#latest` section in both `index.html` and `bn/index.html`.
- Publications: copy a `.publication-card` within `#publication-grid` in both pages; use `data-category="wash"`, `finance`, or `policy`. Replace title, summary, publisher, date and target URL with verified details.
- Images: replace matching files in `assets/` or update all references. Keep the Open Graph thumbnail around 1200×630 pixels and ensure it is publicly accessible.
- Contacts: update the visible contact links and JSON-LD details together.

## Notes on supplied details

- The website presents the claim that copyright for the Soft Microfinance model is registered in ATM Ridwanul Haque's name because this detail was supplied by the profile owner; verify the registration record and legal phrasing before treating the claim as independently verified.
- The BRAC WASH positions are consolidated as 2012–2018 according to the supplied revision.
- The site preserves owner-supplied career and programme claims; confirm metrics and awards before relying on them in formal outreach.
