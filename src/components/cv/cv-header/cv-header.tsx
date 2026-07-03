"use client";

import { AnchorButton, LinkButton } from "@/components/ui/button";

import type { CVContent, Locale } from "../cv.types";
import { CvCollapsibleCard } from "../cv-collapsible-card";
import { CvSectionTitle } from "../cv-section-title";
import { ContactCopyCard, ContactLinkCard } from "./contact-card";
import { useCopiedContact } from "./use-copied-contact";
import clsx from "clsx";

type CvHeaderProps = Readonly<{
  cv: CVContent;
  locale: Locale;
}>;

export function CvHeader({ cv, locale }: CvHeaderProps) {
  const { copiedContact, handleCopy } = useCopiedContact();

  return (
    <div className="rounded-3xl border border-border bg-bg/70 p-4 sm:p-5">
      <div className="mb-5 grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
        <div className="order-2 space-y-2 sm:order-none">
          <CvSectionTitle title={cv.contactTitle} as="h2" />
          <h1 className="text-3xl font-semibold text-text sm:text-4xl">
            {cv.name}
          </h1>
          <p className="text-base text-text-muted sm:text-lg">{cv.title}</p>
        </div>

        <div
          className={clsx(
            "order-1 flex flex-col items-stretch gap-2 sm:order-none sm:self-start",
            "sm:justify-self-end",
          )}
        >
          <AnchorButton
            href={`/cv/${cv.cvFileName}`}
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

      <CvCollapsibleCard title={cv.contactDetailsTitle}>
        <div className="grid gap-3 sm:grid-cols-2">
          {cv.contact.map((item) =>
            item.kind === "copy" ? (
              <ContactCopyCard
                key={item.label}
                label={item.label}
                value={item.value}
                copyText={item.copyText}
                isCopied={copiedContact === item.copyText}
                onCopy={handleCopy}
              />
            ) : (
              <ContactLinkCard
                key={item.label}
                label={item.label}
                value={item.value}
                href={item.href}
                external={item.external}
              />
            ),
          )}
        </div>
      </CvCollapsibleCard>
    </div>
  );
}
