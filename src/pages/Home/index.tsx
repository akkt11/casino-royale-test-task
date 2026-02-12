import { CasinoRouletteIcon, LogoIcon } from "../../assets";
import Styled from "./Home.styled";
import { useState } from "react";
import { GameModal } from "../../components/GameModal";
import { useTranslation } from "react-i18next";
import { Button } from "../../shared";

const { Container, CasinoContainer } = Styled;

export const Home = () => {
  const { t } = useTranslation();
  const [openGame, setOpenGame] = useState(false);

  return (
    <>
      <GameModal open={openGame} onClose={() => setOpenGame(false)} />

      <Container>
        <LogoIcon />

        <CasinoContainer>
          <CasinoRouletteIcon />

          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={() => setOpenGame(true)}
          >
            {t("openGame")}
          </Button>
        </CasinoContainer>
      </Container>
    </>
  );
};
