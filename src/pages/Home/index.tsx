import { Button } from "@mui/material";
import { CasinoRouletteIcon, LogoIcon } from "../../assets";
import Styled from "./Home.styled";
import { useState } from "react";
import { GameModal } from "../../components/GameModal";

const { Container, CasinoContainer } = Styled;

export const Home = () => {
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
            Open the game
          </Button>
        </CasinoContainer>
      </Container>
    </>
  );
};
