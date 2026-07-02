import { useEffect, useRef, useState } from "react";

export function useCopiedContact() {
  const [copiedContact, setCopiedContact] = useState<string | null>(null);
  const copyResetTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyResetTimerRef.current !== null) {
        window.clearTimeout(copyResetTimerRef.current);
      }
    };
  }, []);

  const handleCopy = async (copyText: string) => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopiedContact(copyText);

      if (copyResetTimerRef.current !== null) {
        window.clearTimeout(copyResetTimerRef.current);
      }

      copyResetTimerRef.current = window.setTimeout(() => {
        setCopiedContact(null);
        copyResetTimerRef.current = null;
      }, 1500);
    } catch {
      setCopiedContact(null);
    }
  };

  return { copiedContact, handleCopy };
}
