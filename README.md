# Muhammed Gazali Yeşilmen — personal website

A bilingual, buildless website for GitHub Pages. The production documents are
`index.html` (English, `/`) and `tr/index.html` (Turkish, `/tr/`). Shared presentation
and optional navigation enhancement live in `assets/css/styles.css` and
`assets/js/site.js`.

There are no runtime packages, APIs, forms, accounts, databases, tracking scripts,
external fonts, or build commands. Publish the static repository files using the
existing GitHub Pages setup; preserve `CNAME` and `.nojekyll`.

## Local review

Any static file server works. For example, if Python is already installed:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/` and `/tr/`. Python is an optional local-review tool,
not a website or deployment dependency. Root-relative locale links keep the same
origin locally and resolve to the canonical directory URLs in production.

## Navigation

The inline section and language navigation is the baseline. JavaScript enhances
small screens only when native `dialog.showModal()` is supported. The dialog is a
direct body child, uses the browser's top layer and background inertness, and has
its own scrollable panel. No locale preference is persisted. Known section
fragments are preserved when changing language.

Keep section IDs identical between locales: `top`, `work`, `capilens`, `ayotravel`,
`about`, `experience`, and `contact`. `main` is the skip-link target. Section
selection moves focus to the destination; Escape and Close return it to Menu.

## Content integrity

- DevMarathon is the flagship; its B2B evaluation and individual Solo Marathon
  paths are distinct. Do not reintroduce a universal 72-hour limitation.
- Capilens is a secondary active venture. Preserve its non-medical boundary.
- AyoTravel is historical. Downloads, registrations, code volume and store counts
  were omitted because dated, attributable evidence was unavailable. Do not add
  those figures without checking their provenance.
- Existing role, company, date and education information is carried forward from
  the original site. Confirm it with the owner before changing factual claims.
- No approved public email was found. LinkedIn is the primary contact path,
  followed by the owner-approved X account (`https://x.com/mgy_programmer`) and
  GitHub. Never invent a contact address or service endpoint.

The public product descriptions were checked against
[DevMarathon](https://www.devmarathon.com/) and [Capilens](https://capilens.com/)
on 25 October 2026. These pages establish public positioning, not independently
verified product outcomes or commercial adoption.

## Images and metadata

Original portrait and product assets remain in `assets/images/`. The flagship
uses the owner-provided `alex-evaluation-hero.webp`, approved for use here and in
the DevMarathon banner. It is displayed complete, without cropping or UI edits.
The 1920px WebP is a byte-identical copy of that file; 640px and 1280px WebPs and
a 1280px JPEG fallback are resized from it. The linked original opens in a new
tab for inspection at full size. Its example score is part of the supplied
product visual, not a claim of product accuracy, adoption or commercial results.

The secondary images use responsive WebP/JPEG crops from existing originals:

| Asset family | Source / crop purpose |
| --- | --- |
| `devmarathon-evaluation-*` | Owner-approved technical evaluation example. The entire supplied image is preserved, including its rubric and linked evidence. |
| `capilens-assessment-*` | Preparation and information-boundary area of `product-capilens.png`. |
| `ayotravel-mobile-*` | Appointment screen in `product-ayotravel.png`, excluding sample names/emails. The original crop is low resolution; larger output does not add source detail. |

The secondary families have 640px and 1280px WebP/JPEG variants. The former
`devmarathon-review-*` illustration assets are retained but no longer displayed.
Preserve natural image proportions; the AyoTravel crop is portrait and is shown
at a modest size within its frame. The hero uses the real portrait with eager
loading and high fetch priority; product images are lazy loaded. Social previews
are separate standalone EN/TR PNGs with corresponding editable SVGs.

When editing either locale, review title/description, canonical/hreflang, Open
Graph/Twitter metadata and ProfilePage JSON-LD as well as visible copy. The shared
Person/WebSite IDs and WebSite URL must remain consistent. `sitemap.xml` and
`robots.txt` already point to the canonical domain. Do not add unsupported static
redirect rules. Bump the shared CSS/JS query version in both documents when an
incompatible asset change requires cache invalidation.

## Review checklist

Check both languages at 320×256 (short-height menu), 360×800, 390×844, 768×1024,
1440×900 and 1920×1080. Include full-page overflow, portrait/product image loading,
keyboard navigation, modal backdrop/inertness/scrolling, Escape/focus restoration,
section/language links, and the no-JavaScript inline navigation. Parse both
JSON-LD blocks and the sitemap, check local file/fragment references, and calculate
contrast after changing palette tokens. A working browser check is not a claim of
full WCAG conformance or measured Core Web Vitals.

## Owner verification before publication

The current-ventures entry uses **Current / Güncel**, not a common start date.
The original combined entry used March 2026, but only Capilens had a separate
March 2026 statement. These are earlier website claims, not independent records.
No separate DevMarathon start date is established here. Confirm the two dates
individually before displaying them, distinguishing founding, development and
public launch where relevant.

- [ ] **DevMarathon:** confirm its own start date and the intended date milestone.
- [ ] **Capilens:** confirm the earlier March 2026 claim and its date milestone.
- [ ] **SendPal:** confirm the September 2025 start, ongoing advisory status,
  part-time arrangement, title and exact organization name.
- [ ] **AyoTech:** confirm September 2022–2025, founder/lead-mobile-engineer role,
  and the English/Turkish legal-name wording (Inc. / A.Ş.).
- [ ] **SNT:** confirm November 2021–2023, Flutter Developer role, organization
  names and the stated relationship to Infox.
- [ ] **Eywin:** confirm July 2020–2021, Flutter Developer role, organization
  names and responsibility summary.
- [ ] **Education:** confirm Kastamonu University, Computer Engineering and the
  `alumniOf` statement. No completion status or graduation year was added.
- [ ] **DevMarathon image (for stronger future claims):** the owner has approved
  the supplied banner image for this site. Confirm capture context and release
  details before adding claims about a production release or a real candidate's
  results. The current caption calls it an evaluation example.
- [ ] **AyoTravel image:** provide a higher-quality original capture showing the
  broader marketplace experience, suitable for public use. Available PNG/WebP
  originals are versions of one marketing composite; the appointment derivatives
  add no source detail. The awkward original UI wording has not been retouched.
- [ ] **Contact (optional):** approve a public business email if desired. Until
  then the existing LinkedIn CTA remains the contact destination.

Other career dates, titles, names, responsibilities and education wording remain
unchanged. Their presence in the repository establishes previous wording, not
independent verification of the professional facts. No revenue, adoption,
evaluation-performance or medical-effectiveness claim was introduced.
