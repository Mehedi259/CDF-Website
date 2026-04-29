# Deployment Guide

This guide covers deploying your B2B Manufacturing website to production.

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🌐 Other Deployment Options

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables in Netlify dashboard

### AWS Amplify

1. Connect your Git repository
2. Build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Deploy

### Docker

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t manufacturing-website .
docker run -p 3000:3000 manufacturing-website
```

## 🔧 Pre-Deployment Checklist

### 1. Update Content
- [ ] Replace placeholder company name in `lib/data.ts`
- [ ] Update contact information (email, phone, address)
- [ ] Customize services, testimonials, and portfolio
- [ ] Add real company description and mission

### 2. Add Images
- [ ] Add hero slider images to `public/hero/`
- [ ] Add portfolio images to `public/portfolio/`
- [ ] Add client logos to `public/logos/`
- [ ] Optimize all images (use WebP format when possible)

### 3. SEO Configuration
- [ ] Update metadata in `app/layout.tsx`
- [ ] Add favicon and app icons
- [ ] Create `robots.txt` file
- [ ] Create `sitemap.xml` file
- [ ] Add Open Graph images

### 4. Environment Variables
- [ ] Copy `.env.local.example` to `.env.local`
- [ ] Update all environment variables
- [ ] Add environment variables to hosting platform

### 5. Performance Optimization
- [ ] Run `npm run build` and check for errors
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Optimize images with Next.js Image component
- [ ] Enable compression on hosting platform

### 6. Security
- [ ] Add HTTPS/SSL certificate
- [ ] Configure CORS if needed
- [ ] Add rate limiting to contact form
- [ ] Implement spam protection (reCAPTCHA)

### 7. Analytics & Monitoring
- [ ] Add Google Analytics
- [ ] Set up error tracking (Sentry)
- [ ] Configure uptime monitoring
- [ ] Set up form submission tracking

## 📊 Performance Optimization

### Image Optimization

```bash
# Install sharp for automatic image optimization
npm install sharp
```

Next.js will automatically optimize images using the `next/image` component.

### Enable Compression

Add to `next.config.js`:

```javascript
module.exports = {
  compress: true,
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
}
```

### Caching Strategy

Configure caching headers in `next.config.js`:

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

## 🔍 SEO Enhancements

### Add robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

### Add sitemap.xml

Create `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

## 📧 Contact Form Integration

### Option 1: Formspree

```typescript
// In ContactSection.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  // Handle response
};
```

### Option 2: SendGrid API

```bash
npm install @sendgrid/mail
```

Create API route `app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  const data = await request.json();
  
  const msg = {
    to: 'sales@apexmanufacturing.com',
    from: 'noreply@apexmanufacturing.com',
    subject: 'New Manufacturing Inquiry',
    text: `Name: ${data.name}\nEmail: ${data.email}\n...`,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
```

## 🔐 Security Best Practices

1. **Rate Limiting**: Implement rate limiting on contact form
2. **CAPTCHA**: Add reCAPTCHA to prevent spam
3. **Input Validation**: Validate all form inputs
4. **HTTPS**: Always use HTTPS in production
5. **Environment Variables**: Never commit sensitive data

## 📱 Testing

### Before Deployment

```bash
# Build and test locally
npm run build
npm start

# Test on different devices
# - Desktop (Chrome, Firefox, Safari)
# - Mobile (iOS Safari, Chrome)
# - Tablet

# Run Lighthouse audit
# Open Chrome DevTools > Lighthouse > Generate Report
```

### After Deployment

- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Verify all images load correctly
- [ ] Check mobile responsiveness
- [ ] Test page load speed
- [ ] Verify SEO metadata
- [ ] Test on different browsers

## 🆘 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Image Loading Issues

- Ensure images are in `public` directory
- Check image paths are correct
- Verify image formats are supported

### Deployment Fails

- Check build logs for errors
- Verify all dependencies are in `package.json`
- Ensure Node.js version is compatible (18+)

## 📞 Support

For deployment issues:
1. Check Next.js documentation: https://nextjs.org/docs
2. Check hosting platform documentation
3. Review build logs for specific errors

---

Good luck with your deployment! 🚀
