import { cvContentEn } from "./cv-content.en";
import { cvContentPl } from "./cv-content.pl";
import type { CVContent, Locale } from "./cv.types";

export const cvContent: Record<Locale, CVContent> = {
  en: cvContentEn,
  pl: cvContentPl,
};
