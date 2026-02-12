import { Button } from "@mui/material";
import styled from "styled-components";

export default {
  Overlay: styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Iframe: styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
  `,
  IframeContainer: styled.div`
    position: relative;
    height: 80vh;
    width: 80%;
  `,

  CloseButton: styled(Button)`
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    z-index: 999;
  `,
};
