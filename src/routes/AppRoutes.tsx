import { Routes, Route } from "react-router";
import { HomePage, GamePage } from "../pages";
import { Layout } from "../components";

export const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
    </Route>

    <Route path="/game" element={<GamePage />} />
  </Routes>
);
