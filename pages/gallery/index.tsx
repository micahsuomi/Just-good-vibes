import Link from "next/link";
import styled from "styled-components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { client } from "../../helpers/createClient";
import { GalleryPhotos } from "../../types";
import { Layout } from "../../components";
import { StyledContent } from "../../styles/SharedStyles";

export async function getStaticProps() {
  const { items } = await client.getEntries({ content_type: "gallery" });
  return {
    props: {
      gallery: items,
    },
  };
}

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0.2rem;
  position: relative;
`;

const StyledCardImageWrapper = styled.div` overflow: hidden;`;
const StyledCardImage = styled.img`
  width: 100%;
  overflow: hidden;
  :hover {
    transform: scale(1.01);
    transition: 0.4s ease-in-out;
  }
`;
const StyledCardOverlayBackground = styled.div`
  background-color: rgba(33, 32, 32, 0.6);
  opacity: 0;
  height: 98.5%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  :hover {
    opacity: 1;
    transition: 0.4s ease-in-out;
  }
`;

const StyledCardTitle = styled.h5`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
`;

export default function GalleryPage({ gallery }: GalleryPhotos) {
  console.log(gallery);
  return (
    <Layout>
      <StyledContent>
        <h3>Gallery</h3>
        <ResponsiveMasonry
          //   columsCount={2}
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          gutter="1.5rem"
        >
          <Masonry>
            {gallery.map((item) => {
              const {
                title,
                slug,
                featuredImage: { fields },
              } = item.fields;
              return (
                <Link href={`/gallery/${slug}`} passHref>
                  <a>
                    <StyledCard>
                      <StyledCardImageWrapper>
                        <StyledCardImage
                          src={fields.file.url}
                          alt={fields.title}
                        />
                      </StyledCardImageWrapper>
                      <StyledCardOverlayBackground>
                        <StyledCardTitle>{title}</StyledCardTitle>
                      </StyledCardOverlayBackground>
                    </StyledCard>
                  </a>
                </Link>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </StyledContent>
    </Layout>
  );
}
