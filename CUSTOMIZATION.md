# Customization Guide

This guide will help you customize the website for your specific manufacturing business.

## 🎨 Quick Customization Checklist

- [ ] Update company information
- [ ] Customize services
- [ ] Add your images
- [ ] Change color scheme
- [ ] Update contact details
- [ ] Modify content tone

## 📝 Content Customization

### 1. Company Information

Edit `lib/data.ts`:

```typescript
export const companyData = {
  name: "Your Company Name",
  tagline: "Your Company Tagline",
  description: "Your company description",
  established: "2010", // Your founding year
  capacity: "Your production capacity",
  employees: "Number of employees",
  countries: "Number of countries served",
};
```

### 2. Services

Customize the services array in `lib/data.ts`:

```typescript
export const services = [
  {
    id: 1,
    title: "Your Service Name",
    description: "Detailed service description",
    benefit: "Key business benefit",
    example: "Real-world example or case",
    icon: "factory", // Choose from available icons
  },
  // Add more services...
];
```

Available icons:
- `factory` - Manufacturing
- `layers` - Sourcing/Materials
- `clipboard` - Planning/Documentation
- `package` - Production/Delivery
- `tag` - Branding/Labels
- `shield-check` - Quality/Certification

### 3. Process Steps

Modify your manufacturing workflow in `lib/data.ts`:

```typescript
export const processSteps = [
  {
    step: 1,
    title: "Your Step Name",
    description: "Detailed step description",
    duration: "Time required",
  },
  // Add more steps...
];
```

### 4. Portfolio/Case Studies

Update with your real projects:

```typescript
export const portfolio = [
  {
    id: 1,
    client: "Client Name (can be anonymous)",
    category: "Product Category",
    description: "Project description",
    result: "Measurable results achieved",
    image: "/portfolio/your-image.jpg",
  },
  // Add more projects...
];
```

### 5. Testimonials

Add real client testimonials:

```typescript
export const testimonials = [
  {
    id: 1,
    name: "Client Name",
    position: "Job Title",
    company: "Company Name",
    content: "Testimonial text",
    rating: 5,
  },
  // Add more testimonials...
];
```

### 6. Contact Information

Update contact details in multiple files:

**In `lib/data.ts`** - Not currently there, but you can add:
```typescript
export const contactInfo = {
  email: "your@email.com",
  phone: "+1234567890",
  whatsapp: "1234567890",
  address: "Your Address",
};
```

**In `components/ui/Navbar.tsx`** - Update phone number:
```typescript
<a href="tel:+1234567890">+1 (234) 567-890</a>
```

**In `components/ui/Footer.tsx`** - Update all contact info

**In `components/contact/ContactSection.tsx`** - Update contact details

## 🎨 Design Customization

### Change Primary Color

The website uses blue as the primary color. To change it:

**1. Update Tailwind classes throughout components:**

Find and replace:
- `bg-blue-600` → `bg-your-color-600`
- `text-blue-600` → `text-your-color-600`
- `border-blue-600` → `border-your-color-600`
- `hover:bg-blue-700` → `hover:bg-your-color-700`

**2. Update gradient colors in `app/globals.css`:**

```css
.gradient-text {
  @apply bg-gradient-to-r from-your-color-600 to-your-color-400 bg-clip-text text-transparent;
}
```

### Available Tailwind Colors

- `slate` - Professional gray
- `gray` - Neutral gray
- `zinc` - Cool gray
- `red` - Bold red
- `orange` - Energetic orange
- `amber` - Warm amber
- `yellow` - Bright yellow
- `lime` - Fresh lime
- `green` - Success green
- `emerald` - Rich emerald
- `teal` - Modern teal
- `cyan` - Tech cyan
- `sky` - Light blue
- `blue` - Professional blue (current)
- `indigo` - Deep indigo
- `violet` - Creative violet
- `purple` - Royal purple
- `fuchsia` - Bold fuchsia
- `pink` - Soft pink
- `rose` - Elegant rose

### Change Typography

Edit `app/layout.tsx`:

```typescript
import { Inter, Roboto, Poppins } from "next/font/google";

// Choose your font
const customFont = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Apply in body
<body className={customFont.className}>
```

