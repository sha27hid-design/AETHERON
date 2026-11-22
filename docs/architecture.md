# Architecture

`apps/web` is the operator experience. `apps/api` owns validation, persistence, audit logging and real-time notifications. Prisma keeps data access isolated behind SQLite locally; production can replace the datasource with PostgreSQL. External services should be implemented as adapters so their availability and source metadata can be reported honestly.

Emergency requests are accepted only after schema validation, persisted before acknowledgement, logged in the audit trail, and broadcast as an unverified event. No route may dispatch a real responder autonomously.
