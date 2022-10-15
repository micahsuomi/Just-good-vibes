import React, { useState, useEffect } from "react";
import { client } from "../helpers/createClient";
import Link from "next/link";
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Layout, EventItem, ReviewItem, BlogItem } from "../components";
import { StyledContent } from "../styles/SharedStyles";

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

export default function HomePage({ homeItems }: any) {
	console.log("landi page items", homeItems);
	const [latestReviews, setLatestReviews] = useState([]);
	const [latestBlogPosts, setLatestBlogPosts] = useState([]);


	const filterReviewItems = homeItems.filter((item) => item.fields.latestPosts.filter((post) => {
		console.log(post.sys.contentType.sys.id);
		switch(post.sys.contentType.sys.id) {
		case "reviews":
			console.log("reviews here", post);
			break;
		default:

		}
		// post.sys.contentType.sys.id === "reviews"
	}));
	console.log(filterReviewItems);
	useEffect(() => {
	//  displayLatestsPostsData();
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
							<Link href="/recipes" passHref>
								<a>Read More</a>
							</Link>
						</StyledHeroButton>
					</StyledHeroBody>
				</StyledHeroContainer>
				<StyledContent>
					{homeItems.map((item: any) => {
						const { title, featuredImage, description } = item.fields;
						return (
							<>
								<div key={item.title}>
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
									<p>{documentToReactComponents(description)}</p>
								</div>
								<div>
                  Latest posts
									{item.fields.latestPosts.map((item: any) => {
										console.log();
										switch (item.sys.contentType.sys.id) {
										case "reviews":
											return <ReviewItem review={item} />;
										case "event":
											return <EventItem event={item} />;

										case "post":
											return <BlogItem post={item} />;

										default:
										}
									})}
								</div>
							</>
						);
					})}
				</StyledContent>
			</>
		</Layout>
	);
}
