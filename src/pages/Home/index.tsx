import { Button } from "@mui/material";
import styled from "styled-components";
import { CasinoRouletteIcon, LogoIcon } from "../../assets";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 48px;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  min-width: 358px;
`;

export const Home = () => {
  return (
    <Container>
      <LogoIcon />

      <Column>
        <CasinoRouletteIcon />

        <Button variant="contained" size="large" fullWidth>
          Open the game
        </Button>
      </Column>
    </Container>
  );
};
