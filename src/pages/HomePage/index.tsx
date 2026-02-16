import { CasinoRouletteIcon, LogoIcon } from "../../assets";
import Styled from "./Home.styled";
import { useTranslation } from "react-i18next";
import { Button } from "../../shared";
import { useNavigate } from "react-router";

const { HomeContainer, HeroContainer, CasinoContainer } = Styled;

export const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleOpenGame = () => {
    navigate("/game");
  };

  return (
    <HomeContainer>
      <HeroContainer>
        <LogoIcon />

        <CasinoContainer>
          <CasinoRouletteIcon />

          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleOpenGame}
          >
            {t("openGame")}
          </Button>
        </CasinoContainer>
      </HeroContainer>
    </HomeContainer>
  );
};
