# Apex Manufacturing Co. - B2B Manufacturing Website

A complete, production-ready B2B manufacturing website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🎯 Overview

This is a high-end corporate website designed for apparel manufacturing, garment sourcing, and textile production companies. The website is built to attract business clients, build trust, and convert visitors into qualified leads.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for professional micro-interactions
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Comprehensive metadata and semantic HTML
- **Performance Focused**: Optimized for fast loading and smooth scrolling
- **B2B Focused**: Professional content and design for business clients

## 📁 Project Structure

```
manufacturing-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── hero/
│   │   └── HeroSection.tsx  # Hero slider with CTAs
│   ├── services/
│   │   └── ServicesSection.tsx  # Services grid
│   ├── about/
│   │   └── AboutSection.tsx     # Company information
│   ├── process/
│   │   └── ProcessSection.tsx   # Manufacturing process
│   ├── portfolio/
│   │   └── PortfolioSection.tsx # Case studies
│   ├── testimonials/
│   │   └── TestimonialsSection.tsx # Client testimonials
│   ├── contact/
│   │   └── ContactSection.tsx   # Contact form
│   └── ui/
│       ├── Navbar.tsx       # Navigation bar
│       └── Footer.tsx       # Footer
├── lib/
│   ├── data.ts              # All content data
│   └── utils.ts             # Utility functions
└── public/
    ├── hero/                # Hero images
    ├── portfolio/           # Portfolio images
    └── logos/               # Client logos
```

## 🎨 Sections

### 1. Hero Section
- Full-screen slider with 3 slides
- Strong B2B headline and value proposition
- Dual CTAs: "Request a Quote" and "View Capabilities"
- Smooth animations and scroll indicator

### 2. Services Section
- 6 comprehensive manufacturing services
- Each service includes:
  - Description
  - Business benefit
  - Real-world example
- Professional icons and hover effects

### 3. About Section
- Company story and mission
- Key statistics (500K+ units, 850+ employees, etc.)
- International certifications (ISO, WRAP, GOTS, Oeko-Tex)
- Trust-building content

### 4. Process Section
- 6-step manufacturing workflow
- Timeline visualization
- Duration for each step
- Total project timeline (60-90 days)

### 5. Portfolio Section
- 4 case studies with real results
- Category badges
- Success metrics
- Project statistics bar

### 6. Testimonials Section
- 4 client testimonials with ratings
- Client logo showcase
- Trust indicators
- Satisfaction statistics

### 7. Contact Section
- Professional inquiry form
- Contact information (email, phone, WhatsApp)
- Business hours
- Response time promise

## 🛠️ Installation

```bash
# Navigate to project directory
cd manufacturing-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📦 Dependencies

- **next**: ^15.x - React framework
- **react**: ^19.x - UI library
- **typescript**: ^5.x - Type safety
- **tailwindcss**: ^3.x - Utility-first CSS
- **framer-motion**: ^11.x - Animation library
- **lucide-react**: ^0.x - Icon library
- **clsx**: ^2.x - Conditional classNames
- **tailwind-merge**: ^2.x - Merge Tailwind classes

## 🎨 Customization

### Update Company Information

Edit `lib/data.ts` to customize:
- Company name and details
- Services offered
- Process steps
- Portfolio projects
- Testimonials
- Contact information

### Change Colors

Edit `tailwind.config.ts` and `app/globals.css` to modify:
- Primary color (currently blue-600)
- Background colors
- Text colors
- Accent colors

### Add Images

Place your images in the `public` directory:
- `public/hero/` - Hero slider images (1920x1080px)
- `public/portfolio/` - Portfolio images (800x600px)
- `public/logos/` - Client logos (SVG or PNG)

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- Alt text for images (when added)

## 🔍 SEO

- Comprehensive metadata in `layout.tsx`
- Semantic HTML structure
- Optimized page titles and descriptions
- Open Graph tags for social sharing
- Fast loading times

## 📄 License

This project is created for demonstration purposes.

## 🤝 Support

For questions or support, contact the development team.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
