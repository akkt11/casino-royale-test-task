import { Outlet } from "react-router";
import { Footer } from "../Footer";
import Styled from "./Layout.styled";

const { Main } = Styled;

export const Layout = () => {
  return (
    <>
      <Main>
        <Outlet />
      </Main>

      <Footer />
    </>
  );
};
