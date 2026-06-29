import { setRequestLocale } from "next-intl/server";

import CvPageContent from "@/components/cv/cv-page-content";

type CvPageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export default async function CvPage({ params }: CvPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main className="p-5 sm:p-7">
      <CvPageContent locale={locale} />
    </main>
  );
}
