# AETHERON

AI-powered smart-city operating system for command teams and citizens. This repository currently delivers a runnable vertical slice: operational overview, ResQRoute SOS intake with auditable SQLite persistence, safety-conscious incident lifecycle, module-ready command areas, and health telemetry.

## Stack

- React 19 + Vite + TypeScript frontend with a responsive mission-control UI
- Express + Socket.IO API, Zod request validation, Helmet and rate limits
- Prisma + SQLite for local persistence (PostgreSQL migration path is supported by Prisma)

## Run on Windows 11

```powershell
Copy-Item .env.example .env
npm.cmd install
npm.cmd run db:generate
npm.cmd run db:push
npm.cmd run dev
```

Open `http://localhost:5173`. The API health endpoint is `http://localhost:4000/health`.

## Safety and demo boundaries

The default interface uses clearly labeled demonstration data. SOS submissions persist locally and receive an API acknowledgement, but do not contact real emergency services. Real dispatch, booking, weather, mapping, and LLM providers must be separately configured and verified before they are presented as live.

## Current scope

Implemented: responsive command shell, dashboard, emergency validation/persistence/audit log, live-event foundation, health check, and provider-ready module workspaces.

Planned before production: full JWT/RBAC UI, citizen portal, Leaflet/GTFS connectors, IndexedDB SOS outbox, tested provider adapters, background jobs, full test suite, alerting, and external deployment.
