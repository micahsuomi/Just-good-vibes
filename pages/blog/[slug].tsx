import React from "react";
import { client } from "../../helpers/createClient";
import styled from "styled-components";

import { PostDetailsProps } from "../../types";
import { Layout, ContentBody, BackToLink } from "../../components";
import { StyledSingleContent } from "../../styles/SharedStyles";

export async function getStaticPaths() {
  const { items } = await client.getEntries({ content_type: "post" });
  const ids = items.map((item: any) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths: ids,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });
  return {
    props: {
      post: items[0],
    },
  };
}

const StyledPostWrapper = styled.div`
  background-color: #fff;
`;

const StyledImageContainer = styled.div`
  @media screen and (min-width: 820px) {
    padding: 1rem 2rem;
    max-width: 800px;
  }
  @media screen and (min-width: 1024px) {
    padding: 1rem 5rem 3rem 0;
    max-width: 750px;
  }
`;
const StyledFeaturedImage = styled.img`
  width: 100%;
`;

const StyledTitle = styled.h3`
  color: var(--color-text-primary);
`;

const StyledReadingTime = styled.span`
  font-size: 16px;
  color: var(--color-text-light);
  font-weight: 700;
  margin-bottom: 1.7rem;
  ::after {
    content: "";
    display: block;
    height: 10px;
    width: 100%;
    margin-top: 0.7rem;
    border-bottom: 2px solid rgba(192, 192, 192, 0.6);
  }
`;

const StyledIntro = styled.p`
  color: var(--color-text-light);
  font-weight: 700;
  font-style: italic;
`;

export default function BlogDetails({ post }: PostDetailsProps) {
  const {
    fields: {
      title,
      featuredImage: {
        fields: {
          file: { url },
        },
      },
      intro,
      description,
      readingTime,
    },
    sys: { createdAt },
  } = post;
  return (
    <Layout>
      <StyledSingleContent>
        <StyledPostWrapper>
          <StyledImageContainer>
            <StyledFeaturedImage
              src={post.fields.thumbnail.fields.file.url}
              alt={post.fields.title}
            />
          </StyledImageContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledIntro>{intro}</StyledIntro>
          <StyledReadingTime>Reading time: {readingTime}</StyledReadingTime>
          <ContentBody bodyText={description} />
          <BackToLink hrefLink="/blog" text="Back to blog" />
        </StyledPostWrapper>
      </StyledSingleContent>
    </Layout>
  );
}
