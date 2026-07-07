import type { WebhookEvent } from "@/lib/automation-data";
import { StatusDot } from "@/components/status-dot";

type WebhookCardProps = {
  event: WebhookEvent;
};

export function WebhookCard({ event }: WebhookCardProps) {
  return (
    <article className="webhook-card">
      <div className="row-title">
        <StatusDot status={event.risk} />
        <strong>{event.payload}</strong>
      </div>
      <p>
        {event.source} / {event.sourceEs}
      </p>
      <footer>
        <span>{event.route}</span>
        <span>{event.received}</span>
      </footer>
    </article>
  );
}
