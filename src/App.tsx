import { Footer } from "./components/Footer";
import Styled from "./App.styled";
import { Home } from "./pages/Home";
import "./App.css";

const { Main } = Styled;

function App() {
  return (
    <>
      <Main>
        <Home />
      </Main>

      <Footer />
    </>
  );
}

export default App;
