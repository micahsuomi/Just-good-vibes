import React from "react";
import styled, { css } from "styled-components";

import { ToggleBarProps } from "../types";

const StyledWrapper = styled.div`
  position: fixed;
  right: 6%;
  z-index: 10;
`;
const StyledToggleBar = styled.button`
  background-color: transparent;
  padding: 1rem;
  cursor: pointer;
  position: relative;
  border: none;
  @media screen and (min-width: 950px) {
    display: none;
  }
`;

const StyledToggleList = styled.div`
  padding: 0;
`;
const StyledToggleItem = styled.div`
  width: 27px;
  height: 4px;
  background-color: var(--color-text-primary);
  margin: 6px;
  line-height: none;
  position: absolute;
  ${({ firstLine }) =>
    firstLine &&
    css`
      top: 0;
      right: -10%;
    `};
  ${({ middleLine }) =>
    middleLine &&
    css`
      top: 25%;
      right: -10%;
    `};
  ${({ thirdLine }) =>
    thirdLine &&
    css`
      top: 50%;
      right: -10%;
    `};
  display: ${({ showing, middleLine }) => showing && middleLine && "none"};
  ${({ showing, firstLine }) =>
    showing &&
    firstLine &&
    css`
      transform: rotate(45deg);
      position: absolute;
      top: 25%;
      transition: 0.2s ease-in-out;
    `};
  ${({ showing, thirdLine }) =>
    showing &&
    thirdLine &&
    css`
      transform: rotate(-45deg);
      top: 25%;
      transition: 0.2s ease-in-out;
    `};
`;
export const ToggleBar = ({ openNavItems, toggle }: ToggleBarProps) => {
  return (
    <StyledWrapper>
      <StyledToggleBar onClick={openNavItems}>
        <StyledToggleList>
          <StyledToggleItem showing={toggle} firstLine />
          <StyledToggleItem showing={toggle} middleLine />
          <StyledToggleItem showing={toggle} thirdLine />
        </StyledToggleList>
      </StyledToggleBar>
    </StyledWrapper>
  );
};
