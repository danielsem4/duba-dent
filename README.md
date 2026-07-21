# Duba Dent — client

Landing-page app built with **React 19 + TypeScript + Vite 7 + Tailwind CSS v4 + shadcn/ui**.
Structure follows the screens-based convention (per the internal HIT `Generic3` project).

## Stack

- React 19, react-router-dom v7
- Tailwind CSS v4 (`@tailwindcss/vite`, CSS-first), shadcn/ui (new-york, neutral)
- TanStack Query, Zustand, Axios, Zod + react-hook-form
- i18next (English + Hebrew, with RTL), sonner toasts, lucide icons

## Scripts

```bash
npm install
npm run dev      # start dev server
npm run build    # tsc -b && vite build
npm run lint     # eslint
npm run preview  # preview production build
```

## Structure

```
src/
  api/          # axios-based API functions (one file per domain)
  common/       # shared, non-screen code: components/layouts, constants, types, utils
  components/
    common/     # shared app components (Navbar, Footer, LanguageSwitcher, ThemeToggle)
    ui/         # shadcn/ui primitives
  hooks/
    common/     # reusable hooks
    queries/    # React Query hooks wrapping src/api
  i18n/         # i18next setup + locales/{en,he}.ts
  lib/          # axios instance, cn() util
  screens/      # one folder per route (home/, not-found/)
    home/
      Home.tsx
      components/   # Hero, Services, About, Contact
      schema/       # zod schemas
  store/        # Zustand stores (theme, language)
```

Path alias: `@/* -> ./src/*`.

## Notes

- No auth — this is a public marketing site.
- The contact form is UI-only; wire `src/api/contactApi.ts` to a real endpoint
  (set `VITE_API_URL`) when a backend exists.
