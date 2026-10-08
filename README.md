# Adarsh Vijayakumar — Portfolio

A responsive, single-page portfolio built with **Next.js, React, TypeScript, CSS Modules, and semantic JSX/TSX**. Content is transcribed from the supplied resume; no personal projects or qualifications have been invented.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open the local URL printed by Next.js (normally http://127.0.0.1:3000).

```sh
npm run typecheck
npm run build
```

The production build is statically exported to `out/`, suitable for static hosting. The development server supports normal Next.js hot reload.

## Update content

- `lib/content.ts` contains the profile, contact links, experience, skills, and typed project entries.
- Add your portrait to `public/profile.jpg`, then set `profile.photo` to `"/profile.jpg"`. The circular placeholder is replaced automatically.
- Add verified project entries to `projects`; cards with optional GitHub and live links render automatically.
- `app/page.tsx` contains the page sections, including education.
- `app/page.module.css` and `components/Sidebar.module.css` control the visual design. Shared colors and spacing tokens are in `app/globals.css`.

Navigation uses section anchors, smooth scrolling, and an active section indicator. On smaller screens, it becomes a collapsible fixed top navigation. Contact links use `mailto:`, `tel:`, and the LinkedIn URL from the resume. Reduced motion, keyboard focus, a skip link, and screen reader labels are included.
