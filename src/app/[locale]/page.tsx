import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import clsx from "clsx";
import { AnchorButton } from "@/components/ui/button";

type HomePageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return (
    <main className="px-6 py-10 sm:px-8 sm:py-12">
      <section className={clsx(
        "mx-auto w-full max-w-3xl rounded-3xl bg-card-bg p-8 shadow-sm sm:p-10"
      )}>
        <div className="flex justify-between mb-5 gap-2">
          <div>
            <h1 className="text-3xl font-semibold text-text">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg text-text-muted">
              {t("description")}
            </p>
          </div>
          <div className={clsx(
            "w-fit flex flex-col items-center gap-4 rounded-3xl border",
            "border-border bg-surface px-6 py-6"
          )}>
            <Image
              alt="DevOnion main logo"
              className="h-auto w-auto object-contain sm:max-w-56"
              height={180}
              width={180}
              fetchPriority="high"
              sizes="(max-width: 180px) 100vw, 180px"
              src="/brand/DEVONION-LOGO.svg"
              
            />
          </div>
        </div>

        <p className="mb-3 text-base font-semibold text-text">
          {t("financePrompt")}
        </p>
        <AnchorButton
          href="https://finance.devonion.com"
          rel="noopener noreferrer"
          target="_blank"
          variant="default"
          className="font-semibold"
        >
          {t("financeCta")}
        </AnchorButton>
        
      </section>
    </main>
  );
}
