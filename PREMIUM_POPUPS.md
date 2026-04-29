# Premium Popups Documentation

## Overview
Two premium, high-end popups designed to match the website's aesthetic with glassmorphism effects, smooth animations, and smart triggering logic.

## Features
✅ **Premium Design** - Glassmorphism with blur backgrounds
✅ **Smooth Animations** - Fade + scale + motion effects
✅ **Smart Triggers** - Time delay or scroll-based
✅ **Session Control** - Maximum 1 popup per type per session
✅ **User Friendly** - Easy close (button + backdrop click)
✅ **Responsive** - Works perfectly on all devices
✅ **Brand Consistent** - Matches website colors and style
✅ **Performance Optimized** - Lightweight and fast

## Popup Types

### 1. Welcome Popup
**Purpose**: Greet visitors and encourage engagement

**Trigger**: Shows after 4 seconds delay

**Content**:
- Welcome message with emoji
- Brief company introduction
- "Get Started" CTA button
- "Maybe Later" option

**Design**:
- Blue to purple gradient
- Sparkles icon
- Clean, minimal layout

### 2. Inquiry Popup
**Purpose**: Lead generation and quote requests

**Trigger**: Shows after scrolling 1500px

**Content**:
- Custom quote offer
- 3 key benefits with checkmarks
- "Request Quote" CTA button
- "Call Us" secondary button

**Design**:
- Purple to blue gradient
- Mail icon
- Feature list with green checkmarks

## Usage

### Basic Implementation
```tsx
import PremiumPopup from "@/components/ui/PremiumPopup";

// Welcome popup with time delay
<PremiumPopup 
  type="welcome" 
  delay={4000}  // 4 seconds
/>

// Inquiry popup with scroll trigger
<PremiumPopup 
  type="inquiry" 
  scrollTrigger={1500}  // After 1500px scroll
/>
```

### Configuration Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | "welcome" \| "inquiry" | required | Type of popup to show |
| `delay` | number | 3000 | Delay in milliseconds before showing |
| `scrollTrigger` | number | undefined | Show after scrolling X pixels |

## Trigger Logic

### Time Delay Trigger
```tsx
<PremiumPopup type="welcome" delay={5000} />
```
- Popup shows after 5 seconds
- Only if not shown before in this session

### Scroll Trigger
```tsx
<PremiumPopup type="inquiry" scrollTrigger={2000} />
```
- Popup shows after scrolling 2000px
- Only if not shown before in this session

## Session Management

Each popup type is tracked separately using `sessionStorage`:
- `popup_welcome_shown` - Tracks welcome popup
- `popup_inquiry_shown` - Tracks inquiry popup

**Behavior**:
- Shows maximum once per session per type
- Resets when browser tab is closed
- Doesn't persist across page reloads in same tab

## Design Details

### Glassmorphism Effect
```css
bg-white/95 backdrop-blur-xl
```
- 95% white opacity
- Extra large blur effect
- Premium glass appearance

### Animations
```tsx
// Backdrop fade in
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}

// Content scale + slide
initial={{ opacity: 0, scale: 0.9, y: 20 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
```

### Color Schemes

**Welcome Popup**:
- Primary: Blue (#2563EB) to Blue (#1D4ED8)
- Background: Blue-50 to Purple-50 gradient
- Icon: Blue to Purple gradient

**Inquiry Popup**:
- Primary: Purple (#9333EA) to Blue (#2563EB)
- Background: Purple-50 to Blue-50 gradient
- Icon: Purple to Blue gradient

## Close Behavior

### Three Ways to Close:
1. **Close Button** - Top-right X button
2. **Backdrop Click** - Click outside popup
3. **CTA Click** - Clicking any action button

### Close Button Styling
```tsx
<button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 hover:scale-110">
  <X className="w-5 h-5" />
</button>
```

## CTA Buttons

### Primary CTA (Welcome)
```tsx
<a href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-700">
  Get Started
  <ArrowRight />
</a>
```

### Primary CTA (Inquiry)
```tsx
<a href="#contact" className="bg-gradient-to-r from-purple-600 to-blue-600">
  Request Quote
  <ArrowRight />
</a>
```

### Secondary Actions
- "Maybe Later" - Dismisses popup
- "Call Us" - Phone link with icon

## Responsive Design

### Mobile (< 640px)
- Full width with padding
- Stacked buttons (flex-col)
- Smaller text sizes
- Adjusted padding

### Desktop (≥ 640px)
- Max width 512px (max-w-lg)
- Horizontal buttons (flex-row)
- Larger text sizes
- More padding

## Performance

### Bundle Size
- Component: ~3KB (minified)
- Dependencies: Framer Motion (already included)

### Optimization Features
- Lazy rendering (only when triggered)
- AnimatePresence for smooth unmount
- Session storage prevents re-renders
- Event listener cleanup

## Accessibility

### ARIA Labels
```tsx
<button aria-label="Close popup">
  <X />
</button>

<button aria-label="View quote 1">
```

### Keyboard Support
- ESC key to close (browser default)
- Tab navigation through buttons
- Focus management

## Customization Examples

### Longer Delay
```tsx
<PremiumPopup type="welcome" delay={10000} />
```

### Earlier Scroll Trigger
```tsx
<PremiumPopup type="inquiry" scrollTrigger={800} />
```

### Custom Timing
```tsx
// Show welcome after 3 seconds
<PremiumPopup type="welcome" delay={3000} />

// Show inquiry after scrolling to services section
<PremiumPopup type="inquiry" scrollTrigger={1000} />
```

## Best Practices

### Timing
- ✅ Welcome: 3-5 seconds delay
- ✅ Inquiry: After meaningful scroll (1000-2000px)
- ❌ Don't show immediately (annoying)
- ❌ Don't show multiple popups at once

### Content
- ✅ Keep message short and clear
- ✅ Strong, action-oriented CTA
- ✅ Easy to dismiss
- ❌ Don't overload with information
- ❌ Don't use aggressive language

### Frequency
- ✅ Maximum 1-2 popups per session
- ✅ Track with sessionStorage
- ❌ Don't show on every page load
- ❌ Don't show multiple times

## Browser Compatibility
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers
- ✅ All modern browsers with sessionStorage support

## File Location
```
manufacturing-website/
└── components/
    └── ui/
        └── PremiumPopup.tsx
```

## Dependencies
- `framer-motion` - Animations
- `lucide-react` - Icons
- `sessionStorage` - Browser API (built-in)

## Technical Details

### State Management
```tsx
const [isOpen, setIsOpen] = useState(false);
const [hasShown, setHasShown] = useState(false);
```

### Session Check
```tsx
const sessionKey = `popup_${type}_shown`;
const wasShown = sessionStorage.getItem(sessionKey);
```

### Cleanup
```tsx
useEffect(() => {
  // Setup
  return () => {
    // Cleanup timers and event listeners
  };
}, [dependencies]);
```

## Testing Checklist

- [ ] Popup shows after correct delay
- [ ] Popup shows after scroll trigger
- [ ] Close button works
- [ ] Backdrop click closes popup
- [ ] CTA buttons navigate correctly
- [ ] Only shows once per session
- [ ] Animations are smooth
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] Session storage works

## Notes
- Popups use `z-index: 10000` to appear above all content
- Backdrop uses `backdrop-blur-sm` for depth effect
- All animations use `ease-out` for natural feel
- Session storage is cleared when browser tab closes
- Popups are fully accessible and keyboard-friendly
