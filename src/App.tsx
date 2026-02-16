import "./App.css";
import { Route, Routes } from "react-router";
import { GamePage, HomePage } from "./pages";
import { Layout } from "./components";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
}

export default App;
