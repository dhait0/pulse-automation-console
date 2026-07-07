# Architecture

Pulse Automation Console is a static Next.js demo designed to look like an enterprise automation operations surface.

## Boundaries

- `app/` owns routing, layout, and page composition.
- `components/` owns reusable UI pieces for workflow rows, event cards, connector lists, and summary cells.
- `lib/automation-data.ts` stores synthetic domain data.
- `scripts/` owns screenshot generation.

## Data model

The demo uses mock data for:

- workflow lanes
- webhook events
- incident routes
- connector health
- runbook steps

No real credentials, customer data, webhook payloads, or internal automation logic are included.
