# Design Guidelines: Poetic Soul Portfolio

## Design Approach
**Reference-Based Approach** drawing inspiration from Medium's elegant reading experience, Behance poetry portfolios, and literary platforms like Poetry Foundation. The design emphasizes emotional impact through exceptional typography, generous whitespace, and subtle motion that enhances rather than distracts from the poetry.

## Core Design Principles
1. **Typography as Art**: Text is the hero - every typographic choice must honor the poetry
2. **Breathing Space**: Generous whitespace creates contemplative moments
3. **Subtle Motion**: Animation enhances emotion without overwhelming
4. **Accessible Intimacy**: Professional yet deeply personal aesthetic

---

## Typography System

### Font Families
- **Primary (Headings)**: Playfair Display (serif) - for poet name, page titles, poem titles
- **Secondary (Body)**: Inter or Source Sans Pro (sans-serif) - for navigation, UI elements, metadata
- **Poetry Text**: Crimson Text or Libre Baskerville (serif) - for actual poem content

### Type Scale
- **Hero Name**: text-6xl md:text-7xl lg:text-8xl (Poetic Soul 🖤)
- **Page Titles**: text-4xl md:text-5xl lg:text-6xl
- **Poem Titles**: text-3xl md:text-4xl
- **Taglines**: text-xl md:text-2xl
- **Body Text**: text-base md:text-lg leading-relaxed (1.75 line height for poetry)
- **UI Elements**: text-sm md:text-base
- **Metadata**: text-xs md:text-sm opacity-70

---

## Layout System

### Spacing Primitives
Use Tailwind units: **4, 8, 12, 16, 20, 24** (p-4, m-8, gap-12, py-16, space-y-20, px-24)

### Container Strategy
- **Full-width sections**: w-full with inner max-w-7xl mx-auto px-6 md:px-12
- **Content sections**: max-w-4xl mx-auto for optimal reading width
- **Poetry text**: max-w-2xl mx-auto for intimate reading experience
- **Grid layouts**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 with gap-8

### Vertical Rhythm
- **Section padding**: py-20 md:py-32 for major sections
- **Component spacing**: space-y-12 md:space-y-16 between section elements
- **Poetry stanza breaks**: space-y-8 between stanzas

---

## Page-Specific Layouts

### Home Page
**Hero Section** (min-h-screen with centered content):
- Centered layout with poet name, tagline, and CTA
- Animated background (subtle smoke/ink particle effect using CSS or canvas)
- Content stack: space-y-8 vertically centered
- CTA button positioned py-8 below tagline

**Structure**:
```
[Animated Background - Full Viewport]
  [Centered Container - max-w-4xl]
    - Poetic Soul 🖤 (massive typography)
    - "Where feelings find their rhythm." (elegant tagline)
    - [Read Poems Button - prominent, rounded-full px-12 py-4]
```

### About Page
**Portrait Section**:
- Two-column layout (lg:grid-cols-2) with gap-16
- Left: Large portrait image (rounded-2xl, aspect-square object-cover)
- Right: Bio text (text-lg leading-relaxed) + WhatsApp CTA button

**Mobile**: Stack vertically with portrait max-w-md mx-auto mb-12

### Poems Page
**Grid Layout**:
- Masonry-style card grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8)
- Each card: p-8 rounded-xl hover:shadow-2xl transition-all duration-300
- Card content: Poem title + emoji, excerpt (first 2-3 lines), "Read More" link

**Poem Modal/Page**:
- max-w-3xl mx-auto py-20 px-6
- Poem title centered mb-12
- Poetry text with generous line-height (leading-loose)
- Action buttons row (gap-4): Listen 🎧, Share WhatsApp
- Author signature: POETIC SOUL @IK (text-sm italic mt-16)

---

## Component Library

### Navigation
- Fixed top navigation with backdrop-blur-md
- Logo/name left, nav links right (hidden on mobile, hamburger menu)
- Links: Home, About, Poems (px-4 py-2 hover:underline)
- Dark/light mode toggle (sun/moon icon, top-right)

