import type { CVContent } from "./cv.types";

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
      <section className="rounded-3xl border border-border bg-bg/70 p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
          {skillsTitle}
        </p>
        <div className="mt-4">
          <ChipList items={skills} />
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-bg/70 p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
          {interestsTitle}
        </p>
        <div className="mt-4">
          <ChipList items={interests} />
        </div>
      </section>
    </div>
  );
}
