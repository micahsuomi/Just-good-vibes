import React, { useState } from "react";
import { LayoutProps } from "../types";
import styled from "styled-components";

import { Header } from "./Header";
import { OverlayBackground } from "./OverlayBackground";

const StyledLayoutWrapper = styled.div`
  position: relative;
`;

export const Layout = ({ children }: LayoutProps) => {
  const [overlayShowing, setOverlayShowing] = useState(false);
  const toggleOverlay = (open) => setOverlayShowing(open);

  return (
    <StyledLayoutWrapper className="layout">
      <OverlayBackground open={overlayShowing} />
      <Header showOverlay={toggleOverlay} />
      <>{children}</>
      <footer>
        <p>Copyright 2022 Next Js + Contentful Sample Site</p>
      </footer>
    </StyledLayoutWrapper>
  );
};
