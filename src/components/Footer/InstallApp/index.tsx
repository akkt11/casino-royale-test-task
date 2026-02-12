import { Typography, Button } from "@mui/material";
import { ManWithGlassesIcon, LogoIcon, DownloadIcon } from "../../../assets";
import Styled from "./InstallApp.styled";

const {
  Container,
  InfoContainer,
  DownloadContainer,
  DescriptionContainer,
  IconContainer,
} = Styled;

export const InstallApp = () => {
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
              Download Casino
            </Typography>

            <Typography color="#BABABA">Play Min anywhere, anytime</Typography>
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
            Install App
          </Button>
        </DownloadContainer>
      </InfoContainer>
    </Container>
  );
};
