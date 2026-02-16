import type { CountryCode } from "../shared/types";

export const BUTTON_COLOR_CONFIGS: Record<CountryCode, { color: string }> = {
  kg: { color: "var(--purpure-gradient)" },
  ru: { color: "var(--violet-gradient)" },
  en: { color: "var(--orange-gradient)" },
  de: { color: "var(--overview-gradient)" },
  tr: { color: "var(--red-gradient)" },
};
