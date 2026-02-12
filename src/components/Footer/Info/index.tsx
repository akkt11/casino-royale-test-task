import { MenuItem, Select, Typography } from "@mui/material";
import Styled from "./Info.styled";

import {
  AgeRestrictionIcon,
  CountryFlagIcon,
  EmailIcon,
  InstagramIcon,
  LicenseIcon,
  TelegramIcon,
  XIcon,
} from "../../../assets";
import { Geo } from "../../../shared";
import { useTranslation } from "react-i18next";

const {
  Container,
  ActionContainer,
  SocialContainer,
  IconsContainer,
  CertificateContainer,
  CertificateDescription,
} = Styled;

export const Info = () => {
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

          <Typography color="#FBFBFB70">{t("only")} 18+</Typography>
        </CertificateDescription>

        <CertificateDescription>
          <div>
            <LicenseIcon />
          </div>

          <Typography color="#FBFBFB70">{t("casinoCertified")}</Typography>
        </CertificateDescription>
      </CertificateContainer>

      <ActionContainer>
        <Select
          value={currentLanguage?.id}
          onChange={(e) => hanldeChangeLang(e.target.value as number)}
          sx={{
            background: "#ffffff10",
            minWidth: 289,
            borderRadius: "8px",
            color: "#BABABA",
          }}
        >
          {Geo.map(({ id, country, name }) => {
            return (
              <MenuItem
                key={id}
                value={id}
                sx={{ display: "flex", gap: "8px" }}
              >
                <CountryFlagIcon country={country} />
                <Typography>{name}</Typography>
              </MenuItem>
            );
          })}
        </Select>

        <SocialContainer>
          <Typography color="#BABABA">{t("social")}</Typography>

          <IconsContainer>
            <InstagramIcon />
            <TelegramIcon />
            <XIcon />
            <EmailIcon />
          </IconsContainer>
        </SocialContainer>
      </ActionContainer>
    </Container>
  );
};
