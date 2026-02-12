import Styled from "./GameModal.styled";

const GAME_URL =
  "https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en";

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

        <Iframe src={GAME_URL} allowFullScreen loading="lazy" />
      </IframeContainer>
    </Overlay>
  );
};
