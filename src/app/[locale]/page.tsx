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
    <main className="min-w-[360px] px-6 py-10 sm:px-8 sm:py-12">
      <section className={clsx(
        "mx-auto w-full max-w-3xl rounded-3xl bg-card-bg p-8 shadow-sm sm:p-10"
      )}>
        <div className="mb-5 flow-root">
          <div className={clsx(
            "float-right mb-2  ml-4 w-fit rounded-3xl border border-border",
            "bg-surface px-2 py-2"
          )}>
            <Image
              alt="DevOnion main logo"
              className="h-auto w-auto max-w-28 object-contain sm:max-w-56"
              fetchPriority="high"
              height={180}
              sizes="(max-width: 180px) 100vw, 180px"
              src="/brand/DEVONION-LOGO.svg"
              width={180}
            />
          </div>

          <h1 className="text-[1.75rem] font-semibold text-text sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-base leading-6 text-text-muted [text-align:justify] sm:text-lg sm:leading-7">
            {t("description")}
          </p>
        </div>

        <p className="mt-10 mb-4 text-lg font-semibold text-text sm:text-xl">
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
