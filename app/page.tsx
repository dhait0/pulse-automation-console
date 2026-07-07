import { ConnectorList } from "@/components/connector-list";
import { SummaryCell } from "@/components/summary-cell";
import { WebhookCard } from "@/components/webhook-card";
import { WorkflowRow } from "@/components/workflow-row";
import {
  connectors,
  healthSummary,
  incidentRoutes,
  runbookSteps,
  webhookEvents,
  workflows,
} from "@/lib/automation-data";

export default function Home() {
  return (
    <main className="console">
      <aside className="rail" aria-label="Automation navigation">
        <div className="mark">P</div>
        <nav>
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
        </nav>
      </aside>

      <section className="workspace">
        <header className="topline">
          <div>
            <span>Pulse Automation Console</span>
            <strong>Operations cockpit / Cabina de operaciones</strong>
          </div>
          <p>Demo data only / Solo datos demo</p>
        </header>

        <section className="hero-band">
          <div>
            <p className="eyebrow">Automation health / Salud de automatizaciones</p>
            <h1>Workflow control room</h1>
            <p>
              English: Monitor webhook queues, retries, and escalation routes without exposing
              internal systems.
            </p>
            <p>
              Español: Monitorea colas, reintentos y rutas de escalamiento sin exponer sistemas
              internos.
            </p>
          </div>
          <div className="pulse-card">
            <span>Live window / Ventana activa</span>
            <strong>14:00-18:00</strong>
            <small>642 executions tracked / ejecuciones monitoreadas</small>
          </div>
        </section>

        <section className="summary-grid" aria-label="Automation summary">
          {healthSummary.map((item) => (
            <SummaryCell key={item.label} {...item} />
          ))}
        </section>

        <section className="main-grid">
          <div className="workflows-panel">
            <div className="panel-heading">
              <p>Workflow lanes / Carriles de flujo</p>
              <strong>Production-like routes</strong>
            </div>
            <div className="workflow-list">
              {workflows.map((workflow) => (
                <WorkflowRow key={workflow.name} workflow={workflow} />
              ))}
            </div>
          </div>

          <div className="webhooks-panel">
            <div className="panel-heading">
              <p>Webhook queue / Cola webhook</p>
              <strong>Incoming events</strong>
            </div>
            <div className="webhook-grid">
              {webhookEvents.map((event) => (
                <WebhookCard key={`${event.source}-${event.payload}`} event={event} />
              ))}
            </div>
          </div>

          <div className="incident-panel">
            <div className="panel-heading">
              <p>Escalation routes / Rutas de escalamiento</p>
              <strong>Operator handoff</strong>
            </div>
            <div className="incident-list">
              {incidentRoutes.map((route) => (
                <article key={route.title}>
                  <strong>
                    {route.title} / {route.titleEs}
                  </strong>
                  <span>
                    {route.target} / {route.targetEs}
                  </span>
                  <small>{route.eta}</small>
                </article>
              ))}
            </div>
          </div>

          <div className="runbook-panel">
            <div className="panel-heading">
              <p>Runbook / Procedimiento</p>
              <strong>Failure response</strong>
            </div>
            <ol>
              {runbookSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="connectors-panel">
            <div className="panel-heading">
              <p>Connectors / Conectores</p>
              <strong>Integration surface</strong>
            </div>
            <ConnectorList connectors={connectors} />
          </div>
        </section>
      </section>
    </main>
  );
}
