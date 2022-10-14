import React from "react";
import { client } from "../../helpers/createClient";
import Link from "next/link";
import styled from "styled-components";
import moment from "moment";
import { MdLocationOn } from "react-icons/md";

import { EventDetailsProps } from "../../types";
import { Layout } from "../../components";
import { ContentBody } from "../../components";
import { StyledSingleContent } from "../../styles/SharedStyles";

export async function getStaticPaths() {
	const { items } = await client.getEntries({ content_type: "event" });
	const ids = items.map((item: any) => {
		return {
			params: {
				slug: item.fields.slug,
			},
		};
	});
	return {
		paths: ids,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const { items } = await client.getEntries({
		content_type: "event",
		"fields.slug": slug,
	});

	return {
		props: {
			event: items[0],
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

const StyledDate = styled.p``;

const StyledAddressWrapper = styled.div`
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
  }
  svg {
    margin-left: 0.5rem;
    margin-bottom: 0.3rem;
  }
`;

const StyledAddress = styled.p`
  font-weight: 700;
  color: var(--color-red-purple);
`;

const StyledEventGoogleMapLink = styled.a``;

const StyledIntro = styled.p`
  color: var(--color-text-light);
  font-weight: 700;
  font-style: italic;
`;

export default function EventDetails({ event }: EventDetailsProps) {
	const {
		fields: {
			title,
			featuredImage: { fields },
			eventDate,
			address,
			location: { lat, lon },
			intro,
			eventDescription,
		},
	} = event;
	return (
		<Layout>
			<StyledSingleContent>
				<StyledWrapper>
					<StyledImageContainer>
						<StyledFeaturedImage src={fields.file.url} alt={fields.title} />
					</StyledImageContainer>
					<StyledBody>
						<StyledTitle>{title}</StyledTitle>
						<StyledDate>
              Date: {moment(eventDate).format("MMMM Do YYYY, h:mm")}
						</StyledDate>
						<StyledAddressWrapper>
							<Link href={`https://maps.google.com/?q=${lat},${lon}`} passHref>
								<StyledEventGoogleMapLink
									target="blank"
									title="view on google maps"
								>
									<>
										<StyledAddress>{address}</StyledAddress>
										<MdLocationOn color="#d83535" />
									</>
								</StyledEventGoogleMapLink>
							</Link>
						</StyledAddressWrapper>
						<StyledIntro>{intro}</StyledIntro>
						<ContentBody bodyText={eventDescription} />
					</StyledBody>
				</StyledWrapper>
			</StyledSingleContent>
		</Layout>
	);
}
