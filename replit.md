# Poetic Soul - Portfolio Website

## Overview

Poetic Soul is an emotionally immersive portfolio website for Nigerian poet Julius Samuel Ikechukwu (pen name: "Poetic Soul 🖤"). The application showcases poetry with a focus on exceptional typography, minimalistic design, and world-class UI/UX that creates an intimate reading experience. The site features a clean, elegant aesthetic inspired by Medium's reading experience and literary platforms, emphasizing breathing space and subtle motion to enhance emotional impact.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter for lightweight, hook-based client-side routing. Pages include Home, About, Poems, and a 404 Not Found page.

**UI Component Library**: Shadcn/ui components built on Radix UI primitives, providing accessible and customizable components following the "new-york" style variant with neutral base colors.

**Styling Approach**: 
- Tailwind CSS for utility-first styling with custom configuration
- CSS variables for theming with light/dark mode support
- Custom design system with specific typography scales and spacing primitives
- Three font families: Playfair Display (headings), Inter/Source Sans Pro (UI), and Crimson Text/Libre Baskerville (poetry content)

**State Management**: 
- React Query (@tanstack/react-query) for server state management and data fetching
- React Context for theme management (light/dark mode toggle)
- Local component state for UI interactions (modals, mobile menu)

**Key Design Decisions**:
- Typography-first approach where text is the primary visual element
- Generous whitespace and vertical rhythm (py-20 md:py-32 for sections)
- Maximum content width of 4xl for optimal reading, 2xl for poetry
- Animated background using Canvas API for subtle visual interest
- Responsive grid layouts (1 column mobile, 2-3 columns desktop)

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**API Design**: RESTful API with two endpoints:
- GET `/api/poems` - Returns all poems
- GET `/api/poems/:id` - Returns a single poem by ID

**Data Storage Strategy**: 
- Currently using in-memory storage (MemStorage class) with poems defined in the shared schema
- Data structure defined using Zod schemas for runtime validation
- Designed to be database-agnostic with a storage interface (IStorage) that can be swapped for persistent storage

**Server-Side Rendering**: Vite middleware integration for development with HMR (Hot Module Replacement). Production builds serve static files from the dist/public directory.

**Session Management**: Infrastructure present (connect-pg-simple) but not actively used, suggesting potential for future authentication features.

### Design System

**Color Theming**: 
- HSL-based color system with CSS custom properties
- Separate light and dark mode color palettes
- Semantic color tokens (background, foreground, primary, secondary, accent, muted, destructive)
- Card and popover variants with dedicated border colors

**Component Patterns**:
- Elevation system using hover/active states (hover-elevate, active-elevate-2)
- Consistent border radius scale (sm: 3px, md: 6px, lg: 9px)
- Button variants: default, destructive, outline, secondary, ghost
- Size variants: sm, default, lg, icon

**Animation Strategy**:
- Subtle entrance animations (fade-in, slide-in) with staggered delays
- Canvas-based particle animation for background ambiance
- Framer Motion not used; animations handled via Tailwind and CSS transitions

### Data Model

**Poem Schema**:
```typescript
{
  id: string (URL-friendly slug)
  title: string
  emoji: string (visual identifier)
  content: string (full poem text with line breaks)
  author: string (defaults to "POETIC SOUL @IK")
}
```

Currently three poems are hardcoded in the schema, but the structure supports dynamic expansion.

## External Dependencies

### Core Framework Dependencies
- **React 18** & **React DOM**: UI library
- **TypeScript**: Type safety and developer experience
- **Vite**: Build tool and development server with HMR

### UI Component Libraries
- **Radix UI**: Unstyled, accessible component primitives (accordion, dialog, dropdown, popover, tabs, toast, etc.)
- **Shadcn/ui**: Pre-styled component patterns built on Radix
- **Lucide React**: Icon library for UI elements

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx** & **tailwind-merge**: Conditional className utilities

### Data Management
- **@tanstack/react-query**: Server state management, caching, and data fetching
- **Zod**: Schema validation and TypeScript type inference
- **React Hook Form** (infrastructure present via @hookform/resolvers)

### Backend
- **Express**: Web server framework
- **Drizzle ORM**: Database ORM configured for PostgreSQL
- **@neondatabase/serverless**: Neon database driver (configured but not actively used)

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Production server bundling
- **@replit/vite-plugin-***: Replit-specific development tools (error overlay, cartographer, dev banner)

### Routing & Navigation
- **Wouter**: Lightweight routing library (~1KB)

### Date Handling
- **date-fns**: Date utility library

### UI Enhancements
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel component
- **vaul**: Drawer/bottom sheet component
- **react-day-picker**: Calendar/date picker

### Third-Party Integrations
- **WhatsApp**: Direct messaging integration via `https://wa.me/2349063887291`
- **Web Speech API**: Text-to-speech functionality for reading poems aloud

### Database Configuration
- Drizzle configured for PostgreSQL with Neon serverless driver
- Connection via DATABASE_URL environment variable
- Schema located at `shared/schema.ts`
- Migrations output to `./migrations` directory
- Currently not connected to an active database; using in-memory storage