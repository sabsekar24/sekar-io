# sekar-io Site Context

## About

- Name: Sabaritha Sekar
- Tagline: "I navigate non-determinism for a living — and for fun"
- Computer vision / robotics engineer (Meta, Nuro, FarmWise), ceramicist, writer
- Ceramics brand: **Spells and Bristles** — Instagram [@spells.and.bristles](https://instagram.com/spells.and.bristles)
- Based in SF / Bay Area
- MS Robotics (UPenn), BE EEE (BIT Bangalore)

## Stack

- Astro + Dante theme
- Hosting: Netlify
- Domain: sekar.io (Google Domains/Squarespace)

## Site Structure

- **Home** (`/`): Short hero intro, featured ceramics, featured writing
- **Writing** (`/blog`): Mixed feed with tags — technical, philosophical, poetic
- **Ceramics** (`/projects`): Gallery of ceramic work under Spells and Bristles, "store coming soon"
- **About** (`/about`): Full narrative — career journey, Spells and Bristles origin, writing, volunteering, links
- **Contact** (`/contact`): Email + social links
- **Tags** (`/tags`): Auto-generated from blog post tags

## Social Links (in footer + about page)

- GitHub: <https://github.com/sabsekar24>
- LinkedIn: https://linkedin.com/in/sabaritha
- Instagram: https://instagram.com/spells.and.bristles
- Email: sabaritha.sekar@gmail.com

## Done

- [x] Customized `src/data/site-config.ts` (title, subtitle, hero, nav, social links)
- [x] Updated homepage sections: Ceramics + Writing (with featured items)
- [x] Writing page (`/blog`) — titled, described, subscribe removed
- [x] Ceramics page (`/projects`) — branded as Spells and Bristles, store teaser
- [x] About page — full narrative bio with career, ceramics origin, writing, volunteering
- [x] Contact page — updated email and socials
- [x] Removed placeholder Dante content (14 blog posts, 7 projects, terms page)
- [x] Created placeholder content (4 writing posts, 3 ceramics entries)
- [x] Newsletter/subscribe disabled
- [x] Code pushed to GitHub

## Next Steps

1. **Add real images** — Replace placeholders in `src/assets/images/`:
   - `avatar.jpg` — profile photo
   - `hero.jpg` — homepage hero
   - `about.jpg` — about page
   - Add ceramics photos for project entries
   - Add images for blog posts (or remove image references)
2. **Set GitHub username** — Update the placeholder GitHub URL in `site-config.ts` and `about.md`
3. **Write real content** — Replace the "Coming soon" placeholder posts and ceramics entries
4. **Deploy to Netlify** — Connect repo, set build command to `npm run build`, publish dir to `dist`
5. **Point domain** — Configure sekar.io DNS to Netlify
6. **Optional enhancements**:
   - Custom favicon
   - OG image for social sharing (replace `dante-preview.jpg`)
   - Ceramics store integration when ready
   - RSS feed customization (`src/pages/rss.xml.js`)
