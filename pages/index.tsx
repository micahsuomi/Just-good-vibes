import { client } from "../helpers/createClient";
import Link from "next/link";
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {Layout} from "../components";
import { StyledContent } from "../styles/SharedStyles";

export async function getStaticProps() {
  const { items } = await client.getEntries({ content_type: "landingPage" });
  console.log("res", items);
  return {
    props: {
      landingItems: items,
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

export default function HomePage({ landingItems }) {
  console.log(landingItems);
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
          {landingItems.map((item) => {
            const { title, featuredImage, description } = item.fields;
            console.log(featuredImage);
            return (
              <div>
                <h3>{title}</h3>
                <StyledGrid>
                  {featuredImage.map((image) => {
                    return <StyledImage src={image.fields.file.url} />;
                  })}
                </StyledGrid>
                <p>{documentToReactComponents(description)}</p>
              </div>
            );
          })}
        </StyledContent>
      </>
    </Layout>
  );
}
