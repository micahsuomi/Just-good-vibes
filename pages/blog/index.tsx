import { client } from "../../helpers/createClient";
import Link from "next/link";
import styled from "styled-components";
import moment from "moment";

import { Posts, Post } from "../../types";
import { Layout } from "../../components";
import { StyledContent } from "../../styles/SharedStyles";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "post" });
  return {
    props: {
      posts: res.items,
    },
  };
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: 2rem;
`;

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
  @media screen and (min-width: 768px) {
    grid-template-columns: 50% 50%;
    grid-column-gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 90%;
  background-size: cover;
  float: left;
  overflow: hidden;
`;

const StyledBody = styled.div`
  padding: 1.5rem 1.8rem;
`;

const StyledCreatedAt = styled.span`
  font-weight: 700;
  font-size: 14px;
`;
const StyledTitle = styled.h4`
  /* font-size: 18px; */
  margin: 0.6rem 0;
`;

const StyledIntro = styled.p`
  color: #7f7979;
  line-height: 1.6;
`;

const StyledReadingTime = styled.p`
  color: #514949;
  font-size: 14px;
`;

export default function RecipeItems({ posts }: Posts) {
  console.log(posts);
  return (
    <Layout>
      <StyledContent>
        <h3>Blog</h3>
        {/* <StyledGrid>
          {posts.map((item: Post) => {
            const { title, slug, thumbnail, intro, readingTime } = item.fields;
            return (
              <Link href={`/blog/${slug}`} passHref>
                <StyledLink>
                  <StyledCard key={item.sys.id}>
                    <StyledImage
                      src={thumbnail.fields.file.url}
                      alt={title}
                    />
                    <StyledBody>
                      <StyledTitle>{title}</StyledTitle>
                      {intro.length > 100 ? (
                        <StyledIntro>{intro.slice(0, 100)}...</StyledIntro>
                      ) : (
                        <StyledIntro>{intro}</StyledIntro>
                      )}
                      <StyledReadingTime>
                        Reading time: {readingTime}
                      </StyledReadingTime>
                    </StyledBody>
                  </StyledCard>
                </StyledLink>
              </Link>
            );
          })}
        </StyledGrid> */}
        <StyledContainer>
          {posts.map((item: Post) => {
            const { title, slug, thumbnail, intro, readingTime } = item.fields;
            return (
              <Link href={`/blog/${slug}`} passHref>
                <StyledLink>
                  <StyledCard key={item.sys.id}>
                    <div>
                    <StyledImage
                      src={thumbnail.fields.file.url}
                      alt={title}
                    />
                    </div>
                    <div>
                    <StyledBody>
                      <StyledCreatedAt>{moment(item.sys.createdAt).format("MMM Do YYYY")}</StyledCreatedAt>
                      <StyledTitle>{title}</StyledTitle>
                     
                        <StyledIntro>{intro}</StyledIntro>
                    
                      <StyledReadingTime>
                        Reading time: {readingTime}
                      </StyledReadingTime>
                    </StyledBody>
                    </div>
                  </StyledCard>
                </StyledLink>
              </Link>
            );
          })}
        </StyledContainer>
      </StyledContent>
    </Layout>
  );
}
