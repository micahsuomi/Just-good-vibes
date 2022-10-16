import styled, { css } from "styled-components";

export const StyledContent = styled.div`
  max-width: 1200px;
  margin: 20px auto 80px;
  padding: 20px 20px;
  width: 100%;
  box-sizing: border-box;
  ${({ isContactForm }) =>
    isContactForm &&
    css`
      margin: 0;
      padding: 70px 0;
      background-color: var(--color-text-lightgrey);
      max-width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @media screen and (max-width: 100px) {
        padding: 120px 170px;
      }
    `};
`;

export const StyledHorizontalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
`;

export const StyledVerticalGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: 2rem;
  justify-content: center;
`;

export const StyledSingleContent = styled.div`
  ${({ gallery }) =>
    gallery
      ? css`
          max-width: 1000px;
          margin: 20px auto 80px;
          padding: 50px 150px;
          width: 100%;
          box-sizing: border-box;
        `
      : css`
          margin: 20px auto 80px;
          width: 100%;
          box-sizing: border-box;
          padding: 10px 20px;

          @media screen and (min-width: 768px) {
            padding: 50px 100px;
          }

          @media screen and (min-width: 1024px) {
            max-width: 1000px;
            padding: 50px 150px;
          }
        `}
`;
