import { CvCollapsibleCard } from "./cv-collapsible-card";

type CvChipsProps = Readonly<{
  title: string;
  items: string[];
  defaultOpen?: boolean;
}>;

function ChipList({ items }: Readonly<{ items: string[] }>) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border bg-bg px-3 py-1 text-sm text-text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CvChips({ title, items, defaultOpen = true }: CvChipsProps) {
  return (
    <CvCollapsibleCard title={title} defaultOpen={defaultOpen}>
      <ChipList items={items} />
    </CvCollapsibleCard>
  );
}