Popular font combinations:
- **Modern**: Inter + Inter
- **Professional**: Roboto + Roboto
- **Elegant**: Playfair Display + Source Sans Pro
- **Tech**: Space Grotesk + Inter
- **Corporate**: Montserrat + Open Sans

### Adjust Spacing

In `app/globals.css`, modify section spacing:

```css
section {
  @apply py-16 md:py-24 lg:py-32; /* Adjust padding */
}
```

### Change Border Radius

Update rounded corners globally:

```typescript
// In tailwind.config.ts
theme: {
  extend: {
    borderRadius: {
      'DEFAULT': '0.5rem', // Default rounding
      'lg': '1rem',        // Large rounding
      'xl': '1.5rem',      // Extra large
      '2xl': '2rem',       // Current style
    }
  }
}
```

## 🖼️ Image Customization

### Hero Images

Add 3 high-quality images to `public/hero/`:
- `manufacturing.jpg` - Factory/production floor
- `production.jpg` - Manufacturing process
- `quality.jpg` - Quality control/inspection

**Recommended specs:**
- Size: 1920x1080px
- Format: JPG or WebP
- Quality: 80-90%
- File size: < 500KB each

### Portfolio Images

Add project images to `public/portfolio/`:

**Recommended specs:**
- Size: 800x600px
- Format: JPG or WebP
- Quality: 80%
- File size: < 200KB each

### Client Logos

Add logos to `public/logos/`:

**Recommended specs:**
- Format: SVG (preferred) or PNG
- Background: Transparent
- Size: 200x100px
- File size: < 50KB each

### Favicon

Replace `public/favicon.ico` with your company favicon.

Generate favicons at: https://realfavicongenerator.net/

## 🌐 Multi-Language Support

To add multiple languages:

### 1. Install next-intl

```bash
npm install next-intl
```

### 2. Create translation files

```
locales/
  en.json
  es.json
  fr.json
```

### 3. Configure Next.js

Update `next.config.js`:

```javascript
module.exports = {
  i18n: {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'en',
  },
}
```

## 📱 Add WhatsApp Chat Widget

Add to `app/layout.tsx` before closing `</body>`:

```typescript
<a
  href="https://wa.me/1234567890"
  className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all"
  target="_blank"
  rel="noopener noreferrer"
>
  <MessageCircle className="w-7 h-7 text-white" />
</a>
```

## 🔧 Advanced Customization

### Add New Section

1. Create component in `components/your-section/YourSection.tsx`
2. Import and add to `app/page.tsx`:

```typescript
import YourSection from "@/components/your-section/YourSection";

export default function Home() {
  return (
    <main>
      {/* Existing sections */}
      <YourSection />
    </main>
  );
}
```

### Modify Animation Speed

In component files, adjust Framer Motion durations:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }} // Change this value
>
```

### Change Navbar Behavior

In `components/ui/Navbar.tsx`:

```typescript
// Change scroll threshold
setScrolled(window.scrollY > 100); // Default is 50

// Make navbar always solid
className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg"
```

### Customize Form Fields

In `components/contact/ContactSection.tsx`, add/remove fields:

```typescript
<div>
  <label htmlFor="budget">Budget Range</label>
  <select id="budget" name="budget">
    <option>$10,000 - $50,000</option>
    <option>$50,000 - $100,000</option>
    <option>$100,000+</option>
  </select>
</div>
```

## 🎯 Industry-Specific Customization

### For Textile Manufacturing

- Emphasize fabric types and certifications
- Add fabric swatch gallery
- Highlight sustainability practices

### For Electronics Manufacturing

- Focus on precision and technology
- Add certifications (ISO, RoHS, CE)
- Showcase clean room facilities

### For Food Manufacturing

- Emphasize food safety certifications
- Add HACCP, FDA compliance
- Showcase hygiene standards

### For Automotive Parts

- Highlight quality standards (IATF 16949)
- Add testing and validation processes
- Showcase precision engineering

## 📊 Analytics Integration

### Google Analytics

Add to `app/layout.tsx`:

```typescript
import Script from 'next/script'

<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## 🆘 Need Help?

- Check the main README.md for setup instructions
- Review DEPLOYMENT.md for deployment guidance
- Consult Next.js documentation: https://nextjs.org/docs
- Tailwind CSS documentation: https://tailwindcss.com/docs

---

Happy customizing! 🎨
