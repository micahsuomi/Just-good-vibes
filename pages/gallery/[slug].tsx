import React from "react";
import Link from "next/link";
import { client } from "../../helpers/createClient";
import styled from "styled-components";

import { GalleryPhotoDetailsProps } from "../../types";
import { Layout, BackToLink } from "../../components";
import { StyledSingleContent } from "../../styles/SharedStyles";

export async function getStaticPaths() {
  const { items } = await client.getEntries({ content_type: "gallery" });
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
  const { slug } = params;
  const { items } = await client.getEntries({
    content_type: "gallery",
    "fields.slug": slug,
  });
  return {
    props: {
      photo: items[0],
    },
  };
}

const StyledImage = styled.img`
  width: 100%;
`;

const StyledTitle = styled.h3`
  color: var(--color-text-primary);
`;

const StyledDescription = styled.p`
  color: var(--color-text-light);
  line-height: 1.6;
`;

const StyledLink = styled.a`
  font-size: 16px;
`;

export default function GalleryPhotoDetails({
  photo: {
    fields: {
      title,
      featuredImage: {
        fields: {
          file: { url },
        },
      },
      shortDescription,
      linkToInstagram,
    },
    sys,
  },
}: GalleryPhotoDetailsProps) {
  return (
    <Layout>
      <StyledSingleContent gallery={true}>
        <div>
          <StyledImage src={url} />
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{shortDescription}</StyledDescription>
          <Link href={linkToInstagram} passHref>
            <StyledLink>
            {linkToInstagram}
            </StyledLink>
          </Link>
        </div>
        <BackToLink hrefLink="gallery" text="Back to gallery" />
      </StyledSingleContent>
    </Layout>
  );
}
