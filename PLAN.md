# Portfolio Website Plan

## Vision

A cohesive portfolio that communicates three interconnected identities:

- **Engineer**: Deep systems, advanced math, robotics, perception
- **Builder/PM**: Product intuition, customer empathy, B2B thinking
- **Artist**: Ceramics, glazes, craft, STEM mentorship

These identities should subtly cross-link to show breadth and interconnectedness.

## Architecture

### File Structure

```
/
├── index.html (Home)
├── engineering.html
├── projects.html
├── ceramics.html
├── writing.html
├── about.html
├── contact.html
├── css/
│   └── styles.css (shared design system)
├── js/
│   └── main.js (navigation, interactions)
└── assets/
    ├── images/
    └── icons/
```

### Navigation Structure

- **Home** - Hero section introducing all three identities
- **Engineering** - Technical depth, systems thinking, robotics, perception
- **Projects** - Product work, B2B solutions, cross-disciplinary builds
- **Ceramics** - Artistic work, craft, STEM mentorship connections
- **Writing** - Thoughts on engineering, product, art, and their intersections
- **About** - Personal story weaving all three identities
- **Contact** - Ways to connect

## Design System

### Visual Identity

- **Color Palette**:
  - Primary: Deep, professional (navy/charcoal)
  - Accent: Warm, creative (terracotta/clay tones for ceramics connection)
  - Neutral: Clean whites and grays
- **Typography**:
  - Headings: Modern, technical feel
  - Body: Readable, approachable
  - Code/Technical: Monospace for engineering content
- **Layout**:
  - Clean, spacious
  - Responsive grid system
  - Subtle animations on scroll/interaction

### Components

- **Navigation Bar**: Sticky header with smooth transitions
- **Hero Sections**: Large, impactful introductions
- **Card Grids**: For projects, ceramics pieces, writing posts
- **Cross-Link Banners**: Subtle prompts connecting related content
- **Identity Badges**: Visual indicators showing which identity(ies) a piece relates to

## Content Strategy

### Home Page

- **Hero**: Brief introduction with three identity pillars
- **Featured Section**: One highlight from each identity
- **Cross-Links**: "See my engineering work" → "Explore my ceramics" → "Read my product thinking"
- **Quick Navigation**: Visual cards for each main section

### Engineering Page

- Deep technical projects
- Systems architecture work
- Robotics and perception projects
- **Cross-Links**:
  - "How I applied systems thinking to product" (→ Projects)
  - "Teaching robotics through ceramics" (→ Ceramics)
  - "Writing about perception systems" (→ Writing)

### Projects Page

- B2B product work
- Customer-focused solutions
- Product management case studies
- **Cross-Links**:
  - "Technical architecture behind this product" (→ Engineering)
  - "Design thinking and craft" (→ Ceramics)
  - "Product strategy essays" (→ Writing)

### Ceramics Page

- Portfolio of ceramic work
- Glaze chemistry and experimentation
- STEM mentorship stories
- **Cross-Links**:
  - "The engineering of glazes" (→ Engineering)
  - "Product thinking in craft" (→ Projects)
  - "Essays on art and science" (→ Writing)

### Writing Page

- Essays and articles
- Tagged by identity (Engineering, Product, Art, Intersections)
- **Cross-Links**: Natural links within articles to relevant pages

### About Page

- Personal narrative weaving all three identities
- How they inform each other
- Journey and philosophy

### Contact Page

- Professional contact methods
- Social links
- Availability for collaboration

## Cross-Linking Strategy

### Visual Indicators

- **Identity Tags**: Small badges showing "Engineer", "Builder", "Artist" on relevant content
- **Related Content Sections**: "You might also like" at bottom of pages
- **Contextual Links**: Natural inline links within content
- **Navigation Breadcrumbs**: Show how pages relate

### Implementation

- Use subtle hover states
- "Related" sections at page bottoms
- Tag system for content categorization
- Smart suggestions based on content themes

## Technical Implementation

### Phase 1: Foundation

1. Create shared CSS design system
2. Build navigation component
3. Set up responsive layout framework
4. Create all page templates with consistent structure

### Phase 2: Content Pages

1. Home page with hero and featured sections
2. Engineering page with project showcases
3. Projects page with product work
4. Ceramics page with gallery
5. Writing page with article listings
6. About page with narrative
7. Contact page with form/links

### Phase 3: Cross-Linking

1. Add identity tags/badges
2. Implement "related content" sections
3. Add contextual inline links
4. Create navigation breadcrumbs

### Phase 4: Polish

1. Add subtle animations
2. Optimize images and assets
3. Ensure mobile responsiveness
4. Add meta tags for SEO
5. Test cross-linking flow

## Scalability Considerations

### Content Management

- Use consistent HTML structure for easy additions
- Tag system for filtering/categorization
- Template-based approach for new content

### Performance

- Lazy loading for images
- Minimal JavaScript (progressive enhancement)
- Optimized CSS (no heavy frameworks)

### Future Enhancements

- Blog post template system
- Project detail pages
- Filtering/tagging system
- Search functionality (if needed later)

## Next Steps

1. **Create design system** (CSS with variables, typography, colors)
2. **Build navigation component** (reusable header/footer)
3. **Create Home page** (hero + featured sections)
4. **Build out each content page** (Engineering, Projects, Ceramics, Writing, About, Contact)
5. **Implement cross-linking** (tags, related sections, contextual links)
6. **Add polish** (animations, responsive design, SEO)

## Design Principles

1. **Cohesion**: All three identities feel integrated, not siloed
2. **Subtlety**: Cross-links feel natural, not forced
3. **Depth**: Each section can go deep while maintaining connections
4. **Clarity**: Navigation and structure are intuitive
5. **Beauty**: Design reflects the artistic sensibility
6. **Functionality**: Technical excellence in implementation
