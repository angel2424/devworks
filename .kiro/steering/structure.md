# Project Structure

## Directory Organization

### Core Application
- `pages/` - Nuxt 3 file-based routing (currently single page app)
- `components/` - Reusable Vue components
- `layouts/` - Page layout templates
- `assets/` - Source assets (CSS, images, JSON data)
- `public/` - Static files served directly

### Configuration & Build
- `nuxt.config.ts` - Main Nuxt configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `.nuxt/` - Generated Nuxt files (auto-generated)
- `.output/` - Production build output

## Key Patterns

### Component Structure
- Components use Vue 3 Composition API with `<script setup>`
- Tailwind classes for styling with custom CSS variables
- Icon usage via `@nuxt/icon` with consistent naming

### Data Management
- Static content stored in `assets/json/` files
- Images organized in `public/img/` directory
- Global styles in `assets/css/global.css`

### Styling Conventions
- Custom CSS variables defined in global.css:
  - `--color-primary: #1E48DB`
  - `--color-title: #01161E`
  - `--color-blue: #124559`
  - `--color-border-blue: #E2E8FF`
  - `--color-card: #F0F3FF`
- Font stack: DM Sans (body), Cal Sans (headings)
- Responsive design with mobile-first approach

### Animation & Interactions
- GSAP for complex animations (horizontal scroll, ScrollTrigger)
- Tailwind utilities for simple transitions
- Responsive breakpoints: sm, md, lg, xl, 2xl

## File Naming
- Vue components: PascalCase (e.g., `Hero.vue`, `MobileNav.vue`)
- JSON data files: kebab-case (e.g., `offer-cards.json`)
- CSS files: kebab-case (e.g., `global.css`)
- Images: kebab-case or descriptive names