import { client } from "../../helpers/createClient";
import styled from "styled-components";
import moment from "moment";

import { ReviewDetailsProps } from "../../types";
import { Layout, ContentBody } from "../../components";
import { StyledSingleContent } from "../../styles/SharedStyles";

export async function getStaticPaths() {
  const { items } = await client.getEntries({ content_type: "reviews" });
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
    content_type: "reviews",
    "fields.slug": slug,
  });
  return {
    props: {
      review: items[0],
    },
  };
}

const StyledWrapper = styled.div`
  background-color: #fff;
`;

const StyledImageContainer = styled.div`
  @media screen and (min-width: 820px) {
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

const StyledBody = styled.div``;

const StyledTitle = styled.h3`
  color: var(--color-text-primary);
`;

const StyledDateRating = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledDate = styled.p`
  color: #464343;
`;

const StyledRating = styled.p``;

const StyledIntro = styled.p`
  color: var(--color-text-light);
  font-weight: 700;
  font-style: italic;
`;

export default function ReviewDetails({ review }: ReviewDetailsProps) {
  console.log(review);
  const {
    fields: {
        title,
        slug,
        featuredImage: {
          fields: {
            file: { url },
          },
        },
        excerpt,
        rating,
        description,
      },
      sys: {
        createdAt
      }
    }
    = review;
  return (
    <Layout>
      <StyledSingleContent>
        <StyledWrapper>
          <StyledImageContainer>
            <StyledFeaturedImage src={url} />
          </StyledImageContainer>
          <StyledBody>
            <StyledTitle>{title}</StyledTitle>
          </StyledBody>
          <StyledDateRating>
          <StyledDate>
          {moment(createdAt).format("MMMM Do YYYY, h:mm")}
          </StyledDate>
          <StyledRating>
            Rating: {rating}
          </StyledRating>
          </StyledDateRating>
         
          <StyledIntro>
            {excerpt}
          </StyledIntro>
          <ContentBody bodyText={description} />
        </StyledWrapper>
      </StyledSingleContent>
    </Layout>
  );
}
