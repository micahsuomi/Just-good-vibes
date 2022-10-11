import { client } from "../../helpers/createClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";

import {Layout} from "../../components";
import { StyledContent } from "../../styles/SharedStyles";

export async function getStaticProps() {
  const { items } = await client.getEntries({ content_type: "about" });
  console.log("items", items);
  return {
    props: {
      data: items,
    },
  };
}

const StyledImage = styled.img`
  width: 100%;
`;

export default function AboutPage({ data }) {
  console.log(data);
  return (
    <Layout>
      <StyledContent>
      {data.map((item) => {
        const { title, featuredImage, description } = item.fields;
        return (
          <div>
            <h3>{title}</h3>
            <StyledImage src={featuredImage.fields.file.url} />
            <p>{documentToReactComponents(description)}</p>
          </div>
        );
      })}
      </StyledContent>
    </Layout>
  );
}
