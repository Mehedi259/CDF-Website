# Project Structure Documentation

Complete overview of the B2B Manufacturing Website architecture.

## 📁 Directory Structure

```
manufacturing-website/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata & navigation
│   ├── page.tsx                 # Home page (main entry point)
│   ├── globals.css              # Global styles & Tailwind directives
│   └── favicon.ico              # Site favicon
│
├── components/                   # React components
│   ├── hero/
│   │   └── HeroSection.tsx      # Hero slider with CTAs
│   ├── services/
│   │   └── ServicesSection.tsx  # Services grid with 6 offerings
│   ├── about/
│   │   └── AboutSection.tsx     # Company info, stats, certifications
│   ├── process/
│   │   └── ProcessSection.tsx   # 6-step manufacturing workflow
│   ├── portfolio/
│   │   └── PortfolioSection.tsx # Case studies & success stories
│   ├── testimonials/
│   │   └── TestimonialsSection.tsx # Client testimonials & logos
│   ├── contact/
│   │   └── ContactSection.tsx   # Contact form & information
│   └── ui/
│       ├── Navbar.tsx           # Responsive navigation bar
│       └── Footer.tsx           # Footer with links & info
│
├── lib/                          # Utility functions & data
│   ├── data.ts                  # All content data (centralized)
│   └── utils.ts                 # Helper functions (cn, etc.)
│
├── public/                       # Static assets
│   ├── hero/                    # Hero slider images
│   │   └── .gitkeep
│   ├── portfolio/               # Portfolio/case study images
│   │   └── .gitkeep
│   └── logos/                   # Client logos
│       └── .gitkeep
│
├── node_modules/                 # Dependencies (auto-generated)
│
├── .env.local.example           # Environment variables template
├── .gitignore                   # Git ignore rules
├── CUSTOMIZATION.md             # Customization guide
├── DEPLOYMENT.md                # Deployment instructions
├── next.config.ts               # Next.js configuration
├── package.json                 # Project dependencies & scripts
├── postcss.config.mjs           # PostCSS configuration
├── PROJECT_STRUCTURE.md         # This file
├── README.md                    # Main documentation
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## 🧩 Component Architecture

### Page Structure

```
app/page.tsx
├── HeroSection
├── ServicesSection
├── AboutSection
├── ProcessSection
├── PortfolioSection
├── TestimonialsSection
└── ContactSection
```

### Layout Structure

```
app/layout.tsx
├── Navbar (fixed top)
├── {children} (page content)
└── Footer
```

## 📊 Data Flow

```
lib/data.ts (Single Source of Truth)
    ↓
Components import specific data
    ↓
Components render with Framer Motion animations
    ↓
