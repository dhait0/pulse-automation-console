import type { Workflow } from "@/lib/automation-data";
import { StatusDot } from "@/components/status-dot";

type WorkflowRowProps = {
  workflow: Workflow;
};

export function WorkflowRow({ workflow }: WorkflowRowProps) {
  return (
    <article className="workflow-row">
      <div>
        <div className="row-title">
          <StatusDot status={workflow.status} />
          <strong>{workflow.name}</strong>
        </div>
        <span>{workflow.nameEs}</span>
      </div>
      <div>
        <small>Owner</small>
        <span>{workflow.owner}</span>
      </div>
      <div>
        <small>Runs</small>
        <span>{workflow.runs}</span>
      </div>
      <div>
        <small>Latency</small>
        <span>{workflow.latency}</span>
      </div>
      <div>
        <small>Failure</small>
        <span>{workflow.failureRate}</span>
      </div>
    </article>
  );
}
