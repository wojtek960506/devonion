import type { CVContent } from "./cv.types";
import { CvCollapsibleCard } from "./cv-collapsible-card";

type CvSkillsInterestsProps = Readonly<{
  skillsTitle: CVContent["skillsTitle"];
  interestsTitle: CVContent["interestsTitle"];
  skills: CVContent["skills"];
  interests: CVContent["interests"];
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

export function CvSkillsInterests({
  skillsTitle,
  interestsTitle,
  skills,
  interests,
}: CvSkillsInterestsProps) {
  return (
    <div className="space-y-4">
      <CvCollapsibleCard title={skillsTitle} defaultOpen>
        <div className="mt-3">
          <ChipList items={skills} />
        </div>
      </CvCollapsibleCard>

      <CvCollapsibleCard title={interestsTitle} defaultOpen>
        <div className="mt-3">
          <ChipList items={interests} />
        </div>
      </CvCollapsibleCard>
    </div>
  );
}
