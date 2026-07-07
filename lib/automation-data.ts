export type FlowStatus = "healthy" | "degraded" | "paused";

export type Workflow = {
  name: string;
  nameEs: string;
  owner: string;
  status: FlowStatus;
  runs: string;
  latency: string;
  failureRate: string;
};

export type WebhookEvent = {
  source: string;
  sourceEs: string;
  payload: string;
  received: string;
  route: string;
  risk: "low" | "medium" | "high";
};

export type IncidentRoute = {
  title: string;
  titleEs: string;
  target: string;
  targetEs: string;
  eta: string;
};

export type Connector = {
  system: string;
  purpose: string;
  purposeEs: string;
  state: "online" | "queued" | "limited";
};

export const healthSummary = [
  {
    label: "Workflow uptime",
    labelEs: "Disponibilidad de flujos",
    value: "99.2%",
    detail: "Last 30 days",
    detailEs: "Ultimos 30 dias",
  },
  {
    label: "Events processed",
    labelEs: "Eventos procesados",
    value: "48.7k",
    detail: "Synthetic demo traffic",
    detailEs: "Trafico demo sintetico",
  },
  {
    label: "Manual reviews",
    labelEs: "Revisiones manuales",
    value: "12",
    detail: "Needs operator action",
    detailEs: "Requiere accion",
  },
];

export const workflows: Workflow[] = [
  {
    name: "Invoice intake",
    nameEs: "Ingreso de facturas",
    owner: "Finance Ops",
    status: "healthy",
    runs: "12,804",
    latency: "1.8s",
    failureRate: "0.4%",
  },
  {
    name: "CRM enrichment",
    nameEs: "Enriquecimiento CRM",
    owner: "Revenue Systems",
    status: "degraded",
    runs: "8,219",
    latency: "6.4s",
    failureRate: "2.7%",
  },
  {
    name: "Employee onboarding",
    nameEs: "Ingreso de empleados",
    owner: "People Tech",
    status: "healthy",
    runs: "1,203",
    latency: "3.2s",
    failureRate: "0.8%",
  },
  {
    name: "Vendor evidence sync",
    nameEs: "Sincronizacion de evidencias",
    owner: "Security Ops",
    status: "paused",
    runs: "417",
    latency: "-",
    failureRate: "-",
  },
];

export const webhookEvents: WebhookEvent[] = [
  {
    source: "Stripe mock",
    sourceEs: "Stripe simulado",
    payload: "invoice.payment_failed",
    received: "34s",
    route: "Billing review",
    risk: "medium",
  },
  {
    source: "CRM sandbox",
    sourceEs: "CRM sandbox",
    payload: "lead.updated",
    received: "2m",
    route: "Enrichment queue",
    risk: "low",
  },
  {
    source: "HR system",
    sourceEs: "Sistema RRHH",
    payload: "employee.created",
    received: "9m",
    route: "Access bootstrap",
    risk: "low",
  },
  {
    source: "Vendor portal",
    sourceEs: "Portal proveedor",
    payload: "evidence.expired",
    received: "21m",
    route: "Security escalation",
    risk: "high",
  },
];

export const incidentRoutes: IncidentRoute[] = [
  {
    title: "Retry exhausted",
    titleEs: "Reintentos agotados",
    target: "Automation owner",
    targetEs: "Responsable del flujo",
    eta: "15m",
  },
  {
    title: "PII keyword detected",
    titleEs: "Palabra PII detectada",
    target: "Security review",
    targetEs: "Revision de seguridad",
    eta: "5m",
  },
  {
    title: "Webhook signature mismatch",
    titleEs: "Firma webhook invalida",
    target: "Integration support",
    targetEs: "Soporte de integracion",
    eta: "8m",
  },
];

export const connectors: Connector[] = [
  {
    system: "n8n",
    purpose: "Workflow orchestration",
    purposeEs: "Orquestacion de flujos",
    state: "online",
  },
  {
    system: "Microsoft Graph",
    purpose: "Directory and mailbox actions",
    purposeEs: "Directorio y correo",
    state: "queued",
  },
  {
    system: "PostgreSQL",
    purpose: "Execution ledger",
    purposeEs: "Registro de ejecuciones",
    state: "online",
  },
  {
    system: "Slack mock",
    purpose: "Escalation notifications",
    purposeEs: "Alertas de escalamiento",
    state: "limited",
  },
];

export const runbookSteps = [
  "Validate webhook signature / Validar firma del webhook",
  "Replay failed payload in sandbox / Reprocesar payload en sandbox",
  "Notify workflow owner / Notificar responsable del flujo",
  "Attach execution evidence / Adjuntar evidencia de ejecucion",
];
