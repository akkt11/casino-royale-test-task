import { Typography } from "@mui/material";
import { ManWithGlassesIcon, LogoIcon, DownloadIcon } from "../../../assets";
import Styled from "./InstallApp.styled";
import { useTranslation } from "react-i18next";
import { Button, type CountryCode } from "../../../shared";

const {
  Container,
  InfoContainer,
  DownloadContainer,
  DescriptionContainer,
  IconContainer,
} = Styled;

export const InstallApp = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <IconContainer>
        <ManWithGlassesIcon country={i18n.language as CountryCode} />
      </IconContainer>

      <InfoContainer>
        <LogoIcon width={175} height={80} />

        <DownloadContainer>
          <DescriptionContainer>
            <Typography variant="h4" fontSize={32} fontWeight={600}>
              {t("downloadCasino")}
            </Typography>

            <Typography color="var(--gray)"> {t("playAnywhere")}</Typography>
          </DescriptionContainer>

          <Button
            size="large"
            variant="contained"
            startIcon={<DownloadIcon />}
            fullWidth
            sx={{
              "& .MuiButton-startIcon": { marginRight: "16px" },
              textTransform: "capitalize",
            }}
          >
            {t("installApp")}
          </Button>
        </DownloadContainer>
      </InfoContainer>
    </Container>
  );
};
