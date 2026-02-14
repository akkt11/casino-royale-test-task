import { CasinoRouletteIcon, LogoIcon } from "../../assets";
import Styled from "./HomePage.styled";
import { useState } from "react";
import { GameModal } from "../../components/GameModal";
import { useTranslation } from "react-i18next";
import { Button } from "../../shared";

const { HomeContainer, HeroContainer, HeroInnerContainer, CasinoContainer } =
  Styled;

export const HomePage = () => {
  const { t } = useTranslation();
  const [openGame, setOpenGame] = useState(false);

  return (
    <HomeContainer>
      <GameModal open={openGame} onClose={() => setOpenGame(false)} />

      <HeroContainer>
        <HeroInnerContainer>
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
        </HeroInnerContainer>
      </HeroContainer>
    </HomeContainer>
  );
};
