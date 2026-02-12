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

const {
  Container,
  ActionContainer,
  SocialContainer,
  IconsContainer,
  CertificateContainer,
  CertificateDescription,
} = Styled;

export const Info = () => {
  return (
    <Container>
      <CertificateContainer>
        <CertificateDescription>
          <AgeRestrictionIcon />

          <Typography color="#FBFBFB70">Only 18+</Typography>
        </CertificateDescription>

        <CertificateDescription>
          <div>
            <LicenseIcon />
          </div>

          <Typography color="#FBFBFB70">
            Casino is certified by the Anjouan Gaming Authority
          </Typography>
        </CertificateDescription>
      </CertificateContainer>

      <ActionContainer>
        <Select
          labelId="select-label"
          id="select"
          // value={age}
          // onChange={handleChange}
          sx={{
            background: "#ffffff10",
            minWidth: 289,
            borderRadius: "8px",
            color: "#BABABA",
          }}
        >
          <MenuItem value={10} sx={{ display: "flex", gap: "8px" }}>
            <CountryFlagIcon country="tk" />
            <Typography>Turkish</Typography>
          </MenuItem>
        </Select>

        <SocialContainer>
          <Typography color="#BABABA">Us on social media:</Typography>

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
