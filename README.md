# Rio Grande Refresh

A responsive company website for AI-powered vending machines and smart coolers serving New Mexico businesses. Built with Next.js App Router, TypeScript, and Tailwind CSS. The sunset palette and cooler illustration are implemented locally in CSS; no external fonts, images, services, or credentials are required.

## Development

Use Node.js 24 (Node 22+ supported) and npm.

```sh
npm ci
npm run dev
```

The development server binds to all interfaces on port 3000. Use the existing checkout; cloud tasks are already isolated and do not need a Git worktree.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` serves the production build. Set `PORT` when a different port is needed. The lockfile is committed; use `npm ci` for repeatable installs.

## Contact

The site links directly to riogranderefresh@gmail.com and (505) 920-0299. No form submissions are collected or stored, and no environment variables are needed.

## Deployment

Deploy to a Next.js-compatible host with install command `npm ci`, build command `npm run build`, and start command `npm start`. No database is required. Publishing a Codex cloud environment saves the development environment; deploying the public website and connecting a custom domain are separate steps.
