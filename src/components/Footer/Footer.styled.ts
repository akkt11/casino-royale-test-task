import styled from "styled-components";

export default {
  Container: styled.footer`
    display: flex;
    background: linear-gradient(90deg, #02011f 65%, #06225d 100%);
    padding: 64px 32px;
    gap: 64px;

    @media (max-width: 1440px) {
      gap: 40px;
    }

    @media (max-width: 1370px) {
      flex-direction: column;
      gap: 52px;
    }
  `,
};
