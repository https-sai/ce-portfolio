# Civil Engineering Portfolio Design Guidelines

## Design Approach
**Hybrid Portfolio System**: Drawing inspiration from Behance's project showcases, Apple's product presentation clarity, and Linear's precision typography. Emphasis on large-scale project imagery, technical credibility, and professional sophistication suitable for B2B/institutional clients.

## Typography Hierarchy

**Primary Font**: Inter or Work Sans (Google Fonts)
- Hero headline: text-5xl to text-7xl, font-bold, tracking-tight
- Section headers: text-3xl to text-4xl, font-semibold
- Project titles: text-2xl, font-semibold
- Body text: text-base to text-lg, font-normal, leading-relaxed
- Captions/metadata: text-sm, font-medium

**Secondary Font**: Poppins or similar geometric sans for accent elements
- Use sparingly for statistics, callouts, certifications

## Layout System

**Spacing Units**: Tailwind primitives of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 to py-24 (mobile: py-12)
- Component spacing: gap-8 to gap-12
- Card padding: p-6 to p-8
- Micro-spacing: space-y-4, gap-4

**Container Strategy**:
- Full-width hero: w-full
- Content sections: max-w-7xl mx-auto px-6
- Text-heavy sections: max-w-4xl
- Grid layouts: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

## Core Components

### Navigation
Fixed header with transparency effect over hero, solid on scroll. Logo left, navigation links center/right, "Contact" CTA button. Mobile: Hamburger menu.

### Hero Section (100vh)
Full-viewport hero with large-scale infrastructure/construction photography. Overlay with professional headline, subtitle describing specialization, dual CTAs ("View Projects" primary, "Download Resume" secondary with blur backdrop). Include subtle scroll indicator.

### Project Portfolio Grid
Masonry or card-based layout (2-3 columns desktop, 1 mobile). Each project card: Large featured image, project title, category tags, brief description, key metrics (budget, duration, scale), "View Details" link. Hover states reveal additional info.

### Credentials Showcase
Split layout: Left column for certifications/licenses (card format with icons), Right column for education timeline. Include professional affiliations, registration numbers, years of experience stat blocks.

### Career Timeline
Vertical timeline with alternating left/right project milestones. Each milestone: Year marker, project name, client, role, key achievement, thumbnail image. Desktop: alternating sides, Mobile: single column.

### Expertise/Services Section
4-column grid (2 on tablet, 1 mobile) with service areas: Structural Design, Project Management, Site Supervision, Technical Consulting. Icon + title + description format.

### Testimonials
2-column layout with client quotes, company logos, project references. Include client name, title, company. Professional headshots if available.

### Contact Section
Two-column split: Form on left (Name, Email, Project Type dropdown, Message, Budget range, Submit), Contact info on right (Email, Phone, LinkedIn, Location, Availability status). Include brief response time expectation.

### Footer
Multi-column: Quick links, Services list, Professional memberships, Social links (LinkedIn, ResearchGate), Copyright, Privacy.

## Images

**Large Hero Image**: Yes - showcase iconic civil engineering project (bridge, building, infrastructure). High-quality, professional photography. Subtle gradient overlay for text readability.

**Project Images**: 8-12 high-quality project photos showing completed works, construction phases, technical drawings, site photos. Each 1200x800px minimum.

**Profile/About Image**: Professional headshot or site inspection photo for credibility section.

**Credential Badges**: University logos, professional certification emblems, association memberships (ASCE, ICE, etc.).

**Background Textures**: Subtle blueprint/technical drawing patterns for section dividers.

## Interaction Patterns

- Smooth scroll navigation to sections
- Project cards: Subtle lift on hover (transform: translateY(-4px))
- Form: Inline validation, clear success states
- Image galleries: Lightbox for project detail views
- Lazy loading for images below fold
- No distracting animations - focus on content

## Responsive Behavior

- Hero: Maintain full-height on all devices, adjust text sizing
- Grids: 3 cols → 2 cols (tablet) → 1 col (mobile)
- Timeline: Side-by-side → stacked
- Footer: Multi-column → stacked sections
- Navigation: Full menu → hamburger at 768px

## Accessibility
- Semantic HTML5 structure
- Alt text for all project images
- ARIA labels for interactive elements
- Focus indicators on all interactive components
- Keyboard navigation support
- Contrast ratios meeting WCAG AA standards