import { Footer } from "./components/Footer";
import Styled from "./App.styled";
import { Home } from "./pages/Home";

const { Container, Main } = Styled;

function App() {
  return (
    <Container>
      <Main>
        <Home />
      </Main>

      <Footer />
    </Container>
  );
}

export default App;
