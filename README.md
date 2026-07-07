# Project

Pulse Automation Console / Consola de automatizacion Pulse

## Overview

English: Pulse Automation Console is a bilingual demo for monitoring automation workflows, webhook queues, retries, connector health, and escalation routes with synthetic enterprise data.

Español: Pulse Automation Console es un demo bilingue para monitorear flujos de automatizacion, colas webhook, reintentos, conectores y rutas de escalamiento con datos enterprise sinteticos.

## Features

- English: Workflow health lanes / Español: Carriles de salud de flujos
- English: Webhook event queue / Español: Cola de eventos webhook
- English: Incident escalation routes / Español: Rutas de escalamiento
- English: Runbook response steps / Español: Procedimiento de respuesta
- English: Connector surface for n8n, Microsoft Graph, PostgreSQL, and notifications / Español: Superficie de conectores para n8n, Microsoft Graph, PostgreSQL y notificaciones
- English: Bilingual UI and documentation / Español: UI y documentacion bilingue

## Architecture

English: The app uses Next.js App Router, feature-focused components, and synthetic automation data in `lib/automation-data.ts`.

Español: La app usa Next.js App Router, componentes por funcionalidad y datos sinteticos de automatizacion en `lib/automation-data.ts`.

## Tech Stack

- Next.js
- React
- TypeScript
- ESLint
- Prettier
- Husky
- Sharp screenshot generation

## Installation

```bash
npm install
```

## Running locally

```bash
npm run dev
```

English: Open `http://localhost:3000`.

Español: Abre `http://localhost:3000`.

## Folder structure

```text
app/
components/
docs/
lib/
public/
scripts/
README.md
AGENTS.md
package.json
```

## Screenshots

- [Desktop preview](public/screenshots/pulse-automation-console-home-desktop.png)
- [Mobile preview](public/screenshots/pulse-automation-console-home-mobile.png)

## Why this project exists

English: This repository demonstrates automation and integration operations without exposing private systems or internal workflow logic.

Español: Este repositorio demuestra operaciones de automatizacion e integraciones sin exponer sistemas privados ni logica interna de negocio.

## License

MIT
