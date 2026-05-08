import clsx from "clsx";

export function ThemeSwitcherPreview() {
  return (
    <div className={clsx(
      "flex gap-1 rounded-full border border-zinc-300 bg-white/80 p-1 shadow-sm backdrop-blur",
      "dark:border-zinc-700 dark:bg-zinc-900/80"
    )}>
      <button
        aria-label="Light theme preview"
        className={clsx(
          "rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white dark:bg-white",
          "dark:text-black"
        )}
        type="button"
      >
        Light
      </button>
      <button
        aria-label="Dark theme preview"
        className="rounded-full px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200"
        type="button"
      >
        Dark
      </button>
    </div>
  );
}
