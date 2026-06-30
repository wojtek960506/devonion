import { cvContent } from "./cv-content";
import { CvEducation } from "./cv-education";
import { CvExperience } from "./cv-experience";
import { CvHeader } from "./cv-header";
import { CvSummary } from "./cv-summary";
import { CvSkillsInterests } from "./cv-skills-interests";
import type { Locale } from "./cv.types";

type CvPageContentProps = Readonly<{
  locale: string;
}>;

export default function CvPageContent({ locale }: CvPageContentProps) {
  const activeLocale: Locale = locale === "pl" ? "pl" : "en";
  const cv = cvContent[activeLocale];

  return (
    <section className="mx-auto w-full max-w-4xl rounded-3xl bg-card-bg p-5 shadow-sm sm:p-7">
      <div className="space-y-6">
        <CvHeader cv={cv} locale={activeLocale} />
        <CvSummary title={cv.summaryTitle} summaryPoints={cv.summaryPoints} />
        <CvExperience title={cv.experienceTitle} roles={cv.roles} />
        <div className="space-y-4">
          <CvEducation title={cv.educationTitle} education={cv.education} />
          <CvSkillsInterests
            skillsTitle={cv.skillsTitle}
            interestsTitle={cv.interestsTitle}
            skills={cv.skills}
            interests={cv.interests}
          />
        </div>
      </div>
    </section>
  );
}
