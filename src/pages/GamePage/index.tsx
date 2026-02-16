import { useNavigate } from "react-router";
import { GAME_BASE_URL } from "../../shared";
import Styled from "./Game.styed";

const { Iframe, IframeContainer, CloseButton } = Styled;

export const GamePage = () => {
  const navigate = useNavigate();

  const handleCloseGame = () => {
    navigate(-1);
  };

  return (
    <IframeContainer>
      <CloseButton onClick={handleCloseGame}>✕</CloseButton>

      <Iframe src={GAME_BASE_URL} allowFullScreen loading="lazy" />
    </IframeContainer>
  );
};
