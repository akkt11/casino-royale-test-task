import { Button as ButtonMaterial, type ButtonProps } from "@mui/material";
import { useTranslation } from "react-i18next";
import { BUTTON_COLOR_CONFIGS } from "../../../configs";

export const Button = ({ children, sx, ...rest }: ButtonProps) => {
  const { i18n } = useTranslation();

  return (
    <ButtonMaterial
      {...rest}
      sx={{
        ...sx,
        background: BUTTON_COLOR_CONFIGS[i18n.language].color,
      }}
    >
      {children}
    </ButtonMaterial>
  );
};
