type SummaryCellProps = {
  label: string;
  labelEs: string;
  value: string;
  detail: string;
  detailEs: string;
};

export function SummaryCell({ label, labelEs, value, detail, detailEs }: SummaryCellProps) {
  return (
    <article className="summary-cell">
      <p>
        {label} / {labelEs}
      </p>
      <strong>{value}</strong>
      <span>
        {detail} / {detailEs}
      </span>
    </article>
  );
}
