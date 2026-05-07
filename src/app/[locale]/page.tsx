import { getTranslations, setRequestLocale } from "next-intl/server";
import { LocaleSwitcher } from "@/components/locale-switcher";

type HomePageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "HomePage" });

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 dark:bg-black">
      <section className="w-full max-w-2xl rounded-3xl bg-white p-10 shadow-sm dark:bg-zinc-900">
        <LocaleSwitcher />
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
            className="flex w-full items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-xl font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
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