### Buttons
**Primary CTA** (Read Poems, Chat with Poet):
- rounded-full px-8 md:px-12 py-3 md:py-4
- Blurred background when on hero images (backdrop-blur-md bg-white/20)
- Built-in hover/active states (no custom interactions needed)

**Secondary** (Share, Listen):
- rounded-lg px-6 py-2.5
- Icon + text horizontal layout (gap-2)

### WhatsApp Integration
**Floating Button** (bottom-right):
- fixed bottom-8 right-8
- rounded-full w-16 h-16 shadow-2xl
- WhatsApp icon centered
- Pulse animation on idle

**Inline Buttons**:
- Standard secondary button styling with WhatsApp icon

### Poetry Cards
- p-6 md:p-8 rounded-2xl
- border border-current/10
- hover:scale-105 transition-transform duration-300
- Title (text-2xl mb-4) + emoji
- Excerpt (text-base opacity-80 line-clamp-3)
- Read More link (text-sm underline mt-4)

### Modal/Overlay
- Fixed inset with backdrop-blur-lg bg-black/50
- Content container: max-w-4xl mx-auto my-12 rounded-3xl p-8 md:p-16
- Close button: absolute top-6 right-6 w-10 h-10

### Footer
- py-12 border-t border-current/10
- Centered layout max-w-7xl mx-auto px-6
- Row of: Copyright text | WhatsApp icon link
- Mobile: stack vertically (space-y-4)

---

## Animations & Interactions

### Hero Background
- Subtle particle/smoke animation using CSS animations or canvas
- Slow, meditative movement (3-5s duration, infinite loop)
- Low opacity (0.1-0.3) to avoid distraction

### Page Transitions
- Fade in on mount: opacity-0 to opacity-100 (duration-700)
- Content stagger: elements appear sequentially (delay-75, delay-150, delay-300)

### Hover States
- Cards: scale-105 + shadow enhancement (duration-300)
- Buttons: Built-in hover states only
- Links: underline decoration with decoration-2

### Text-to-Speech
- Play/pause toggle button with icon swap
- Subtle pulse during playback (animate-pulse on icon)

**NO parallax** - too distracting for intimate poetry reading

---

## Dark/Light Mode

### Toggle Implementation
- Sun/moon icon button in top-right navigation
- Smooth transition: transition-colors duration-300 on root element
- Persist preference in localStorage

### Mode Considerations
- Both modes equally refined and poetic
- Ensure sufficient contrast for poetry text readability (4.5:1 minimum)
- Maintain emotional impact in both themes

---

## Images

### Hero Section
**Animated Background**: Subtle smoke/ink particle effect (CSS animation or canvas) - NOT a static image. This creates the poetic, ethereal atmosphere without overwhelming the typography.

### About Page
**Portrait Image**: 
- Placement: Left column in two-column layout (desktop), centered on mobile
- Size: aspect-square, max-w-md
- Style: rounded-2xl with subtle shadow
- Treatment: High-quality, professional portrait with artistic treatment
- Fallback: Placeholder with poet initials (PSI) until actual image uploaded

### Poem Cards (Optional Enhancement)
Each poem card could feature a subtle, abstract background texture or gradient overlay that hints at the poem's emotional tone - but this is secondary to the typography.

**No other images required** - This is a typography-first design where the words are the art.

---

## Responsive Breakpoints
- Mobile: base (< 768px) - single column, full-width, generous padding
- Tablet: md (768px+) - two-column grids, increased spacing
- Desktop: lg (1024px+) - three-column grids, maximum typography scale

---

## Accessibility
- Semantic HTML (article for poems, section for page areas)
- ARIA labels on icon-only buttons
- Keyboard navigation for modal close (ESC key)
- Focus indicators visible and styled consistently
- Text-to-speech enhances accessibility for vision-impaired users