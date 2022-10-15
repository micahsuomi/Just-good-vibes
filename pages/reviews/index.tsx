import React from "react";
import { client } from "../../helpers/createClient";
import styled from "styled-components";

import { Reviews, Review } from "../../types";
import { Layout, ReviewItem } from "../../components";
import { StyledContent, StyledHorizontalGrid } from "../../styles/SharedStyles";

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
        <h3>Reviews</h3>
        <StyledHorizontalGrid>
          {reviews.map((reviewItem: Review) => {
            return <ReviewItem review={reviewItem} key={reviewItem.sys.id}/>;
          })}
        </StyledHorizontalGrid>
      </StyledContent>
    </Layout>
  );
}
