# espace-client

Espace client d'exemple, pour essayer des agents de code sur un vrai dépôt : l'historique des paiements d'un client,
servi par une API NestJS sur Postgres et affiché par une interface Next.js.

- `apps/api` : API NestJS (`/api/health`, `/api/payments?limit=&offset=`), 30 paiements d'exemple au premier démarrage ;
- `apps/web` : interface Next.js qui liste les paiements ;
- `docker-compose.yml` : Postgres (port 5434, pour cohabiter avec `facturation-api`).

Ce dépôt est un **modèle** : créez le vôtre avec « Use this template », sous le nom `espace-client`, sur votre
organisation ou votre compte.

Prérequis : Node 24, pnpm 10, Docker avec Compose.

```bash
make install    # dépendances, et .env depuis .env.example
make dev        # Postgres, API sur http://localhost:4020, interface sur http://localhost:3020
make test       # tests unitaires
make typecheck  # types
make build      # construction
```
