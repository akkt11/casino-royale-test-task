import { Typography, Button } from "@mui/material";
import {
  ManWithGlassesIcon,
  LogoIcon,
  DownloadIcon,
  AgeRestrictionIcon,
  LicenseIcon,
} from "../../../assets";
import Styled from "./info.styled";

const {
  Container,
  InfoContainer,
  DownloadContainer,
  DescriptionContainer,
  CertificateContainer,
  CertificateDescription,
} = Styled;

export const Info = () => {
  return (
    <Container>
      <ManWithGlassesIcon />

      <InfoContainer>
        <LogoIcon width={175} height={80} />

        <DownloadContainer>
          <DescriptionContainer>
            <Typography variant="h4" fontSize={32} fontWeight={600}>
              Download Casino
            </Typography>

            <Typography color="#BABABA">Play Min anywhere, anytime</Typography>
          </DescriptionContainer>

          <Button
            size="large"
            variant="contained"
            startIcon={<DownloadIcon />}
            sx={{
              "& .MuiButton-startIcon": { marginRight: "16px" },
              textTransform: "capitalize",
            }}
          >
            Install App
          </Button>
        </DownloadContainer>
      </InfoContainer>

      <CertificateContainer>
        <CertificateDescription>
          <AgeRestrictionIcon />
          <Typography color="#FBFBFB70">Only 18+</Typography>
        </CertificateDescription>

        <CertificateDescription>
          <LicenseIcon />
          <Typography color="#FBFBFB70">
            Casino is certified by the Anjouan Gaming Authority
          </Typography>
        </CertificateDescription>
      </CertificateContainer>
    </Container>
  );
};
