# Founder Video Section Documentation

## Overview
A premium, corporate-style video section featuring a high-quality thumbnail with custom play button overlay and full-screen video modal player.

## Features
✅ **High-Quality Thumbnail** - Professional business image (1920px wide)
✅ **Custom Play Button** - Centered with pulsing animation
✅ **No Autoplay** - User-initiated playback only
✅ **Video Modal** - Full-screen overlay player
✅ **Smooth Animations** - Fade, scale, and hover effects
✅ **Lazy Loading** - Video loads only when modal opens
✅ **Responsive Design** - Works on all devices
✅ **Keyboard Support** - ESC to close modal
✅ **Performance Optimized** - Minimal bundle size

## Design Elements

### Thumbnail Section
- **Aspect Ratio**: 16:9 (aspect-video)
- **Image**: High-quality business/team photo
- **Overlay**: Dark gradient (bottom to top)
- **Corner Decorations**: Minimal border elements
- **Hover Effect**: Scale + glow animation

### Play Button
- **Size**: 80px × 80px (mobile), 96px × 96px (desktop)
- **Style**: White circle with blue play icon
- **Animation**: Pulsing ring effect
- **Hover**: Changes to blue background, white icon
- **Position**: Centered on thumbnail

### Text Overlay
- **Title**: "Watch Our Story"
- **Subtitle**: Duration + description
- **Style**: White text with shadow
- **Position**: Below play button

### Stats Section
- **Layout**: 4 columns (2 on mobile)
- **Cards**: White background with shadow
- **Content**: Large number + label
- **Hover**: Shadow lift effect

## Video Modal

### Features
- **Full-Screen Overlay**: Dark backdrop with blur
- **Close Options**: 
  - X button (top-right)
  - ESC key
  - Click outside video
- **Video Controls**: Native HTML5 controls
- **Auto-Play**: Starts when modal opens
- **Auto-Pause**: Stops when modal closes

### Modal Layout
- **Max Width**: 1536px (max-w-6xl)
- **Aspect Ratio**: 16:9
- **Background**: Black with rounded corners
- **Shadow**: Large drop shadow
- **Info**: Title and description below video

## Usage

### Basic Implementation
```tsx
import FounderVideoSection from "@/components/video/FounderVideoSection";

export default function Page() {
  return (
    <>
      <FounderVideoSection />
    </>
  );
}
```

### Placement
Recommended position in page flow:
1. Hero Section
2. Services Section
3. About Section
4. **→ Founder Video Section** ← (Here)
5. Process Section
6. Portfolio Section
7. Testimonials Section
8. Contact Section

## Customization

### Change Thumbnail Image
```tsx
<Image
  src="YOUR_IMAGE_URL"
  alt="CDF Studio Founders"
  fill
  className="object-cover"
  priority
/>
```

**Recommended Image Specs**:
- Resolution: 1920×1080px or higher
- Format: JPG or WebP
- Quality: 80-90%
- Subject: Team photo, office, or product
- Lighting: Professional, well-lit

### Change Video Source
```tsx
<video ref={videoRef} className="w-full h-full" controls>
  <source
    src="YOUR_VIDEO_URL.mp4"
    type="video/mp4"
  />
</video>
```

**Recommended Video Specs**:
- Resolution: 1920×1080px (Full HD)
- Format: MP4 (H.264 codec)
- Duration: 2-5 minutes
- File Size: < 50MB (for web)
- Bitrate: 5-8 Mbps

### Change Stats
```tsx
{[
  { label: "Years Experience", value: "15+" },
  { label: "Global Clients", value: "500+" },
  { label: "Production Capacity", value: "500K+", suffix: "/month" },
  { label: "Team Members", value: "850+" },
].map((stat, index) => (
  // Stat card
))}
```

### Change Section Title
```tsx
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
  Your Custom Title
</h2>
```

## Animations

### Thumbnail Hover
```tsx
// Image scale on hover
group-hover:scale-105

// Glow effect on hover
group-hover:opacity-20
```

### Play Button
```tsx
// Pulsing ring
animate={{
  scale: [1, 1.2, 1],
  opacity: [0.5, 0, 0.5],
}}

// Hover scale
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.95 }}
```

### Modal
```tsx
// Backdrop fade
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}

// Content scale + fade
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
```

## Performance Optimization

### Image Optimization
- Uses Next.js `Image` component
- Automatic WebP conversion
- Lazy loading (except priority images)
- Responsive sizes

### Video Optimization
- Lazy loading (loads only when modal opens)
- No autoplay (saves bandwidth)
- Preload metadata only
- Native controls (no custom player overhead)

