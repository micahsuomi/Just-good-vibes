import React from "react";
import Link from "next/link";
import styled from "styled-components";
import moment from "moment";

import { PostItemProps } from "../types";

const StyledLink = styled.a`
  text-decoration: none;
  color: #222020;
`;

const StyledCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 1012px) {
    grid-template-columns: 50% 50%;
    grid-column-gap: 0.5rem;
    justify-content: center;
    align-items: stretch;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  @media screen and (min-width: 1012px) {
    width: 500px;
    height: 350px;
    background-size: cover;
    overflow: hidden;
  }
`;

const StyledBody = styled.div`
  padding: 1.5rem 1.8rem;
`;

const StyledCreatedAt = styled.span`
  font-weight: 700;
  font-size: 14px;
`;
const StyledTitle = styled.h4`
  margin: 0.6rem 0;
  color: var(--color-text-primary);
`;

const StyledIntro = styled.p`
  color: #7f7979;
  line-height: 1.6;
`;

const StyledReadingTime = styled.p`
  color: #514949;
  font-size: 14px;
`;
export const BlogItem = ({ post }: PostItemProps) => {
	const {
		title,
		slug,
		thumbnail: { fields },
		intro,
		readingTime,
	} = post.fields;
	return (
		<Link href={`/blog/${slug}`} passHref>
			<StyledLink>
				<StyledCard key={post.sys.id}>
					<div>
						<StyledImage src={fields.file.url} alt={fields.title} />
					</div>
					<div>
						<StyledBody>
							<StyledCreatedAt>
								{moment(post.sys.createdAt).format("MMM Do YYYY")}
							</StyledCreatedAt>
							<StyledTitle>{title}</StyledTitle>

							<StyledIntro>{intro}</StyledIntro>

							<StyledReadingTime>Reading time: {readingTime}</StyledReadingTime>
						</StyledBody>
					</div>
				</StyledCard>
			</StyledLink>
		</Link>
	);
};
