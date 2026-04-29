# Getting Started Guide

Welcome to your B2B Manufacturing Website! This guide will help you get up and running quickly.

## 🚀 Quick Start

### 1. Navigate to Project Directory

```bash
cd manufacturing-website
```

### 2. Install Dependencies (Already Done)

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## 📋 What's Included

### ✅ Complete Website Structure
- Hero section with slider
- Services showcase (6 services)
- About section with company info
- Manufacturing process (6 steps)
- Portfolio/case studies (4 projects)
- Client testimonials (4 testimonials)
- Contact form with business info
- Responsive navigation
- Professional footer

### ✅ Technical Features
- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Fully responsive design
- SEO optimized
- Production-ready build

### ✅ Documentation
- README.md - Main documentation
- CUSTOMIZATION.md - How to customize
- DEPLOYMENT.md - Deployment guide
- PROJECT_STRUCTURE.md - Architecture details
- This file - Getting started

## 🎨 First Steps to Customize

### 1. Update Company Information

Edit `lib/data.ts`:

```typescript
export const companyData = {
  name: "Your Company Name",  // Change this
  tagline: "Your Tagline",    // Change this
  // ... update other fields
};
```

### 2. Update Contact Information

Search for these in the codebase and replace:
- `sales@apexmanufacturing.com` → Your email
- `+1 (800) 555-1234` → Your phone
- Update address in Footer and Contact sections

### 3. Add Your Images

Place images in these folders:
- `public/hero/` - Hero slider images (3 images)
- `public/portfolio/` - Portfolio images (4 images)
- `public/logos/` - Client logos (6 logos)

### 4. Customize Services

Edit the `services` array in `lib/data.ts` to match your offerings.

### 5. Update Process Steps

Modify `processSteps` in `lib/data.ts` to reflect your workflow.

## 📱 Testing Your Website

### Desktop Testing
1. Open in Chrome: http://localhost:3000
2. Test all navigation links
3. Try the contact form
4. Check all sections scroll smoothly

### Mobile Testing
1. Open Chrome DevTools (F12)
2. Click device toolbar icon
3. Test on different screen sizes:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - Desktop (1920px)

### Performance Testing
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit
4. Aim for 90+ scores

## 🎯 Common Tasks

### Change Primary Color

Find and replace throughout components:
- `bg-blue-600` → `bg-your-color-600`
- `text-blue-600` → `text-your-color-600`

### Add a New Section

1. Create component: `components/new-section/NewSection.tsx`
2. Add to page: `app/page.tsx`
3. Import and place between existing sections

### Modify Navigation

Edit `components/ui/Navbar.tsx`:
- Add/remove links in `navLinks` array
- Update logo and company name

### Update Footer

Edit `components/ui/Footer.tsx`:
- Update links
- Modify social media URLs
- Change contact information

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear cache
rm -rf .next
npm run build
```

### Module Not Found

```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

## 📚 Learn More

### Next.js Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com)

### Framer Motion
- [Framer Motion Docs](https://www.framer.com/motion/)

## 🚀 Ready to Deploy?

See `DEPLOYMENT.md` for detailed deployment instructions to:
- Vercel (recommended)
- Netlify
- AWS
- Docker

## 💡 Tips for Success

1. **Start Small**: Customize one section at a time
2. **Test Often**: Check changes in browser frequently
3. **Use Git**: Commit changes regularly
4. **Backup**: Keep original files before major changes
5. **Mobile First**: Always test on mobile devices

## 📞 Need Help?

1. Check documentation files in this directory
2. Review Next.js documentation
3. Search for specific errors online
4. Check component comments for guidance

## ✨ Next Steps

1. [ ] Update company information
2. [ ] Add your images
3. [ ] Customize services
4. [ ] Update contact details
5. [ ] Test on mobile
6. [ ] Run Lighthouse audit
7. [ ] Deploy to production

---

**Congratulations!** You now have a professional B2B manufacturing website. Take your time customizing it to match your brand and business needs.

Good luck! 🎉
