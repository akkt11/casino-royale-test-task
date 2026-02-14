import { Footer } from "./components/Footer";
import Styled from "./App.styled";
import { HomePage } from "./pages/HomePage";
import "./App.css";

const { Main } = Styled;

function App() {
  return (
    <>
      <Main>
        <HomePage />
      </Main>

      <Footer />
    </>
  );
}

export default App;
