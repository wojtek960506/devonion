import Link from "next/link";

import { AnchorButton, LinkButton } from "@/components/ui/button";

import type { CVContent, Locale } from "./cv.types";

type CvHeaderProps = Readonly<{
  cv: CVContent;
  locale: Locale;
}>;

export function CvHeader({ cv, locale }: CvHeaderProps) {
  return (
    <div className="rounded-3xl border border-border bg-bg/70 p-4 sm:p-5">
      <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
        <div className="order-2 space-y-2 sm:order-none">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
            {cv.contactTitle}
          </p>
          <h1 className="text-3xl font-semibold text-text sm:text-4xl">
            {cv.name}
          </h1>
          <p className="text-base text-text-muted sm:text-lg">{cv.title}</p>
        </div>

        <div className="order-1 flex flex-col items-stretch gap-2 sm:order-none sm:self-start sm:justify-self-end">
          <AnchorButton
            href="/cv/CV_WojciechZielinski_en.pdf"
            variant="primary"
            className="w-full font-semibold text-bg sm:w-auto"
            download
          >
            {cv.cta}
          </AnchorButton>
          <LinkButton
            href={`/${locale}`}
            variant="outline"
            className="w-full font-semibold sm:w-auto"
          >
            {cv.backCta}
          </LinkButton>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {cv.contact.map((item) =>
          item.external ? (
            <a
              key={item.label}
              href={item.href}
              className="rounded-2xl border border-border bg-card-bg px-4 py-3 transition-colors hover:bg-bg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                {item.label}
              </p>
              <p className="mt-1 break-words text-sm font-medium text-text">
                {item.value}
              </p>
            </a>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-2xl border border-border bg-card-bg px-4 py-3 transition-colors hover:bg-bg"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                {item.label}
              </p>
              <p className="mt-1 break-words text-sm font-medium text-text">
                {item.value}
              </p>
            </Link>
          ),
        )}
      </div>
    </div>
  );
}
