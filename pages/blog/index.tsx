import React from "react";
import { client } from "../../helpers/createClient";
import styled from "styled-components";

import { Posts, Post } from "../../types";
import { Layout } from "../../components";
import { StyledContent, StyledSectionTitle } from "../../styles/SharedStyles";
import { BlogItem } from "../../components";
export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "post" });
  return {
    props: {
      posts: res.items,
    },
  };
}

const StyledVerticalGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: 2rem;
  justify-content: center;
`;

export default function BlogPage({ posts }: Posts) {
  return (
    <Layout>
      <StyledContent>
        <StyledSectionTitle>Blog</StyledSectionTitle>
        <StyledVerticalGrid>
          {posts.map((post: Post) => (
            <BlogItem post={post} key={post.sys.id} />
          ))}
        </StyledVerticalGrid>
      </StyledContent>
    </Layout>
  );
}
