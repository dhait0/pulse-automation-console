import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const outputDir = new URL("../public/screenshots/", import.meta.url);

const workflows = [
  ["Invoice intake", "Ingreso de facturas", "Finance Ops", "99.6%", "#198754"],
  ["CRM enrichment", "Enriquecimiento CRM", "Revenue Systems", "97.3%", "#c77b00"],
  ["Employee onboarding", "Ingreso empleados", "People Tech", "99.1%", "#198754"],
  ["Vendor evidence sync", "Evidencias proveedor", "Security Ops", "Paused", "#6d7068"],
];

const events = [
  ["invoice.payment_failed", "Stripe mock / Stripe simulado", "Billing review", "#c77b00"],
  ["lead.updated", "CRM sandbox", "Enrichment queue", "#198754"],
  ["employee.created", "HR system / Sistema RRHH", "Access bootstrap", "#198754"],
  ["evidence.expired", "Vendor portal / Portal proveedor", "Security escalation", "#d33f49"],
];

const connectors = [
  ["n8n", "Workflow orchestration / Orquestacion", "#198754"],
  ["Microsoft Graph", "Directory and mailbox actions / Directorio", "#2867c9"],
  ["PostgreSQL", "Execution ledger / Registro", "#198754"],
  ["Slack mock", "Escalation notifications / Alertas", "#c77b00"],
];

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function wrap(text, size) {
  return text.length > size ? `${text.slice(0, size - 1)}…` : text;
}

function workflowRows(width = 790, compact = false) {
  return workflows
    .map((workflow, index) => {
      const y = 96 + index * (compact ? 94 : 84);
      return `
        <g transform="translate(0, ${y})">
          <rect width="${width}" height="${compact ? 78 : 68}" fill="rgba(255,250,240,0.72)" stroke="#d9d1bf" />
          <circle cx="22" cy="24" r="5" fill="${workflow[4]}" />
          <text x="38" y="28" fill="#111412" font-size="${compact ? 13 : 14}" font-weight="700">${esc(workflow[0])}</text>
          <text x="38" y="49" fill="#6d7068" font-size="11">${esc(workflow[1])}</text>
          <text x="${compact ? 38 : 420}" y="${compact ? 68 : 28}" fill="#6d7068" font-size="11">${esc(workflow[2])}</text>
          <text x="${compact ? width - 24 : width - 34}" y="38" text-anchor="end" fill="#111412" font-size="18" font-weight="700">${esc(workflow[3])}</text>
        </g>`;
    })
    .join("");
}

function eventCards(compact = false) {
  return events
    .map((event, index) => {
      const x = compact ? 0 : (index % 2) * 262;
      const y = compact ? 90 + index * 112 : 94 + Math.floor(index / 2) * 132;
      const width = compact ? 354 : 246;
      return `
        <g transform="translate(${x}, ${y})">
          <rect width="${width}" height="${compact ? 94 : 112}" fill="rgba(255,250,240,0.72)" stroke="#d9d1bf" />
          <circle cx="18" cy="22" r="5" fill="${event[3]}" />
          <text x="32" y="26" fill="#111412" font-size="13" font-weight="700">${esc(wrap(event[0], compact ? 34 : 24))}</text>
          <text x="18" y="54" fill="#6d7068" font-size="10">${esc(wrap(event[1], compact ? 42 : 30))}</text>
          <text x="18" y="${compact ? 78 : 86}" fill="#111412" font-size="11" font-weight="700">${esc(event[2])}</text>
        </g>`;
    })
    .join("");
}

function connectorCards(compact = false) {
  return connectors
    .map((connector, index) => {
      const x = compact ? 0 : index * 306;
      const y = compact ? 90 + index * 82 : 86;
      const width = compact ? 354 : 286;
      return `
        <g transform="translate(${x}, ${y})">
          <rect width="${width}" height="${compact ? 64 : 82}" fill="rgba(244,241,234,0.72)" stroke="#d9d1bf" />
          <circle cx="18" cy="22" r="5" fill="${connector[2]}" />
          <text x="32" y="26" fill="#111412" font-size="13" font-weight="700">${esc(connector[0])}</text>
          <text x="18" y="${compact ? 48 : 56}" fill="#6d7068" font-size="10">${esc(wrap(connector[1], compact ? 44 : 34))}</text>
        </g>`;
    })
    .join("");
}

