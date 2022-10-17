import React from "react";
import { client } from "../../helpers/createClient";
import styled from "styled-components";

import { Reviews, Review } from "../../types";
import { Layout, ReviewItem } from "../../components";
import {
  StyledContent,
  StyledSectionTitle,
  StyledHorizontalGrid,
} from "../../styles/SharedStyles";

export async function getStaticProps() {
  const { items } = await client.getEntries({ content_type: "reviews" });
  return {
    props: {
      reviews: items,
    },
  };
}

export default function ReviewsPage({ reviews }: Reviews) {
  return (
    <Layout>
      <StyledContent>
        <StyledSectionTitle>Reviews</StyledSectionTitle>
        <StyledHorizontalGrid>
          {reviews.map((reviewItem: Review) => {
            return <ReviewItem review={reviewItem} key={reviewItem.sys.id} />;
          })}
        </StyledHorizontalGrid>
      </StyledContent>
    </Layout>
  );
}
