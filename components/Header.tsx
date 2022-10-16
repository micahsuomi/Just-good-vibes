import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

import { HeaderProps } from "../types";
import { ToggleBar } from "./ToggleBar";

const StyledHeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: white;
  z-index: 2;
  border-bottom: 1px solid lightgray;
  position: fixed;
  width: 100%;
  max-height: 60px;
  ${({ pinned }) =>
    pinned
      ? css`
          transform: translateY(0);
          transition: 0.3s ease-in-out;
          box-shadow: 0rem 0rem 0.5rem 1px rgb(0 0 0 / 50%);
        `
      : css`
          transform: translateY(-100%);
          transition: 0.3s ease-in-out;
        `};
`;

const StyledLogo = styled.h4`
  margin: 1rem 0;
`;

const StyledNavList = styled.ul`
  display: flex;
  transform: translateX(100%);
  ${({ showing }) =>
    showing &&
    css`
      position: fixed;
      background-color: #f9f5f5;
      top: -32%;
      right: 0;
      width: 350px;
      padding: 10rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      height: 100vh;
      transform: translateX(0);
      transition: cubic-bezier(0.17, 0.67, 0.83, 0.67);
      transition-timing-function: 1s;
      z-index: 6;
      animation-name: slideToLeft;
      animation-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
      animation-duration: 0.25s;
      @keyframes slideToLeft {
        0% {
          transform: translateX(100%);
        }
        50% {
          transform: translateX(50%);
        }
        100% {
          transform: translateX(0);
        }
      }

      @media screen and (max-width: 724px) {
        width: 100%;
        right: -10%;
      }
    `}

  @media screen and (min-width: 950px) {
    display: flex;
    transform: translateX(-10%);
  }
`;

const StyledNavItem = styled.li`
  list-style: none;
  cursor: pointer;
  @media screen and (max-width: 950px) {
    width: 80%;
    border-bottom: 1px solid black;
    :hover {
      display: block;
      content: "";
      transform: scaleX(1.1);
      border-bottom: 1px solid black;
      transition: 0.3s ease-in-out;
      transform-origin: 0% 0.2%;
    }
  }
`;
const StyledNavLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
  margin: 1rem;
  font-family: "Courier New";
  color: rgb(74, 68, 68);
  @media screen and (min-width: 950px) {
    margin: 0 1rem;
  }
`;

export const Header = ({ showOverlay }: HeaderProps) => {
  const [toggle, setToggle] = useState(false);
  const [unpinNav, setUnpinNav] = useState(false);
  const openNavItems = () => {
    setToggle(!toggle);
    showOverlay(!toggle);
  };

  const onScroll = () => {
    if (window.scrollY > 200) {
      setUnpinNav(true);
    }
    if (window.scrollY < 1000) setUnpinNav(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <StyledHeaderWrapper className="nav-bar" pinned={!unpinNav}>
      <div>
        <StyledLogo>Good Vibes</StyledLogo>
      </div>
      <ToggleBar openNavItems={openNavItems} toggle={toggle} />
      <StyledNavList showing={toggle}>
        <StyledNavItem>
          <Link href="/" passHref>
            <StyledNavLink>Home</StyledNavLink>
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link href="/about" passHref>
            <StyledNavLink>About</StyledNavLink>
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link href="/reviews" passHref>
            <StyledNavLink>Reviews</StyledNavLink>
          </Link>
        </StyledNavItem>

        <StyledNavItem>
          <Link href="/events" passHref>
            <StyledNavLink>Events</StyledNavLink>
          </Link>
        </StyledNavItem>

        <StyledNavItem>
          <Link href="/gallery" passHref>
            <StyledNavLink>Gallery</StyledNavLink>
          </Link>
        </StyledNavItem>

        <StyledNavItem>
          <Link href="/blog" passHref>
            <StyledNavLink>Blog</StyledNavLink>
          </Link>
        </StyledNavItem>

        <StyledNavItem>
          <Link href="/contact" passHref>
            <StyledNavLink>Contact</StyledNavLink>
          </Link>
        </StyledNavItem>
      </StyledNavList>
    </StyledHeaderWrapper>
  );
};
