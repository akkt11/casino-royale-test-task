import styled from "styled-components";

export default {
  Container: styled.div`
    display: flex;
    align-items: center;
    gap: 64px;

    @media (max-width: 1440px) {
      gap: 40px;
    }

    @media (max-width: 1370px) {
      flex-direction: column;
    }
  `,

  InfoContainer: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 24px;
    width: 390px;
    border: 1px dashed orange;
    border-radius: 16px;
    background: var(--white-transparent);

    @media (max-width: 1370px) {
      max-width: 390px;
      margin: 0 5px;
      width: 100%;
    }
  `,

  DownloadContainer: styled.div`
    display: flex;
    gap: 18px;
    align-items: center;
    flex-direction: column;
    margin-top: 24px;
  `,

  DescriptionContainer: styled.div`
    text-align: center;
  `,

  IconContainer: styled.div`
    @media (max-width: 1370px) {
      display: none;
    }
  `,
};
