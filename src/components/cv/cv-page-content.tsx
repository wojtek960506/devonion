import { AnchorButton, LinkButton } from "@/components/ui/button";

type Locale = "en" | "pl";

type Role = Readonly<{
  title: string;
  organization: string;
  period: string;
  bullets: string[];
}>;

type CVContent = Readonly<{
  badge: string;
  title: string;
  description: string;
  cta: string;
  backCta: string;
  highlights: string[];
  experienceTitle: string;
  timelineTitle: string;
  educationTitle: string;
  skillsTitle: string;
  interestsTitle: string;
  roles: Role[];
  education: {
    title: string;
    institution: string;
    period: string;
    bullets: string[];
  };
  skills: string[];
  interests: string[];
}>;

// TODO: split this into smaller files for content, rendering sections, and locale data.
const cvContent: Record<Locale, CVContent> = {
  en: {
    badge: "Curriculum Vitae",
    title: "Experience snapshot",
    description:
      "A compact overview of my background, the kinds of problems I like solving, and the tools I use most often.",
    cta: "Download CV PDF",
    backCta: "Back to home",
    highlights: [
      "5+ years of full stack experience",
      "Backend + frontend ownership",
      "International product teams",
    ],
    experienceTitle: "Professional experience",
    timelineTitle: "Role timeline",
    educationTitle: "Education",
    skillsTitle: "Skills",
    interestsTitle: "Interests",
    roles: [
      {
        title: "Software Engineer",
        organization: "Personal Project (Finance Tracker)",
        period: "10.2025 – present",
        bullets: [
          "Designing and implementing a personal finance tracking application for learning and private use",
          "Backend: Node.js, Fastify, MongoDB; Frontend: Next.js, React, TypeScript, Tailwind CSS",
          "Developing a Python module to parse and import legacy data",
          "Continuously extending the app to improve data analysis and usability",
        ],
      },
      {
        title: "Career break",
        organization: "Travel & Technical Upskilling",
        period: "12.2024 – 09.2025",
        bullets: [
          "Undertook extended independent travel, managing planning, logistics and budgeting",
          "Studied and practiced JavaScript, TypeScript, React, Node.js and Python",
          "Implemented small applications and code experiments to refresh core concepts and tooling",
        ],
      },
      {
        title: "Senior Software Engineer",
        organization: "MicroStrategy",
        period: "02.2023 – 11.2024",
        bullets: [
          "Served as a lead frontend developer designing and maintaining tools for Python automation scripts",
          "Built complex frontend features with TypeScript and React, integrating internal REST APIs",
          "Collaborated across teams and delivered knowledge-sharing sessions",
          "Produced robust automated tests with Gherkin and Python",
        ],
      },
      {
        title: "Software Engineer",
        organization: "MicroStrategy",
        period: "05.2021 – 01.2023",
        bullets: [
          "Transitioned from backend Python work to frontend development with TypeScript and React",
          "Integrated data from internal REST APIs into frontend components",
          "Developed utilities and UIs for the mstrio-py automation ecosystem",
          "Prepared Python example scripts and improved automated test coverage",
        ],
      },
      {
        title: "Associate Software Engineer",
        organization: "MicroStrategy",
        period: "02.2020 – 04.2021",
        bullets: [
          "Contributed to MicroStrategy’s official Python automation library, mstrio-py",
          "Onboarded new team members by explaining workflows, architecture and tools",
          "Wrote automated tests in a frontend repository",
          "Collaborated with backend and platform teams to improve API reliability",
        ],
      },
      {
        title: "Software Engineer",
        organization: "Innsoft",
        period: "08.2019 – 12.2019",
        bullets: [
          "Developed backend components for the energy sector using Java and relational databases",
          "Collaborated within a small engineering team and strengthened communication skills",
        ],
      },
    ],
    education: {
      title: "Bachelor of Engineering, Computer Science",
      institution: "Warsaw University of Technology",
      period: "2016 – 2020",
      bullets: [
        "Algorithms and Data Structures, Information Systems Engineering, Database Systems",
        "2 semesters at Czech Technical University in Prague via Erasmus+",
        "Thesis: client-server system for saving and analyzing workouts with a mobile client",
      ],
    },
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "MongoDB",
      "Tailwind CSS",
      "Jest",
      "React Testing Library",
      "HTML",
      "CSS",
      "English B2",
    ],
    interests: [
      "Mountain hiking",
      "Climbing",
      "Cycling and bikepacking",
      "Motorcycle riding",
      "Music and playing piano",
      "Football",
      "Formula 1",
      "MotoGP",
      "Learning foreign languages",
    ],
  },
  pl: {
    badge: "Curriculum Vitae",
    title: "Skrót doświadczenia",
    description:
      "Zwięzły przegląd mojego doświadczenia, obszarów, w których najlepiej się odnajduję, oraz narzędzi, z których korzystam najczęściej.",
    cta: "Pobierz CV w PDF",
    backCta: "Wróć do strony głównej",
    highlights: [
      "Ponad 5 lat doświadczenia full-stack",
      "Odpowiedzialność za backend i frontend",
      "Praca w międzynarodowych zespołach",
    ],
    experienceTitle: "Doświadczenie zawodowe",
    timelineTitle: "Oś czasu ról",
    educationTitle: "Wykształcenie",
    skillsTitle: "Umiejętności",
    interestsTitle: "Zainteresowania",
    roles: [
      {
        title: "Software Engineer",
        organization: "Projekt własny (Finance Tracker)",
        period: "10.2025 – obecnie",
        bullets: [
          "Projektowanie i implementacja aplikacji do śledzenia finansów osobistych do nauki i użytku prywatnego",
          "Backend: Node.js, Fastify, MongoDB; Frontend: Next.js, React, TypeScript, Tailwind CSS",
          "Tworzenie modułu w Pythonie do parsowania i importu starszych danych",
          "Stały rozwój aplikacji w celu poprawy analizy danych i wygody użycia",
        ],
      },
      {
        title: "Przerwa zawodowa",
        organization: "Podróże i rozwój techniczny",
        period: "12.2024 – 09.2025",
        bullets: [
          "Dłuższe samodzielne podróże z planowaniem, logistyką i budżetem po mojej stronie",
          "Nauka i praktyka JavaScript, TypeScript, React, Node.js oraz Python",
          "Tworzenie małych aplikacji i eksperymentów, aby odświeżyć podstawy i narzędzia",
        ],
      },
      {
        title: "Senior Software Engineer",
        organization: "MicroStrategy",
        period: "02.2023 – 11.2024",
        bullets: [
          "Rola lead frontend developera odpowiedzialnego za projektowanie i utrzymanie narzędzi do automatyzacji skryptów Python",
          "Budowa złożonych funkcji frontendowych w TypeScript i React z integracją wewnętrznych API REST",
          "Współpraca między zespołami oraz prowadzenie sesji dzielenia się wiedzą",
          "Tworzenie solidnych testów automatycznych z użyciem Gherkin i Python",
        ],
      },
      {
        title: "Software Engineer",
        organization: "MicroStrategy",
        period: "05.2021 – 01.2023",
        bullets: [
          "Przejście z backendowego Pythona do frontend developmentu w TypeScript i React",
          "Integracja danych z wewnętrznych API REST w komponentach frontendowych",
          "Rozwój narzędzi i interfejsów używanych w ekosystemie mstrio-py",
          "Przygotowywanie przykładowych skryptów Python i poprawa pokrycia testami",
        ],
      },
      {
        title: "Associate Software Engineer",
        organization: "MicroStrategy",
        period: "02.2020 – 04.2021",
        bullets: [
          "Wkład w oficjalną bibliotekę automatyzacji Python MicroStrategy, mstrio-py",
          "Onboarding nowych osób poprzez tłumaczenie workflow, architektury i narzędzi",
          "Pisanie testów automatycznych w repozytorium frontendowym",
          "Współpraca z zespołami backend i platform nad niezawodnością API",
        ],
      },
      {
        title: "Software Engineer",
        organization: "Innsoft",
        period: "08.2019 – 12.2019",
        bullets: [
          "Rozwój komponentów backendowych dla sektora energetycznego z użyciem Javy i relacyjnych baz danych",
          "Praca w małym zespole i rozwijanie kompetencji komunikacyjnych",
        ],
      },
    ],
    education: {
      title: "Inżynier, Informatyka",
      institution: "Politechnika Warszawska",
      period: "2016 – 2020",
      bullets: [
        "Algorytmy i struktury danych, inżynieria systemów informacyjnych, bazy danych",
        "2 semestry na Czech Technical University w Pradze w ramach programu Erasmus+",
        "Praca dyplomowa: system klient-serwer do zapisywania i analizowania treningów z aplikacją mobilną",
      ],
    },
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "MongoDB",
      "Tailwind CSS",
      "Jest",
      "React Testing Library",
      "HTML",
      "CSS",
      "Angielski B2",
    ],
    interests: [
      "Wędrówki górskie",
      "Wspinaczka",
      "Rower i bikepacking",
      "Motocykle",
      "Muzyka i pianino",
      "Piłka nożna",
      "Formuła 1",
      "MotoGP",
      "Nauka języków obcych",
    ],
  },
};

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

