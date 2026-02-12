import { InstallApp } from "./InstallApp";
import Styled from "./Footer.styled";
import { Info } from "./Info";

const { Container } = Styled;

export const Footer = () => {
  return (
    <Container>
      <InstallApp />
      <Info />
    </Container>
  );
};