User interactions (scroll, click, form submit)
```

## 🎨 Styling Architecture

### Tailwind CSS Layers

1. **Base Layer** (`@layer base`)
   - CSS resets
   - Root variables
   - Global element styles

2. **Components Layer** (`@layer components`)
   - Reusable component classes
   - Custom utilities

3. **Utilities Layer** (`@layer utilities`)
   - Custom utility classes
   - Animations

### Color System

```
Primary: blue-600 (#2563eb)
Secondary: slate-900 (#0f172a)
Accent: blue-400 (#60a5fa)
Background: white (#ffffff)
Text: slate-900 (#0f172a)
Muted: slate-600 (#475569)
```

### Typography Scale

```
Hero: text-5xl md:text-6xl lg:text-7xl (48-72px)
H2: text-4xl md:text-5xl (36-48px)
H3: text-2xl md:text-3xl (24-30px)
Body: text-base md:text-lg (16-18px)
Small: text-sm (14px)
```

### Spacing System

```
Section Padding: py-24 (96px)
Container Padding: px-4 sm:px-6 lg:px-8
Gap: gap-4, gap-6, gap-8, gap-12
```

## 🔄 Animation System

### Framer Motion Patterns

**Fade In from Bottom:**
```typescript
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

**Fade In from Left:**
```typescript
initial={{ opacity: 0, x: -30 }}
whileInView={{ opacity: 1, x: 0 }}
```

**Fade In from Right:**
```typescript
initial={{ opacity: 0, x: 30 }}
whileInView={{ opacity: 1, x: 0 }}
```

**Stagger Children:**
```typescript
transition={{ duration: 0.6, delay: index * 0.1 }}
```

## 📱 Responsive Breakpoints

```
sm:  640px  - Small tablets
md:  768px  - Tablets
lg:  1024px - Laptops
xl:  1280px - Desktops
2xl: 1536px - Large desktops
```

### Responsive Patterns

**Grid Layouts:**
```
grid md:grid-cols-2 lg:grid-cols-3
```

**Flex Layouts:**
```
flex flex-col sm:flex-row
```

**Text Sizes:**
```
text-4xl md:text-5xl lg:text-6xl
```

## 🗂️ Data Structure

### Company Data
```typescript
{
  name: string
  tagline: string
  description: string
  established: string
  capacity: string
  employees: string
  countries: string
}
```

### Service Item
```typescript
{
  id: number
  title: string
  description: string
  benefit: string
  example: string
  icon: string
}
```

### Process Step
```typescript
{
  step: number
  title: string
  description: string
  duration: string
}
```

### Portfolio Item
```typescript
{
  id: number
  client: string
  category: string
  description: string
  result: string
  image: string
}
```

### Testimonial
```typescript
{
  id: number
  name: string
  position: string
  company: string
  content: string
  rating: number
}
```

## 🔌 Component Props

### HeroSection
- No props (uses internal state for slider)

### ServicesSection
- No props (imports data from lib/data.ts)

### AboutSection
- No props (imports data from lib/data.ts)

### ProcessSection
- No props (imports data from lib/data.ts)

### PortfolioSection
- No props (imports data from lib/data.ts)

### TestimonialsSection
- No props (imports data from lib/data.ts)

### ContactSection
- No props (manages form state internally)

### Navbar
- No props (responsive behavior via state)

### Footer
- No props (static content)

## 🚀 Performance Optimizations

### Image Optimization
- Next.js Image component (automatic)
- WebP format support
- Responsive image sizes
- Lazy loading

### Code Splitting
- Automatic route-based splitting
- Dynamic imports for heavy components

### CSS Optimization
- Tailwind CSS purging
- Minimal custom CSS
- No unused styles in production

### JavaScript Optimization
- Tree shaking
- Minification
- Compression

## 🔒 Security Features

### Headers
- No `X-Powered-By` header
- HTTPS enforcement (in production)

### Form Security
- Client-side validation
- Server-side validation (when implemented)
- Rate limiting (recommended)
- CAPTCHA (recommended)

## 📦 Dependencies

### Core
- `next`: ^15.x - React framework
- `react`: ^19.x - UI library
- `react-dom`: ^19.x - React DOM renderer

### Styling
- `tailwindcss`: ^3.x - Utility-first CSS
- `@tailwindcss/postcss`: ^4.x - PostCSS plugin
- `clsx`: ^2.x - Conditional classes
- `tailwind-merge`: ^2.x - Merge Tailwind classes

### Animation
- `framer-motion`: ^11.x - Animation library

### Icons
- `lucide-react`: ^0.x - Icon library

### Development
- `typescript`: ^5.x - Type safety
- `@types/node`: ^22.x - Node.js types
- `@types/react`: ^19.x - React types
- `@types/react-dom`: ^19.x - React DOM types
- `eslint`: ^9.x - Linting
- `eslint-config-next`: ^15.x - Next.js ESLint config

## 🧪 Testing Strategy (Recommended)

### Unit Tests
- Component rendering
- Data transformations
- Utility functions

### Integration Tests
- Form submissions
- Navigation flows
- API integrations

### E2E Tests
- User journeys
- Contact form flow
- Mobile responsiveness

### Tools (Not Included)
- Jest + React Testing Library
- Cypress or Playwright
- Lighthouse CI

## 📈 Scalability Considerations

### Adding New Sections
1. Create component in `components/`
2. Add data to `lib/data.ts`
3. Import in `app/page.tsx`
4. Update navigation if needed

### Multi-Page Support
1. Create new route in `app/`
2. Add to navigation
3. Update sitemap

### CMS Integration
- Headless CMS (Contentful, Sanity)
- Replace `lib/data.ts` with API calls
- Add loading states

### API Routes
- Create in `app/api/`
- Form submissions
- Contact endpoints
- Newsletter signups

## 🎯 Best Practices

### Code Organization
- One component per file
- Centralized data management
- Consistent naming conventions
- TypeScript for type safety

### Performance
- Lazy load images
- Minimize bundle size
- Use production builds
- Enable compression

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management

### SEO
- Metadata in layout
- Semantic structure
- Fast loading times
- Mobile-friendly

---

This structure provides a solid foundation for a production-ready B2B manufacturing website.
