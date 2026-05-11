# CDF Studio - Premium Manufacturing Website

A high-performance, premium manufacturing company website built with modern web technologies including Next.js, React, Tailwind CSS, Framer Motion, and Three.js (React Three Fiber) for an immersive and aesthetically pleasing user experience.

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Library:** React
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** Three.js / React Three Fiber / Drei
- **Icons:** Lucide React
- **Email Service:** EmailJS
- **Deployment:** Vercel

## 📂 Project Structure

```text
manufacturing-website/
├── app/               # Next.js App Router (Pages, Layouts, API Routes)
├── components/        # Reusable React components (UI, 3D elements, Layout)
├── lib/               # Utility functions, helpers, and shared logic
├── public/            # Static assets (images, fonts, 3D models)
├── .env.local.example # Environment variable templates
├── tailwind.config.ts # Tailwind CSS configuration
├── next.config.ts     # Next.js configuration
├── vercel.json        # Vercel deployment configuration
└── package.json       # Dependencies and project scripts
```

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd manufacturing-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   Copy the example environment file and update it with your actual credentials.
   ```bash
   cp .env.local.example .env.local
   ```
   *Note: You will need your EmailJS credentials (`SERVICE_ID`, `TEMPLATE_ID`, `PUBLIC_KEY`) to make the contact form fully functional.*

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **View the website:**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Features & Highlights

- **Immersive 3D Experiences:** Interactive 3D elements and hero sections powered by React Three Fiber & Drei.
- **Dynamic Scroll Animations:** Smooth, engaging UI transitions and reveal animations using Framer Motion.
- **Fully Responsive Design:** Pixel-perfect optimization for mobile, tablet, and desktop devices utilizing Tailwind CSS.
- **Serverless Contact Form:** Fully working contact form integrated with EmailJS—no backend setup required.
- **SEO Optimized:** Leverages Next.js metadata and semantic HTML best practices for superior search engine visibility.

## 📦 Deployment

The project is optimized for deployment on [Vercel](https://vercel.com). A `vercel.json` file is already included for seamless configuration.

1. Push your code to your preferred Git provider (GitHub, GitLab, BitBucket).
2. Import the repository into Vercel.
3. Ensure you add all required **Environment Variables** (from your `.env.local`) in the Vercel project settings.
4. Deploy!

## 📄 Available Scripts

- `npm run dev` - Starts the development server on `localhost:3000`.
- `npm run build` - Creates an optimized production build.
- `npm run start` - Starts the production server using the generated build.
- `npm run lint` - Runs ESLint to check for code quality and issues.
- `npm run vercel-build` - Custom build script used by Vercel deployment.

---
*Built for CDF Studio to deliver a premium digital experience.*
