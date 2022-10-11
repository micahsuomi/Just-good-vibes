import Link from "next/link";
import { client } from "../../helpers/createClient";
import styled from "styled-components";

import { GalleryPhoto } from "../../types";
import { Layout } from "../../components";
import { StyledContent, StyledSingleContent } from "../../styles/SharedStyles";

export async function getStaticPaths() {
  const { items } = await client.getEntries({ content_type: "gallery" });
  console.log("items", items);
  const ids = items.map((item: any) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths: ids,
    fallback: true,
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

export default function Photo({
  photo: {
    fields: {
      title,
      featuredImage: { fields },
      shortDescription,
      linkToInstagram,
    },
  },
}) {
  return (
    <Layout>
      <StyledSingleContent gallery={true}>
        <div>
        <StyledImage src={fields.file.url} />
        <h2>{title}</h2>
        <p>{shortDescription}</p>
        <a>{linkToInstagram}</a>
        </div>
        <div>
            <Link href="/gallery" passHref>
                <a>
                    Back to photos
                </a>
            </Link>
        </div>
      </StyledSingleContent>
    </Layout>
  );
}
