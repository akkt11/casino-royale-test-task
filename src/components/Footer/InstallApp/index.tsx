import { Typography, Button } from "@mui/material";
import { ManWithGlassesIcon, LogoIcon, DownloadIcon } from "../../../assets";
import Styled from "./InstallApp.styled";
import { useTranslation } from "react-i18next";

const {
  Container,
  InfoContainer,
  DownloadContainer,
  DescriptionContainer,
  IconContainer,
} = Styled;

export const InstallApp = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <IconContainer>
        <ManWithGlassesIcon />
      </IconContainer>

      <InfoContainer>
        <LogoIcon width={175} height={80} />

        <DownloadContainer>
          <DescriptionContainer>
            <Typography variant="h4" fontSize={32} fontWeight={600}>
              {t("downloadCasino")}
            </Typography>

            <Typography color="#BABABA"> {t("playAnywhere")}</Typography>
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
