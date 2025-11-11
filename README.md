# Project README

This repository is a Next.js app (app directory) cloned locally. This README explains the minimum prerequisites and the easiest commands to install, run, build and troubleshoot the project on Windows (PowerShell).

## Quick facts (from repository)

- Framework: Next.js (see `package.json`)
- React: v19
- Package manager: pnpm is preferred (repo contains `pnpm-lock.yaml`) — npm/yarn also work
- Styling: Tailwind CSS
- TypeScript is configured (`tsconfig.json` exists)

## Prerequisites

- Node.js (LTS): use Node 18+ (or latest LTS). If you have multiple Node versions use nvm, nvm-windows, or your version manager.
- pnpm (recommended since repo has a pnpm lockfile). Install globally if you don't have it:

```powershell
# Install pnpm globally
npm install -g pnpm
```

Alternative: you can use `npm` or `yarn` (commands below include both options). Using pnpm will ensure the lockfile matches and avoids hoisting surprises.

## Install dependencies

Open PowerShell at the project root (where `package.json` is located) and run:

```powershell
# with pnpm (recommended)
pnpm install

# or with npm
npm install

# or with yarn
yarn install
```

## Run in development

```powershell
# pnpm
pnpm dev

# npm
npm run dev

# yarn
yarn dev
```

This runs the Next.js development server and enables hot reload.

## Build & Start (production)

```powershell
# Build
pnpm build
# Start (production)
pnpm start

# npm equivalents
npm run build
npm run start
```

## Useful scripts (from `package.json`)

- `dev` — start developer server
- `build` — create production build
- `start` — start production server
- `lint` — run ESLint across the repo

Run lint:

```powershell
pnpm lint
# or
npm run lint
```

Type-check (TypeScript):

```powershell
# quick typecheck (no emit)
npx tsc --noEmit
```

## Environment variables

This project doesn't include a provided `.env.example` in the repository root (check inside `app/` or other folders if needed). If the app expects environment variables (e.g., API keys or feature flags), add a `.env.local` at the root with the required keys. Typical Next.js rules apply: variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## Troubleshooting / Common issues

- "Missing pnpm" or lockfile mismatch:
  - If `pnpm` is not installed use `npm install -g pnpm` or run with `npm`/`yarn` (may produce different node_modules layout).
- Node version mismatch errors:
  - If you see errors referring to unsupported Node version, install a compatible Node (use Node 18+ LTS or the version your team uses).
- Tailwind / PostCSS build errors:
  - Ensure `tailwindcss` and `postcss` are installed (they are listed in `package.json`). Remove `node_modules` and reinstall if needed: `pnpm install`.
- Port in use:
  - By default Next.js uses port 3000. If the port is busy, run `pnpm dev -- -p 3001` or set `PORT=3001` before the command.

## Project structure (high-level)

- `app/` — Next.js app directory (routes, layout)
- `components/` — shared React components and UI primitives
- `public/` — static assets
- `styles/` — any global CSS
- `package.json`, `pnpm-lock.yaml`, `tsconfig.json` at repository root

## Recommended next steps

- Run `pnpm install` and `pnpm dev` to verify the app runs locally.
- Add a `.env.example` if the project requires environment variables.
- If you want stricter checks, run `npx tsc --noEmit` and `pnpm lint`.

## If you run into problems

- Copy the terminal error and search for the error message online; package/Next.js community is helpful.
- Share logs and the output of `node -v` and `pnpm -v` so helpers can reproduce your environment.

---

If you'd like, I can also:

- Add a small `.env.example` if you tell me what env keys the app needs.
- Run a local start (I can provide the exact PowerShell commands tailored to your machine).
- Create an optional `devcontainer.json` or GitHub Actions workflow to run builds and tests.
