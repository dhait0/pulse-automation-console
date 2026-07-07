import type { Connector } from "@/lib/automation-data";
import { StatusDot } from "@/components/status-dot";

type ConnectorListProps = {
  connectors: Connector[];
};

export function ConnectorList({ connectors }: ConnectorListProps) {
  return (
    <div className="connector-list">
      {connectors.map((connector) => (
        <article key={connector.system}>
          <div className="row-title">
            <StatusDot status={connector.state} />
            <strong>{connector.system}</strong>
          </div>
          <p>
            {connector.purpose} / {connector.purposeEs}
          </p>
        </article>
      ))}
    </div>
  );
}
