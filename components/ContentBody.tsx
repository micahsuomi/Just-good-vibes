import React from "react";
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const StyledContentBody = styled.div`
  p {
    line-height: 1.6;
  }
`;

export const ContentBody = ({ bodyText }: any) => (
	<StyledContentBody>{documentToReactComponents(bodyText)}</StyledContentBody>
);
