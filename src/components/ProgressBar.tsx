"use client";

interface ProgressBarProps {
  progress: number; // 0 - 100
  label?: string;
  subLabel?: string;
  height?: string;
}

export default function ProgressBar({
  progress,
  label,
  subLabel,
  height = "h-2.5",
}: ProgressBarProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="w-full">
      {(label || subLabel) && (
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1.5">
          {label && <span>{label}</span>}
          {subLabel && <span className="font-mono text-indigo-600">{subLabel}</span>}
        </div>
      )}
      <div className={`w-full bg-slate-200/80 rounded-full overflow-hidden ${height}`}>
        <div
          className="bg-indigo-600 h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  );
}

