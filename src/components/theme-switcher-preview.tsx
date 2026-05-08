import clsx from "clsx";

export function ThemeSwitcherPreview() {
  return (
    <div className={clsx(
      "flex gap-1 rounded-full border border-border bg-card-bg p-1 shadow-sm backdrop-blur"
    )}>
      <button
        aria-label="Light theme preview"
        className={clsx(
          "rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg"
        )}
        type="button"
      >
        Light
      </button>
      <button
        aria-label="Dark theme preview"
        className="rounded-full px-4 py-2 text-sm font-medium text-text-muted"
        type="button"
      >
        Dark
      </button>
    </div>
  );
}
