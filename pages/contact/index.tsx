import React from "react";
import styled from "styled-components";

import { client } from "../../helpers/createClient";
import { Contact } from "../../types";
import { Layout, ContactForm } from "../../components";
import { StyledContent } from "../../styles/SharedStyles";

export async function getStaticProps() {
  const { items } = await client.getEntries({ content_type: "contactForm" });
  return {
    props: {
      formItems: items,
    },
  };
}
const StyledContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-gap: 0;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  box-shadow: 0.3rem 0.2rem 1rem rgba(99, 95, 95, 0.5);
  overflow: hidden;
  border-radius: 25px;

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const StyledFormLeft = styled.div`
  @media screen and (max-width: 1000px) {
    grid-row: 2/2;
  }
`;

const StyledFormRight = styled.div`
  display: none;

  @media screen and (min-width: 1000px) {
    display: block;
    background-color: var(--color-red-purple);
    padding: 2rem 3rem;
    width: 400px;
    height: 530px;
    border-radius: 0 25px 25px 0;
    p {
    }
  }
`;

const StyledFormTitle = styled.h3`
  color: #fff;
`;
const StyledFormDescription = styled.p`
  color: #fff;
  line-height: 1.8;
`;
export default function ContactPage({ formItems }: Contact) {
  return (
    <Layout>
      <StyledContent isContactForm>
        {formItems.map(({ fields, sys }) => {
          const { title, description, formToken } = fields;
          return (
            <StyledContainer key={sys.id}>
              <StyledFormLeft>
                <ContactForm token={formToken} />
              </StyledFormLeft>
              <StyledFormRight>
                <StyledFormTitle>{title}</StyledFormTitle>
                <StyledFormDescription>{description} </StyledFormDescription>
              </StyledFormRight>
            </StyledContainer>
          );
        })}
      </StyledContent>
    </Layout>
  );
}
