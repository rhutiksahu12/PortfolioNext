# Portfolio Website Redesign - Implementation Guide

## Overview

Your portfolio has been completely redesigned with a minimalist, developer-centric aesthetic inspired by steipete.me. The new design emphasizes clean typography, plenty of white space, readability, and professional credibility.

## Tech Stack

- **Framework**: Next.js 14.2+ with TypeScript
- **Styling**: Tailwind CSS with CSS variables for theming
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Dark Mode**: Native browser preference detection + local storage persistence

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx              # Root layout with theme provider
│   ├── globals.css             # Global styles with CSS variable definitions
│   ├── projects/               # Projects section
│   │   ├── page.tsx           # Projects listing page
│   │   └── [slug]/
│   │       └── page.tsx       # Individual case study page
│   ├── posts/                  # Blog section
│   │   ├── page.tsx           # Posts listing page
│   │   └── [slug]/
│   │       └── page.tsx       # Individual blog post page
│   ├── about/
│   │   └── page.tsx           # About page
│   └── contact/
│       └── page.tsx           # Contact page
├── components/
│   ├── NavBar.tsx             # Navigation with dark/light toggle
│   ├── Intro.tsx              # Hero "What I Do" section
│   ├── FeaturedProjects.tsx    # Homepage featured projects
│   ├── HireMeCTA.tsx          # Hire me call-to-action
│   └── ThemeProvider.tsx      # Dark/light mode context
└── lib/
    ├── utils.ts               # Utility functions
    └── useTheme.ts            # Theme hook for components
```

## Design System

### Color Palette

**Light Mode:**
- Background: White (#ffffff)
- Foreground: Black (#000000)
- Muted: Light Gray (#e3e3e3)
- Muted Foreground: Medium Gray (#717171)
- Border: Light Gray (#e3e3e3)
- Accent: Black (#000000)

**Dark Mode:**
- Background: Very Dark Gray (#0d0d0d)
- Foreground: Light Gray (#f2f2f2)
- Muted: Dark Gray (#333333)
- Muted Foreground: Medium Gray (#a6a6a6)
- Border: Dark Gray (#333333)
- Accent: Light Gray (#f2f2f2)

### Typography

- **Font Family**: Inter (system fallback available)
- **Headings**: Font-weight 600 or 700, generous line-height
- **Body Text**: Font-weight 400, line-height 1.6
- **Code**: Monospace (system fonts)

### Spacing & Layout

- **Max Content Width**: 3xl (48rem) for main content
- **Page Padding**: 1rem (mobile) to 2rem (desktop)
- **Vertical Padding**: 5rem (py-20) minimum between sections
- **Gaps**: 1.5rem to 2rem between elements

### Components

All interactive elements feature:
- Subtle hover states (opacity change or background color)
- Smooth transitions (200ms)
- Clear focus states for accessibility
- No animations beyond transitions (minimalist approach)

## Key Pages

### 1. **Homepage** (`/`)

Components:
- **Hero Section (Intro)**: Clear value proposition with 2-3 sentence introduction
- **Featured Projects**: 3-5 highlighted projects with links to full case studies
- **Hire Me CTA**: High-contrast footer section with contact and email links

### 2. **Projects** (`/projects`)

**Projects Listing Page:**
- All projects organized by year
- Each project shows title, description, technologies used
- Click to view full case study

**Case Study Template** (`/projects/[slug]`):
- Project title and metadata (year, technologies)
- Challenge section: Problem statement
- Solution section: How you approached it
- Implementation section: Code snippets and examples
- Outcome section: Results and metrics
- Learnings section: Key takeaways
- Tech stack list

Features:
- Code block styling with language indicator
- Responsive typography
- Navigation back to projects list

### 3. **Posts** (`/posts`)

**Posts Listing Page:**
- Reverse chronological list of articles
- Metadata: Publication date, reading time estimate
- Tags for categorization
- Excerpt preview
- Click through to full article

**Individual Post** (`/posts/[slug]`):
- Full article content
- Metadata headers (date, reading time, tags)
- Markdown-inspired formatting
  - Headings with proper hierarchy
  - Code blocks with syntax highlighting
  - Lists and emphasis
- Navigation back to posts list

### 4. **About** (`/about`)

Content sections:
- Brief introduction
- Story (background and journey)
- Experience (professional highlights)
- Values (quality, clarity, impact, learning)
- Technical skills breakdown (Frontend, Backend, DevOps)
- Interests beyond code
- Call-to-action links

### 5. **Contact** (`/contact`)

Features:
- Multiple contact methods (email, Twitter, GitHub, LinkedIn)
- Contact form with fields: name, email, subject, message
- Success message after submission
- Response time expectation

## Dark/Light Mode Implementation

### Theme Provider

The `ThemeProvider` component:
1. Detects user's system preference on mount
2. Checks localStorage for saved preference
3. Applies `dark` class to `<html>` element
4. Provides theme state to components via window object

### Using Themes

```typescript
import { useTheme } from '@/lib/useTheme';

