import styled from "styled-components";

export default {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `,

  Main: styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(/background.png) no-repeat center / cover;
    flex: 1;
  `,
};
