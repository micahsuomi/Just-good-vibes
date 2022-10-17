import React from "react";
import { client } from "../../helpers/createClient";
import styled from "styled-components";

import { AboutPageProps } from "../../types";
import { Layout, ContentBody } from "../../components";
import { StyledSingleContent } from "../../styles/SharedStyles";

export async function getStaticProps() {
  const { items } = await client.getEntries({ content_type: "about" });
  return {
    props: {
      about: items,
    },
  };
}

const StyledImage = styled.img`
  width: 100%;
`;

export default function AboutPage({ about }: AboutPageProps) {
  return (
    <Layout>
      <StyledSingleContent>
        {about.map((item: any) => {
          const { title, featuredImage, description } = item.fields;
          return (
            <div key={item.sys.id}>
              <h3>{title}</h3>
              <StyledImage src={featuredImage.fields.file.url} />
              <ContentBody bodyText={description} />
            </div>
          );
        })}
      </StyledSingleContent>
    </Layout>
  );
}
