import type { CVContent } from "./cv.types";
import { cvRolesPl } from "./cv-roles.pl";

export const cvContentPl: CVContent = {
  name: "Wojciech Zieliński",
  title: "Full Stack Developer",
  contactTitle: "Curriculum Vitae",
  contactDetailsTitle: "Dane kontaktowe",
  summaryTitle: "Podsumowanie",
  contact: [
    {
      label: "E-mail",
      value: "wojtekzielinski96@gmail.com",
      href: "mailto:wojtekzielinski96@gmail.com",
    },
    {
      label: "Telefon",
      value: "+48 783 781 370",
      href: "tel:+48783781370",
    },
    {
      label: "GitHub",
      value: "github.com/wojtek960506",
      href: "https://github.com/wojtek960506",
      external: true,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/wojciech-zieliński",
      href: "https://www.linkedin.com/in/wojciech-zieli%C5%84ski-782297240/",
      external: true,
    },
    {
      label: "Portfolio",
      value: "devonion.com",
      href: "https://devonion.com",
      external: true,
    },
  ],
  cta: "Pobierz",
  backCta: "Wróć",
  summaryParagraphs: [
    "Wszechstronny inżynier oprogramowania z 5-letnim doświadczeniem w rozwoju backendu (Python, Node.js, MongoDB) oraz frontendu (TypeScript, React), pracujący w międzynarodowych i interdyscyplinarnych zespołach.",
    "Doświadczony w projektowaniu i wdrażaniu rozwiązań end-to-end, obejmujących backend, REST API oraz interfejsy frontendowe. Szybko uczę się nowych technologii i biorę odpowiedzialność za złożone funkcje.",
    "W projektach własnych najbardziej lubię tworzyć systemy full stack pomagające ludziom porządkować dane.",
  ],
  experienceTitle: "Doświadczenie zawodowe",
  educationTitle: "Wykształcenie",
  skillsTitle: "Umiejętności",
  interestsTitle: "Zainteresowania",
  roles: cvRolesPl,
  education: {
    title: "Inżynier, Informatyka",
    rows: [
      {
        label: "Uczelnia",
        value: "Politechnika Warszawska",
      },
      {
        label: "Okres",
        value: "2016 - 2020",
      },
    ],
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
};
