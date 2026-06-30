export type Locale = "en" | "pl";

export type Role = Readonly<{
  title: string;
  organization: string;
  period: string;
  bullets: string[];
}>;

export type ContactItem = Readonly<{
  label: string;
  value: string;
  href: string;
  external?: boolean;
}>;

export type EducationRow = Readonly<{
  label: string;
  value: string;
}>;

export type Education = Readonly<{
  title: string;
  rows: EducationRow[];
  bullets: string[];
}>;

export type CVContent = Readonly<{
  name: string;
  title: string;
  contactTitle: string;
  contactDetailsTitle: string;
  summaryTitle: string;
  contact: ContactItem[];
  cta: string;
  backCta: string;
  summaryPoints: string[];
  experienceTitle: string;
  educationTitle: string;
  skillsTitle: string;
  interestsTitle: string;
  roles: Role[];
  education: Education;
  skills: string[];
  interests: string[];
}>;
