# devonion

Initial version of my personal website for `devonion.com`, built with Next.js.

## Current scope

- localized homepage for English and Polish
- root redirect from `/` to `/en`
- simple language switcher
- homepage CTA linking to `finance.devonion.com`

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- `next-intl`

## Local development

Run the development server:

```bash
pnpm dev
```

Open one of the current routes:

- `http://localhost:3000/`
- `http://localhost:3000/en`
- `http://localhost:3000/pl`

## Notes

- `/` redirects to `/en`
- unsupported locale segments return `404`
- this is an early foundation and will later grow into a fuller landing page and blog
