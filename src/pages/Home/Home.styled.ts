import styled from "styled-components";

export default {
  HomeContainer: styled.section`
    flex: 1;
    background: url(/background.png) no-repeat center / cover;
  `,

  HeroContainer: styled.div`
    max-width: 358px;
    text-align: center;
    margin: 0 auto;
  `,

  HeroInnerContainer: styled.div`
    padding-top: 227px;
  `,

  CasinoContainer: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 48px;
    gap: 32px;
  `,
};
