import styled, { css } from "styled-components";

export const StyledContent = styled.div`
  max-width: 1200px;
  margin: 20px auto 80px;
  padding: 20px 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledSingleContent = styled.div`
  ${({ gallery}) => gallery && css`
  max-width: 1000px;
  margin: 20px auto 80px;
  padding: 50px 150px;
  width: 100%;
  box-sizing: border-box;

  `}
 
`;