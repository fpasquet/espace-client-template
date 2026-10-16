# AGENTS.md

Instructions pour les agents qui travaillent dans ce dépôt d'exemple.

- Répondre en français ; code, identifiants et messages de commit en anglais.
- Monorepo pnpm + Turborepo : `apps/api` (NestJS, ESM, imports relatifs en `.js` ; paiements en centimes), `apps/web` (Next.js, App Router).
- Les commandes passent par le Makefile : `make install`, `make dev`, `make test`, `make typecheck`, `make build`.
- Avant de rendre la main : `pnpm format:check`, `make typecheck test build`.
- Toute nouvelle règle de l'API est testée (Vitest, à côté du code : `*.test.ts`).
- Commits en [Conventional Commits](https://www.conventionalcommits.org/) (`feat(payments): …`, `fix(web): …`), une PR par
  ticket, qui cite son numéro (`Closes #3`).
