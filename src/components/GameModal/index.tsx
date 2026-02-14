import { GAME_BASE_URL } from "../../shared";
import Styled from "./GameModal.styled";

interface GameModalProps {
  open: boolean;
  onClose: () => void;
}

const { Overlay, Iframe, IframeContainer, CloseButton } = Styled;

export const GameModal = ({ open, onClose }: GameModalProps) => {
  if (!open) return null;

  return (
    <Overlay>
      <IframeContainer>
        <CloseButton variant="contained" onClick={onClose}>
          ✕
        </CloseButton>

        <Iframe src={GAME_BASE_URL} allowFullScreen loading="lazy" />
      </IframeContainer>
    </Overlay>
  );
};
