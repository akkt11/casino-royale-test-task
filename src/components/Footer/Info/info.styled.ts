import styled from "styled-components";

export default {
  Container: styled.div`
    display: flex;
    align-items: center;
    gap: 64px;
  `,

  InfoContainer: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 24px;
    min-width: 390px;
    border: 1px dashed orange;
    border-radius: 16px;
    background: #ffffff10;
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

  CertificateContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,

  CertificateDescription: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
  `,
};