export default function Component() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle theme
    </button>
  );
}
```

## Styling Approach

Uses **CSS Variables** for theming:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 0%;
  /* ... others ... */
}

.dark {
  --background: 0 0% 5%;
  --foreground: 0 0% 95%;
  /* ... others ... */
}
```

Tailwind CSS maps these to utility classes like:
- `bg-background`
- `text-foreground`
- `border-border`
- `text-muted-foreground`

## Navigation Structure

```
Home (/)
├── Posts (/posts)
│   └── Individual Post (/posts/[slug])
├── Projects (/projects)
│   └── Case Study (/projects/[slug])
├── About (/about)
└── Contact (/contact)
```

## Getting Started

### 1. Install Dependencies (if not already done)

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the site.

### 3. Update Content

#### Add a New Project

1. Create case study data in `/projects/[slug]/page.tsx`:
```typescript
const CASE_STUDIES: Record<string, CaseStudy> = {
  'your-project-slug': {
    title: 'Project Title',
    description: 'Brief description',
    year: 2024,
    tags: ['React', 'TypeScript'],
    challenge: '...',
    solution: '...',
    outcome: '...',
    learnings: [...],
    techStack: [...],
  },
};
```

2. The project will automatically appear in:
   - Projects listing page (organized by year)
   - Featured projects on homepage (with featured: true flag)

#### Add a New Blog Post

1. Add to `POSTS` array in `/posts/page.tsx`:
```typescript
const POSTS: BlogPost[] = [
  {
    id: '6',
    title: 'Your Post Title',
    slug: 'your-post-slug',
    excerpt: 'Brief excerpt...',
    date: '2024-03-12',
    readingTime: 15,
    tags: ['Tag1', 'Tag2'],
  },
];
```

2. Add case study data to `BLOG_POSTS` in `/posts/[slug]/page.tsx`

#### Update Personal Info

- **About page**: Edit `/app/about/page.tsx`
- **Contact links**: Update email and social links throughout
- **Metadata**: Update site title and description in `layout.tsx`

## Advanced Customization

### Color Customization

Edit `/app/globals.css` CSS variables:

```css
:root {
  --background: 0 0% 100%;      /* Change these HSL values */
  --foreground: 0 0% 0%;
  /* ... */
}
```

### Font Customization

Change in `layout.tsx`:
```typescript
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
```

### Adding More Sections

Create new route folders and pages following the existing pattern:
```
/src/app/new-section/page.tsx
```

## Performance Tips

1. **Images**: Use Next.js Image component for optimization
2. **Code Splitting**: Next.js automatically does this per route
3. **Fonts**: Inter is served from Google Fonts with optimal subsetting
4. **CSS-in-JS**: Tailwind CSS is compiled to minimal CSS file

## SEO Features

- Proper heading hierarchy (h1 → h2 → h3)
- Descriptive metadata in layout.tsx
- Semantic HTML throughout
- Fast load times improve Core Web Vitals

## Deployment

### Vercel (Recommended)

```bash
# Connect your Git repository and push
git push origin main
```

Vercel will automatically deploy every push.

### Other Platforms

```bash
npm run build
npm run start
```

## Future Enhancements

### Option 1: Add Database (Prisma + Express Backend)

```bash
npm install prisma @prisma/client express
```

Setup Prisma:
```bash
npx prisma init
```

Create `/api` routes in Next.js for:
- Blog post management
- Project case studies
- Contact form submissions

### Option 2: Add CMS

- Notion integration for posts
- MDX for rich blog content
- Headless CMS like Contentful

### Option 3: Analytics

- Add Vercel Analytics
- Google Analytics integration
- Custom event tracking

## Troubleshooting

### Dark mode not working

Ensure `ThemeProvider` wraps the entire app in `layout.tsx`.

### Styling not applying

- Check if Tailwind CSS is properly configured
- Clear `.next` folder: `rm -rf .next && npm run dev`
- Verify CSS variables are defined in `globals.css`

### Links not working

Ensure all Next.js routes have corresponding `page.tsx` files.

## Quick Reference

### Common Tailwind Classes Used

```
Spacing: px-4, py-20, gap-6, space-y-8
Typography: text-lg, font-bold, font-medium
Colors: bg-background, text-foreground, text-muted-foreground
Borders: border, border-border, rounded-lg
Layout: max-w-4xl, mx-auto, flex, grid
States: hover:opacity-60, hover:bg-muted, transition-opacity
```

## Questions or Issues?

For issues or customizations, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)

---

**Version**: 1.0
**Last Updated**: March 2024
