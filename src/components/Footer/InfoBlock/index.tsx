import { IconButton, MenuItem, Select, Typography } from "@mui/material";
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
        <Select
          value={currentLanguage?.id}
          onChange={(e) => hanldeChangeLang(e.target.value as number)}
          sx={{
            background: "var(--white-transparent)",
            minWidth: 289,
            borderRadius: "8px",
            color: "var(--gray)",
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
