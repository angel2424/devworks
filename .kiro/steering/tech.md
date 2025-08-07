# Tech Stack

## Framework & Core Technologies
- **Nuxt 3** (v3.16.2) - Vue.js meta-framework for SSR/SSG
- **Vue 3** (v3.5.13) - Frontend framework
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** (v4.1.4) - Utility-first CSS framework

## Key Dependencies
- **@nuxt/icon** - Icon management system
- **@nuxt/image** - Optimized image handling
- **@nuxt/fonts** - Font optimization
- **GSAP** - Animation library with ScrollTrigger
- **@nuxt/eslint** - Code linting and formatting

## Build System
- **Vite** - Build tool and dev server
- **Node.js** with ES modules (`"type": "module"`)

## Common Commands

### Development
```bash
npm run dev          # Start dev server with host binding
npm install          # Install dependencies
```

### Production
```bash
npm run build        # Build for production
npm run generate     # Generate static site
npm run preview      # Preview production build
```

### Maintenance
```bash
npm run postinstall  # Prepare Nuxt (runs automatically)
```

## Configuration Notes
- Uses Tailwind CSS v4 with Vite plugin
- Icons configured in CSS mode with base layer
- Global CSS imported from `~/assets/css/global.css`
- Development server runs with `--host` flag for network access