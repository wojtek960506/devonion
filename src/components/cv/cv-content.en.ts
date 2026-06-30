import type { CVContent } from "./cv.types";
import { cvRolesEn } from "./cv-roles.en";

export const cvContentEn: CVContent = {
  name: "Wojciech Zieliński",
  title: "Full Stack Developer",
  contactTitle: "Curriculum Vitae",
  contact: [
    {
      label: "Email",
      value: "wojtekzielinski96@gmail.com",
      href: "mailto:wojtekzielinski96@gmail.com",
    },
    {
      label: "Phone",
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
  cta: "Download",
  backCta: "Back",
  highlights: [
    "5+ years of experience as software developer",
    "Backend + frontend ownership",
    "International product teams",
  ],
  experienceTitle: "Professional experience",
  educationTitle: "Education",
  skillsTitle: "Skills",
  interestsTitle: "Interests",
  roles: cvRolesEn,
  education: {
    title: "Bachelor of Engineering, Computer Science",
    rows: [
      {
        label: "Institution",
        value: "Warsaw University of Technology",
      },
      {
        label: "Period",
        value: "2016 - 2020",
      },
    ],
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
};
