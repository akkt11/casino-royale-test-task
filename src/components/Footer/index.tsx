import { InstallAppBlock } from "./InstallAppBlock";
import Styled from "./Footer.styled";
import { InfoBlock } from "./InfoBlock";

const { Container } = Styled;

export const Footer = () => {
  return (
    <Container>
      <InstallAppBlock />
      <InfoBlock />
    </Container>
  );
};
