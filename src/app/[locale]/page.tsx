import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import clsx from "clsx";

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
        "mx-auto w-full max-w-3xl rounded-3xl bg-white p-8 shadow-sm dark:bg-zinc-900 sm:p-10"
      )}>
        <div className={clsx(
          "mb-10 flex flex-col items-center gap-8 rounded-3xl border border-zinc-200 bg-zinc-50",
          "px-6 py-10 dark:border-zinc-800 dark:bg-black/20 sm:px-10 sm:py-14"
        )}>
          <Image
            alt="DevOnion main logo"
            className="h-auto w-full max-w-md object-contain sm:max-w-lg"
            height={640}
            priority
            src="/brand/DEVONION-LOGO.svg"
            width={640}
          />
          <Image
            alt="DevOnion wordmark"
            className="h-auto w-full max-w-2xl object-contain"
            height={180}
            priority
            src="/brand/DEVONION-TEXT.svg"
            width={960}
          />
        </div>
        <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
          {t("description")}
        </p>
        <div className="mt-8">
          <p className="mb-3 text-base font-semibold text-zinc-800 dark:text-zinc-100">
            {t("financePrompt")}
          </p>
          <a
            className={clsx(
              "flex w-full items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-xl",
              "font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white",
              "dark:text-black dark:hover:bg-zinc-200"
            )}
            href="https://finance.devonion.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t("financeCta")}
          </a>
        </div>
      </section>
    </main>
  );
}
