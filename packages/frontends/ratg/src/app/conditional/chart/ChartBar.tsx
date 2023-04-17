import "./ChartBar.css";

interface ChartBarProps {
  label: string;
  maxValue: number;
  value: number;
}

export function ChartBar({ label, maxValue, value }: ChartBarProps) {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = `${Math.round((value / maxValue) * 100)}%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }} />
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}
export default ChartBar;
