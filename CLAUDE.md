# CLAUDE.md

## Project Overview

Personal portfolio website for Cédric Bouchard — a software engineering student. Built with React, TypeScript, and Vite.

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 8
- **Styling:** CSS Modules (`.module.css` files)
- **Linting:** ESLint 9 with TypeScript and React plugins

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server
npm run build      # Type-check and build for production (tsc -b && vite build)
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

## Project Structure

```
src/
├── assets/            # Static assets (images, etc.)
├── components/        # React components with co-located CSS Modules
│   ├── Component.tsx
│   └── Component.module.css
├── App.tsx            # Root application component
├── App.css            # Global app styles
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Code Conventions

- **Components:** Functional components with `React.FC` type annotation
- **Styling:** Use CSS Modules — each component has a co-located `.module.css` file. Import as `styles` and use `className={styles.className}`
- **Language:** TypeScript strict mode enabled
- **Exports:** Default exports for components
- **Formatting:** No semicolons in TSX files is acceptable (project uses mixed style)

## Commit Messages

- Use imperative mood: "Add" not "Added"
- Use prefixes: `feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `chore:`
- Max 72 characters, single line
- No trailing punctuation

## Guidelines

- Run `npm run build` before submitting changes to catch type errors
- Run `npm run lint` to ensure code quality
- Keep components small and focused — one component per file
- Co-locate CSS Modules with their component files
- Place static assets in `src/assets/`
