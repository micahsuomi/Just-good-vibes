import React from "react";
import Link from "next/link";
import { LayoutProps } from "../types";
import styled from "styled-components";

const StyledNavLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: rgb(74, 68, 68);
  display: inline-block;
  margin: 1rem;
  font-family: "Courier New";
`;

const StyledLogo = styled.h4`
  margin: 1rem 0;
`;
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <header>
        <div>
          <StyledLogo>Good Vibes</StyledLogo>
        </div>
        <div>
          <Link href="/" passHref>
            <StyledNavLink>Home</StyledNavLink>
          </Link>
          <Link href="/about" passHref>
            <StyledNavLink>About</StyledNavLink>
          </Link>
          <Link href="/reviews" passHref>
            <StyledNavLink>Reviews</StyledNavLink>
          </Link>
          <Link href="/events" passHref>
            <StyledNavLink>Events</StyledNavLink>
          </Link>
          <Link href="/gallery" passHref>
            <StyledNavLink>Gallery</StyledNavLink>
          </Link>
          <Link href="/blog" passHref>
            <StyledNavLink>Blog</StyledNavLink>
          </Link>
          <Link href="/contact" passHref>
            <StyledNavLink>Contact</StyledNavLink>
          </Link>
        </div>
      </header>

      <>{children}</>

      <footer>
        <p>Copyright 2022 Next Js + Contentful Sample Site</p>
      </footer>
    </div>
  );
};