function SectionTitle({
  eyebrow,
  title,
  description,
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
}>) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
        {eyebrow}
      </p>
      <h2 className="text-xl font-semibold text-text sm:text-2xl">{title}</h2>
      <p className="max-w-2xl text-sm leading-6 text-text-muted sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default function CvPageContent({ locale }: Readonly<{ locale: string }>) {
  const activeLocale: Locale = locale === "pl" ? "pl" : "en";
  const cv = cvContent[activeLocale];

  return (
    <section className="mx-auto w-full max-w-4xl rounded-3xl bg-card-bg p-5 shadow-sm sm:p-7">
      <div className="space-y-6">
        <SectionTitle
          eyebrow={cv.badge}
          title={cv.title}
          description={cv.description}
        />

        <div className="grid gap-3 sm:grid-cols-3">
          {cv.highlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-2xl border border-border bg-bg px-4 py-3 text-sm font-medium text-text"
            >
              {highlight}
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-bg/70 p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                {cv.experienceTitle}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-text sm:text-xl">
                {cv.timelineTitle}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <AnchorButton
                href={`/cv/CV_WojciechZielinski_en.pdf`}
                variant="primary"
                className="w-fit font-semibold text-bg"
                download
              >
                {cv.cta}
              </AnchorButton>
              <LinkButton
                href={`/${locale}`}
                variant="outline"
                className="w-fit font-semibold"
              >
                {cv.backCta}
              </LinkButton>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            {cv.roles.map((role) => (
              <article
                key={`${role.organization}-${role.period}`}
                className="rounded-2xl border border-border bg-card-bg p-4"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-text">
                      {role.title}
                    </p>
                    <p className="text-sm text-text-muted">
                      {role.organization}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-text-muted">
                    {role.period}
                  </p>
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
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-bg/70 p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              {cv.educationTitle}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-text">
              {cv.education.title}
            </h3>
            <p className="mt-1 text-sm text-text-muted">
              {cv.education.institution} | {cv.education.period}
            </p>

            <ul className="mt-4 space-y-2 text-sm leading-6 text-text-muted">
              {cv.education.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fg/70" />
                  <span className="flex-1">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-border bg-bg/70 p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                {cv.skillsTitle}
              </p>
              <div className="mt-4">
                <ChipList items={cv.skills} />
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-bg/70 p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                {cv.interestsTitle}
              </p>
              <div className="mt-4">
                <ChipList items={cv.interests} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
