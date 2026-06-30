import type { CVContent } from "./cv.types";

type CvExperienceProps = Readonly<{
  title: CVContent["experienceTitle"];
  roles: CVContent["roles"];
}>;

export function CvExperience({ title, roles }: CvExperienceProps) {
  return (
    <section className="rounded-3xl border border-border bg-bg/70 p-4 sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
        {title}
      </p>

      <div className="mt-5 space-y-4">
        {roles.map((role) => (
          <article
            key={`${role.organization}-${role.period}`}
            className="rounded-2xl border border-border bg-card-bg p-4"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-text">{role.title}</p>
                <p className="text-sm text-text-muted">{role.organization}</p>
              </div>
              <p className="text-sm font-medium text-text-muted">{role.period}</p>
            </div>

            <ul className="mt-4 space-y-2 text-sm leading-6 text-text-muted">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fg/70" />
                  <span className="flex-1">{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
