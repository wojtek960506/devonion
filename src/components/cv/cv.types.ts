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

export type Education = Readonly<{
  title: string;
  institution: string;
  period: string;
  bullets: string[];
}>;

export type CVContent = Readonly<{
  name: string;
  title: string;
  contactTitle: string;
  contact: ContactItem[];
  cta: string;
  backCta: string;
  highlights: string[];
  experienceTitle: string;
  educationTitle: string;
  skillsTitle: string;
  interestsTitle: string;
  roles: Role[];
  education: Education;
  skills: string[];
  interests: string[];
}>;
