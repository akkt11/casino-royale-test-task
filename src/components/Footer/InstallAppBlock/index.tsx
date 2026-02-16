import { Typography } from "@mui/material";
import { FooterElementIcon, LogoIcon, DownloadIcon } from "../../../assets";
import Styled from "./InstallAppBlock.styled";
import { useTranslation } from "react-i18next";
import { Button } from "../../../shared";

const {
  Container,
  InfoContainer,
  DownloadContainer,
  DescriptionContainer,
  IconContainer,
} = Styled;

export const InstallAppBlock = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <IconContainer>
        <FooterElementIcon country={i18n.language} />
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
              textTransform: "capitalize",
              "& .MuiButton-startIcon": { marginRight: "16px" },
            }}
          >
            {t("installApp")}
          </Button>
        </DownloadContainer>
      </InfoContainer>
    </Container>
  );
};