### Code Splitting
- Component is client-side only
- Video modal renders conditionally
- Event listeners cleaned up properly

## Accessibility

### ARIA Labels
```tsx
<button aria-label="Close video">
  <X />
</button>
```

### Keyboard Support
- **ESC**: Close modal
- **Space/Enter**: Play/pause (native controls)
- **Tab**: Navigate controls

### Screen Readers
- Descriptive alt text on images
- Semantic HTML structure
- Focus management

## Browser Compatibility

### Video Format Support
- ✅ MP4 (H.264): All modern browsers
- ✅ WebM: Chrome, Firefox, Edge
- ✅ OGG: Firefox, Chrome

### Features
- ✅ HTML5 Video: All modern browsers
- ✅ Backdrop Filter: All modern browsers
- ✅ Framer Motion: All modern browsers

## Technical Details

### State Management
```tsx
const [isModalOpen, setIsModalOpen] = useState(false);
const [isPlaying, setIsPlaying] = useState(false);
const [isMuted, setIsMuted] = useState(false);
const videoRef = useRef<HTMLVideoElement>(null);
```

### Video Controls
```tsx
// Play/Pause
videoRef.current.play();
videoRef.current.pause();

// Reset
videoRef.current.currentTime = 0;

// Mute
videoRef.current.muted = true;
```

### Body Scroll Lock
```tsx
// Lock scroll when modal opens
document.body.style.overflow = "hidden";

// Restore scroll when modal closes
document.body.style.overflow = "unset";
```

## SEO Considerations

### Video Schema Markup (Optional)
```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "CDF Studio Founder Story",
  "description": "Learn about CDF Studio's journey",
  "thumbnailUrl": "THUMBNAIL_URL",
  "uploadDate": "2024-01-01",
  "duration": "PT3M",
  "contentUrl": "VIDEO_URL"
}
```

### Image Alt Text
```tsx
alt="CDF Studio Founders - Manufacturing Excellence"
```

## Best Practices

### Video Content
- ✅ Keep it short (2-5 minutes)
- ✅ Professional production quality
- ✅ Clear audio with subtitles
- ✅ Strong opening (first 5 seconds)
- ✅ Clear call-to-action at end

### Thumbnail
- ✅ High resolution (1920×1080+)
- ✅ Professional photography
- ✅ Good lighting and composition
- ✅ Represents video content
- ✅ Includes faces (increases clicks)

### Performance
- ✅ Compress video (< 50MB)
- ✅ Use CDN for hosting
- ✅ Optimize thumbnail image
- ✅ Lazy load video
- ✅ Preload thumbnail only

## Hosting Options

### Video Hosting
1. **YouTube** (Recommended for public videos)
   - Free hosting
   - Automatic transcoding
   - Global CDN
   - Analytics

2. **Vimeo** (Recommended for business)
   - Professional appearance
   - No ads
   - Privacy controls
   - Better player

3. **Self-Hosted** (Full control)
   - Use CDN (Cloudflare, AWS)
   - Compress video
   - Multiple formats

### Current Implementation
Uses Google's sample video for demo. Replace with your actual video URL.

## File Location
```
manufacturing-website/
└── components/
    └── video/
        └── FounderVideoSection.tsx
```

## Dependencies
- `framer-motion` - Animations
- `lucide-react` - Icons
- `next/image` - Image optimization
- HTML5 Video API (built-in)

## Testing Checklist

- [ ] Thumbnail loads quickly
- [ ] Play button is visible and centered
- [ ] Click opens modal smoothly
- [ ] Video plays automatically in modal
- [ ] Close button works
- [ ] ESC key closes modal
- [ ] Click outside closes modal
- [ ] Video pauses when modal closes
- [ ] Stats display correctly
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] Smooth animations

## Common Issues

### Video Not Playing
- Check video format (MP4 recommended)
- Verify video URL is accessible
- Check browser console for errors
- Ensure CORS headers if cross-origin

### Thumbnail Not Loading
- Verify image URL
- Check image format (JPG, PNG, WebP)
- Ensure image is publicly accessible
- Check Next.js image domains config

### Modal Not Closing
- Check event listener cleanup
- Verify state management
- Test ESC key handler
- Check backdrop click handler

## Notes
- Video section placed after About section for optimal flow
- Uses native HTML5 video controls for reliability
- Modal uses z-index 10000 to appear above all content
- Body scroll is locked when modal is open
- All event listeners are properly cleaned up
- Video resets to start when modal closes
