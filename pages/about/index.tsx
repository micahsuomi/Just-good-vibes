import React from "react";
import { client } from "../../helpers/createClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";

import { AboutPageProps } from "../../types";
import {Layout} from "../../components";
import { StyledContent } from "../../styles/SharedStyles";

export async function getStaticProps() {
	const { items } = await client.getEntries({ content_type: "about" });
	console.log("items", items);
	return {
		props: {
			about: items,
		},
	};
}

const StyledImage = styled.img`
  width: 100%;
`;

export default function AboutPage({ about }: AboutPageProps) {
	console.log(about);
	return (
		<Layout>
			<StyledContent>
				{about.map((item: any) => {
					const { title, featuredImage, description } = item.fields;
					return (
						<div key={item.sys.id}>
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