function desktopSvg() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1280" viewBox="0 0 1440 1280">
      <defs>
        <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
          <path d="M44 0 L0 0 0 44" fill="none" stroke="rgba(24,32,28,0.08)" />
        </pattern>
      </defs>
      <rect width="1440" height="1280" fill="#f4f1ea" />
      <rect width="1440" height="1280" fill="url(#grid)" />
      <rect width="76" height="1280" fill="#18201c" />
      <rect x="20" y="24" width="36" height="36" fill="none" stroke="#f4f1ea" opacity="0.7" />
      <text x="38" y="49" text-anchor="middle" fill="#f4f1ea" font-family="Georgia" font-size="20" font-weight="700">P</text>

      <g transform="translate(104, 28)">
        <text x="0" y="20" fill="#6d7068" font-size="13">Pulse Automation Console</text>
        <text x="0" y="62" fill="#111412" font-family="Georgia" font-size="40" font-weight="700">Operations cockpit / Cabina de operaciones</text>
        <line x1="0" y1="88" x2="1260" y2="88" stroke="#d9d1bf" />

        <g transform="translate(0, 126)">
          <rect width="1260" height="282" fill="#fffaf0" stroke="#111412" />
          <text x="34" y="44" fill="#6d7068" font-size="11" font-weight="700" letter-spacing="2">AUTOMATION HEALTH / SALUD DE AUTOMATIZACIONES</text>
          <text x="34" y="132" fill="#111412" font-family="Georgia" font-size="68" font-weight="700">Workflow control room</text>
          <text x="34" y="178" fill="#3b3f39" font-size="18">English: Monitor webhook queues, retries, and escalation routes without exposing internal systems.</text>
          <text x="34" y="212" fill="#3b3f39" font-size="18">Español: Monitorea colas, reintentos y rutas de escalamiento sin exponer sistemas internos.</text>
          <rect x="916" width="344" height="282" fill="#18201c" />
          <text x="950" y="82" fill="#d9d1bf" font-size="13">Live window / Ventana activa</text>
          <text x="950" y="142" fill="#f4f1ea" font-family="Georgia" font-size="46" font-weight="700">14:00-18:00</text>
          <text x="950" y="180" fill="#d9d1bf" font-size="13">642 executions tracked / ejecuciones monitoreadas</text>
        </g>

        <g transform="translate(0, 426)">
          <rect width="420" height="126" fill="#fffaf0" stroke="#111412" />
          <rect x="420" width="420" height="126" fill="#fffaf0" stroke="#111412" />
          <rect x="840" width="420" height="126" fill="#fffaf0" stroke="#111412" />
          <text x="22" y="34" fill="#6d7068" font-size="11" font-weight="700" letter-spacing="1.4">WORKFLOW UPTIME / DISPONIBILIDAD</text>
          <text x="22" y="82" fill="#111412" font-family="Georgia" font-size="36" font-weight="700">99.2%</text>
          <text x="442" y="34" fill="#6d7068" font-size="11" font-weight="700" letter-spacing="1.4">EVENTS PROCESSED / EVENTOS</text>
          <text x="442" y="82" fill="#111412" font-family="Georgia" font-size="36" font-weight="700">48.7k</text>
          <text x="862" y="34" fill="#6d7068" font-size="11" font-weight="700" letter-spacing="1.4">MANUAL REVIEWS / REVISIONES</text>
          <text x="862" y="82" fill="#111412" font-family="Georgia" font-size="36" font-weight="700">12</text>
        </g>

        <g transform="translate(0, 570)">
          <rect width="808" height="466" fill="rgba(255,250,240,0.86)" stroke="#111412" />
          <text x="20" y="34" fill="#6d7068" font-size="11" font-weight="700" letter-spacing="2">WORKFLOW LANES / CARRILES</text>
          <text x="20" y="66" fill="#111412" font-family="Georgia" font-size="26" font-weight="700">Production-like routes</text>
          ${workflowRows(808)}
        </g>

        <g transform="translate(830, 570)">
          <rect width="430" height="466" fill="rgba(255,250,240,0.86)" stroke="#111412" />
          <text x="20" y="34" fill="#6d7068" font-size="11" font-weight="700" letter-spacing="2">WEBHOOK QUEUE / COLA</text>
          <text x="20" y="66" fill="#111412" font-family="Georgia" font-size="26" font-weight="700">Incoming events</text>
          <g transform="scale(0.78) translate(24, 18)">${eventCards()}</g>
        </g>

        <g transform="translate(0, 1054)">
          <rect width="1260" height="168" fill="rgba(255,250,240,0.86)" stroke="#111412" />
          <text x="20" y="34" fill="#6d7068" font-size="11" font-weight="700" letter-spacing="2">CONNECTORS / CONECTORES</text>
          <text x="20" y="66" fill="#111412" font-family="Georgia" font-size="26" font-weight="700">Integration surface</text>
          ${connectorCards()}
        </g>
      </g>
    </svg>`;
}

function mobileSvg() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="390" height="1920" viewBox="0 0 390 1920">
      <defs>
        <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
          <path d="M44 0 L0 0 0 44" fill="none" stroke="rgba(24,32,28,0.08)" />
        </pattern>
      </defs>
      <rect width="390" height="1920" fill="#f4f1ea" />
      <rect width="390" height="1920" fill="url(#grid)" />
      <rect width="390" height="64" fill="#18201c" />
      <rect x="18" y="14" width="36" height="36" fill="none" stroke="#f4f1ea" opacity="0.7" />
      <text x="36" y="39" text-anchor="middle" fill="#f4f1ea" font-family="Georgia" font-size="20" font-weight="700">P</text>
      <text x="72" y="29" fill="#f4f1ea" font-size="12">Pulse Automation Console</text>
      <text x="72" y="46" fill="#d9d1bf" font-size="10">Cabina de operaciones</text>

      <g transform="translate(18, 86)">
        <rect width="354" height="330" fill="#fffaf0" stroke="#111412" />
        <text x="18" y="34" fill="#6d7068" font-size="9" font-weight="700" letter-spacing="1.6">AUTOMATION HEALTH / SALUD</text>
        <text x="18" y="86" fill="#111412" font-family="Georgia" font-size="38" font-weight="700">Workflow</text>
        <text x="18" y="126" fill="#111412" font-family="Georgia" font-size="38" font-weight="700">control room</text>
        <text x="18" y="164" fill="#3b3f39" font-size="12">English: Monitor queues, retries, and escalations.</text>
        <text x="18" y="186" fill="#3b3f39" font-size="12">Español: Monitorea colas, reintentos y escalamiento.</text>
        <rect x="18" y="206" width="318" height="86" fill="#18201c" />
        <text x="34" y="236" fill="#d9d1bf" font-size="11">Live window / Ventana activa</text>
        <text x="34" y="270" fill="#f4f1ea" font-family="Georgia" font-size="28" font-weight="700">14:00-18:00</text>
      </g>

      <g transform="translate(18, 438)">
        <rect width="354" height="96" fill="#fffaf0" stroke="#111412" />
        <text x="16" y="28" fill="#6d7068" font-size="9" font-weight="700">WORKFLOW UPTIME / DISPONIBILIDAD</text>
        <text x="16" y="68" fill="#111412" font-family="Georgia" font-size="30" font-weight="700">99.2%</text>
        <rect y="110" width="354" height="96" fill="#fffaf0" stroke="#111412" />
        <text x="16" y="138" fill="#6d7068" font-size="9" font-weight="700">EVENTS PROCESSED / EVENTOS</text>
        <text x="16" y="178" fill="#111412" font-family="Georgia" font-size="30" font-weight="700">48.7k</text>
        <rect y="220" width="354" height="96" fill="#fffaf0" stroke="#111412" />
        <text x="16" y="248" fill="#6d7068" font-size="9" font-weight="700">MANUAL REVIEWS / REVISIONES</text>
        <text x="16" y="288" fill="#111412" font-family="Georgia" font-size="30" font-weight="700">12</text>
      </g>

      <g transform="translate(18, 784)">
        <rect width="354" height="468" fill="rgba(255,250,240,0.86)" stroke="#111412" />
        <text x="20" y="34" fill="#6d7068" font-size="10" font-weight="700" letter-spacing="1.6">WORKFLOW LANES / CARRILES</text>
        <text x="20" y="66" fill="#111412" font-family="Georgia" font-size="25" font-weight="700">Production routes</text>
        ${workflowRows(354, true)}
      </g>

      <g transform="translate(18, 1274)">
        <rect width="354" height="560" fill="rgba(255,250,240,0.86)" stroke="#111412" />
        <text x="20" y="34" fill="#6d7068" font-size="10" font-weight="700" letter-spacing="1.6">WEBHOOK QUEUE / COLA</text>
        <text x="20" y="66" fill="#111412" font-family="Georgia" font-size="25" font-weight="700">Incoming events</text>
        ${eventCards(true)}
      </g>
    </svg>`;
}

async function main() {
  await mkdir(outputDir, { recursive: true });
  await sharp(Buffer.from(desktopSvg())).png().toFile(
    fileURLToPath(new URL("./pulse-automation-console-home-desktop.png", outputDir)),
  );
  await sharp(Buffer.from(mobileSvg())).png().toFile(
    fileURLToPath(new URL("./pulse-automation-console-home-mobile.png", outputDir)),
  );
}

await main();
