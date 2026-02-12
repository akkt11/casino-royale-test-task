import styled from "styled-components";

export default {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 1370px) {
      flex-direction: column-reverse;
      align-items: center;
    }
  `,

  ActionContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;

    @media (max-width: 1370px) {
      align-items: center;
    }
  `,

  SocialContainer: styled.div`
    text-align: right;

    @media (max-width: 1370px) {
      text-align: center;
      margin-top: 60px;
    }
  `,

  IconsContainer: styled.div`
    display: flex;
    gap: 4px;

    @media (max-width: 1370px) {
      margin-top: 12px;
    }
  `,

  CertificateContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 1370px) {
      flex-direction: row;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      margin-top: 52px;
    }
  `,

  CertificateDescription: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 1370px) {
      flex-direction: column;
      flex: 1;
      margin-top: 52px;
      gap: 24px;
    }

    @media (max-width: 480px) {
      margin-top: 0px;
    }
  `,
};
