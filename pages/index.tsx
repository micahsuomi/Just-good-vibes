/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState, useEffect } from "react";
import { client } from "../helpers/createClient";
import Link from "next/link";
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { HomeItemsProps, Home, MixedContentTypes } from "../types";
import { Layout, ContentBody,EventItem, ReviewItem, BlogItem } from "../components";
import { StyledContent, StyledHorizontalGrid, StyledVerticalGrid } from "../styles/SharedStyles";

export async function getStaticProps() {
  const { items } = await client.getEntries({ content_type: "landingPage" });
  return {
    props: {
      homeItems: items,
    },
  };
}

const StyledHeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  margin-top: -5rem;
`;

const StyledHeroBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const StyledHeroHeader = styled.h2`
  font-weight: 700;
  color: #fff;
`;

const StyledHeroSubHeader = styled.h3`
  color: #fff;
`;

const StyledHeroButton = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  padding: 1.3rem;
  width: 15rem;
  border-radius: 2px;
  cursor: pointer;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
  }
  :hover {
    background-color: #222020;
    transform: scale(1.04);
    transition: 0.3s ease-in-out;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  grid-gap: 1rem;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledSection = styled.div`
	margin-top: 7rem;
`;

const StyledSectionTitle = styled.h3`
	color: var(--color-text);
`;

export default function HomePage({ homeItems }: HomeItemsProps) {
  const [latestReviews, setLatestReviews] = useState([]);
  const [latestEvents, setLatestEvents] = useState([]);
  const [latestBlogPosts, setLatestBlogPosts] = useState([]);
  const arrReviews = [];
  const arrEvents = [];
  const arrBlogPosts = [];

  const displayLatestsPostsData = () => {
    homeItems.filter((item: Home) => {
      item.fields.latestPosts.filter((post: MixedContentTypes) => {
        switch (post.sys.contentType.sys.id) {
        case "reviews":
          arrReviews.push(post);
          break;
        case "post":
          arrBlogPosts.push(post);
          break;
        case "event":
          arrEvents.push(post);
          break;
        default:
        }
      });
    });
  };

  useEffect(() => {
    displayLatestsPostsData();
    if (arrReviews.length > 0) {
      setLatestReviews(arrReviews);
    }
    if (arrEvents.length > 0) {
      setLatestEvents(arrEvents);
    }
    if (arrBlogPosts.length > 0) {
      setLatestBlogPosts(arrBlogPosts);
    }
  }, []);

  return (
    <Layout>
      <>
        <StyledHeroContainer className="hero">
          <StyledHeroBody>
            <StyledHeroHeader>Good Vibes</StyledHeroHeader>
            <StyledHeroSubHeader>
              Where the good feelings happen
            </StyledHeroSubHeader>
            <StyledHeroButton>
              <Link href="section-landing" passHref>
                <a>Read More</a>
              </Link>
            </StyledHeroButton>
          </StyledHeroBody>
        </StyledHeroContainer>
        <StyledContent>
          {homeItems.map((item: Home) => {
            const { title, featuredImage, description } = item.fields;
            return (
              <>
                <div key={item.sys.id}>
                  <h3>{title}</h3>
                  <StyledGrid>
                    {featuredImage.map((image) => {
                      return (
                        <StyledImage
                          src={image.fields.file.url}
                          key={image.title}
                        />
                      );
                    })}
                  </StyledGrid>
                  <ContentBody bodyText={description} />
                </div>
                {latestReviews.length > 0 && (
                  <StyledSection>
					<StyledSectionTitle>Latest Reviews</StyledSectionTitle>
					<StyledHorizontalGrid>
                    {latestReviews.map((item) => (
                      <ReviewItem key={item.sys.id} review={item} />
                    ))}
					</StyledHorizontalGrid>
                  </StyledSection>
                )}
                 {latestEvents.length > 0 && (
                  <StyledSection>
					<StyledSectionTitle>Latest Events</StyledSectionTitle>
					<StyledVerticalGrid>
                    {latestEvents.map((item) => (
                      <EventItem key={item.sys.id} event={item} />
                    ))}
					</StyledVerticalGrid>
                  </StyledSection>
                )}
				 {latestBlogPosts.length > 0 && (
                  <StyledSection>
					<StyledSectionTitle>Latest Blog Posts</StyledSectionTitle>
					<StyledVerticalGrid>
                    {latestBlogPosts.map((item) => (
                      <BlogItem key={item.sys.id} post={item} />
                    ))}
					</StyledVerticalGrid>
                  </StyledSection>
                )}
              </>
            );
          })}
        </StyledContent>
      </>
    </Layout>
  );
}
