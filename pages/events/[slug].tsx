import { client } from "../../helpers/createClient";
import Link from "next/link";
import styled from "styled-components";
import moment from "moment";
import { MdLocationOn } from "react-icons/md";

import { Events, Event } from "../../types";
import { Layout } from "../../components";
import { ContentBody } from "../../components";
import { StyledSingleContent } from "../../styles/SharedStyles";

export async function getStaticPaths() {
  const { items } = await client.getEntries({ content_type: "event" });
  console.log("items", items);
  const ids = items.map((item: any) => {
    console.log("item", item);
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });
  return {
    paths: ids,
    fallback: true,
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

const StyledEventWrapper = styled.div`
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

const StyledBody = styled.div``;

const StyledTitle = styled.h3`
  color: #1f1e1e;
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
  color: #aa2a88;
`;

const StyledEventGoogleMapLink = styled.a``;

const StyledIntro = styled.p`
  color: #707070;
  font-weight: 700;
  font-style: italic;
`;

export default function EventDetails({ event }) {
  const {
    title,
    featuredImage: { fields },
    eventDate,
    address,
    location: { lat, lon },
    intro,
    eventDescription,
  } = event.fields;
  return (
    <Layout>
      <StyledSingleContent>
        <StyledEventWrapper>
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
            <StyledIntro>
                {intro}
            </StyledIntro>
            <ContentBody bodyText={eventDescription} />
          </StyledBody>
        </StyledEventWrapper>
      </StyledSingleContent>
    </Layout>
  );
}
