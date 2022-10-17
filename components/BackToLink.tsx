import Link from "next/link";
import styled from "styled-components";
import { IoIosUndo } from "react-icons/io";

const StyledLinkContainer = styled.div`
  margin-top: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  :hover {
    transform: scale(1.03);
    transition: 0.3s ease-in-out;
  }
  svg {
    color: var(--color-text-primary);
  }
`;

const StyledLink = styled.a`
  font-size: 18px;
  margin-left: 0.5rem;
  color: var(--color-text-primary);
`;
export const BackToLink = ({ hrefLink, text }) => {
  return (
    <Link href={`/${hrefLink}`}>
      <StyledLinkContainer>
        <IoIosUndo />
        <StyledLink>{text}</StyledLink>
      </StyledLinkContainer>
    </Link>
  );
};
