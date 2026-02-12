import { Button as ButtonMaterial, type ButtonProps } from "@mui/material";
import type { CountryCode } from "../../types";
import { useTranslation } from "react-i18next";

const backgroundColors: Record<CountryCode, { color: string }> = {
  kg: { color: "var(--purpure-gradient)" },
  ru: { color: "var(--violet-gradient)" },
  en: { color: "var(--orange-gradient)" },
  de: { color: "var(--overview-gradient)" },
  tr: { color: "var(--red-gradient)" },
};

export const Button = ({ children, ...rest }: ButtonProps) => {
  const { i18n } = useTranslation();

  return (
    <ButtonMaterial
      {...rest}
      sx={{ background: backgroundColors[i18n.language as CountryCode].color }}
    >
      {children}
    </ButtonMaterial>
  );
};
