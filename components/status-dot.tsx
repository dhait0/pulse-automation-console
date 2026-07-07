import type { FlowStatus } from "@/lib/automation-data";

type StatusDotProps = {
  status: FlowStatus | "online" | "queued" | "limited" | "low" | "medium" | "high";
};

const toneByStatus: Record<StatusDotProps["status"], string> = {
  healthy: "var(--good)",
  degraded: "var(--warn)",
  paused: "var(--muted)",
  online: "var(--good)",
  queued: "var(--info)",
  limited: "var(--warn)",
  low: "var(--good)",
  medium: "var(--warn)",
  high: "var(--danger)",
};

export function StatusDot({ status }: StatusDotProps) {
  return (
    <span className="status-dot" style={{ background: toneByStatus[status] }} aria-label={status} />
  );
}
