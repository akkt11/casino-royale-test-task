import styled from "styled-components";

export default {
  Iframe: styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
  `,

  IframeContainer: styled.div`
    height: 100vh;
    overflow: hidden;
    background: var(--black);
  `,

  CloseButton: styled.button`
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    background: yellow;
    padding: 5px 10px;
    font-size: 20px;
    z-index: 999;
  `,
};
