import Link from "next/link";
import styled from "styled-components";
import moment from "moment";

import { ReviewItemProps } from "../types";

const StyledLink = styled.a`
  text-decoration: none;
`;

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid lightgray;
  max-height: 700px;
`;

const StyledCardImageWrapper = styled.div`
  align-self: center;
`;
const StyledCardImage = styled.img`
  width: 100%;
  height: 320px;
  background-size: cover;
  overflow: hidden;
`;
const StyledCardBody = styled.div`
  padding: 1.5rem 1.8rem;
`;
const StyledDate = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: #1f1e1e;
`;
const StyledTitle = styled.h4`
  color: #1f1e1e;
`;

const StyledRating = styled.p`
  color: #63631e;
`;

const StyledCardIntro = styled.p`
  color: #7f7979;
  line-height: 1.6;
`;

export const ReviewItem = ({ review }: ReviewItemProps) => {
  const {
    title,
    slug,
    thumbnail: { fields },
    rating,
    excerpt,
  } = review.fields;
  return (
    <Link href={`/review/${slug}`} passHref>
      <StyledLink>
        <StyledCard key={review.sys.id}>
          <StyledCardImageWrapper>
            <StyledCardImage src={fields.file.url} alt={fields.title} />
          </StyledCardImageWrapper>
          <StyledCardBody>
            <StyledDate>
              {moment(review.sys.createdAt).format("MMMM Do YYYY, h:mm")}
            </StyledDate>

            <StyledTitle>{title}</StyledTitle>

            <StyledRating>Rating: {rating}/5</StyledRating>
            <StyledCardIntro>{excerpt}</StyledCardIntro>
          </StyledCardBody>
        </StyledCard>
      </StyledLink>
    </Link>
  );
};
