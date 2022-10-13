import React from "react";
import { client } from "../../helpers/createClient";
import styled from "styled-components";

import { Reviews, Review } from "../../types";
import { Layout, ReviewItem } from "../../components";
import { StyledContent } from "../../styles/SharedStyles";

export async function getStaticProps() {
	const { items } = await client.getEntries({ content_type: "reviews" });
	return {
		props: {
			reviews: items,
		},
	};
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
`;

export default function ReviewsPage({ reviews }: Reviews) {
	return (
		<Layout>
			<StyledContent>
				<h3>Reviews</h3>
				<StyledGrid>
					{reviews.map((reviewItem: Review) => {
						return <ReviewItem review={reviewItem} key={reviewItem.sys.id}/>;
					})}
				</StyledGrid>
			</StyledContent>
		</Layout>
	);
}
