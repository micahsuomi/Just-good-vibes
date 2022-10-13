import Link from "next/link";
import styled from "styled-components";
import moment from "moment";
import { MdLocationOn } from "react-icons/md";

import { EventItemProps } from "../types";


const StyledEventCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  justify-content: center;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    grid-template-columns: 50% 50%;
  }
`;

const StyledEventCardImageWrapper = styled.div`
  align-self: center;
`;
const StyledEventCardImage = styled.img`
  width: 500px;
  height: 350px;
  background-size: cover;
  overflow: hidden;
`;
const StyledEventCardBody = styled.div`
  padding: 1.5rem 1.8rem;
  a {
    text-decoration: none;
  }
`;

const StyledEventTitle = styled.h4``;
const StyledEventDate = styled.p``;
const StyledEventAddressWrapper = styled.div`
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

const StyledEventAddress = styled.p`
  font-weight: 700;
  color: var(--color-red-purple);
`;

const StyledEventGoogleMapLink = styled.a``;

const StyledCardIntro = styled.p`
  color: #7f7979;
  line-height: 1.6;
`;

export const EventItem = ({ event }: EventItemProps) => {
  const {
    title,
    slug,
    thumbnail: { fields },
    eventDate,
    address,
    location: { lat, lon },
    intro,
  } = event.fields;
  return (
    <StyledEventCard key={event.sys.id}>
      <StyledEventCardImageWrapper>
        <StyledEventCardImage src={fields.file.url} alt={fields.title} />
      </StyledEventCardImageWrapper>
      <StyledEventCardBody>
        <Link href={`/events/${slug}`} passHref>
          <a>
            {" "}
            <StyledEventTitle>{title}</StyledEventTitle>
          </a>
        </Link>
        <StyledEventDate>
          {moment(eventDate).format("MMMM Do YYYY, h:mm")}
        </StyledEventDate>
        <StyledEventAddressWrapper>
          <Link href={`https://maps.google.com/?q=${lat},${lon}`} passHref>
            <StyledEventGoogleMapLink
              target="blank"
              title="view on google maps"
            >
              <>
                <StyledEventAddress>{address}</StyledEventAddress>
                <MdLocationOn color="#d83535" />
              </>
            </StyledEventGoogleMapLink>
          </Link>
        </StyledEventAddressWrapper>
        <StyledCardIntro>{intro}</StyledCardIntro>
      </StyledEventCardBody>
    </StyledEventCard>
  );
};
