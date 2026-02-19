import { IconButton, Typography } from "@mui/material";
import Styled from "./InfoBlock.styled.ts";

import {
  AgeRestrictionIcon,
  CountryFlagIcon,
  EmailIcon,
  InstagramIcon,
  LicenseIcon,
  TelegramIcon,
  XIcon,
} from "../../../assets/index.ts";
import { Geo } from "../../../shared/index.ts";
import { useTranslation } from "react-i18next";

const {
  Container,
  ActionContainer,
  SocialContainer,
  IconsContainer,
  CertificateContainer,
  CertificateDescription,
  LangSelect,
  LangMenuItem,
} = Styled;

export const InfoBlock = () => {
  const { t, i18n } = useTranslation();

  const hanldeChangeLang = (value: number) => {
    const foundGeo = Geo.find(({ id }) => id === value);
    i18n.changeLanguage(foundGeo?.country);
  };

  const currentLanguage = Geo.find(({ country }) => country === i18n.language);

  return (
    <Container>
      <CertificateContainer>
        <CertificateDescription>
          <AgeRestrictionIcon />

          <Typography color="var(--dark-gray)">{t("only")} 18+</Typography>
        </CertificateDescription>

        <CertificateDescription>
          <div>
            <LicenseIcon />
          </div>

          <Typography color="var(--dark-gray)">
            {t("casinoCertified")}
          </Typography>
        </CertificateDescription>
      </CertificateContainer>

      <ActionContainer>
        <LangSelect
          value={currentLanguage?.id}
          onChange={(e) => hanldeChangeLang(e.target.value as number)}
        >
          {Geo.map(({ id, country, name }) => {
            return (
              <LangMenuItem key={id} value={id}>
                <CountryFlagIcon country={country} />
                <Typography>{name}</Typography>
              </LangMenuItem>
            );
          })}
        </LangSelect>

        <SocialContainer>
          <Typography color="var(--gray)">{t("social")}</Typography>

          <IconsContainer>
            <IconButton>
              <InstagramIcon />
            </IconButton>

            <IconButton>
              <TelegramIcon />
            </IconButton>

            <IconButton>
              <XIcon />
            </IconButton>

            <IconButton>
              <EmailIcon />
            </IconButton>
          </IconsContainer>
        </SocialContainer>
      </ActionContainer>
    </Container>
  );
};
