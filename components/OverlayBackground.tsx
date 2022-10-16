import styled from "styled-components";

import { OverlayBackgroundProps } from "../types";
export const OverlayBackground = ({ open }: OverlayBackgroundProps) => {
  const StyledOverlay = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;
    z-index: 2;
    animation-name: appear;
    animation-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
    animation-duration: 0.3s;
    @keyframes appear {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  `;
  return <>{open && <StyledOverlay />}</>;
};
