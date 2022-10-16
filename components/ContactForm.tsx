import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 2.34rem;
  border: 1px solid var(--color-text-light);
  background-color: #fff;
  max-width: 100%;
  border-radius: 5px;
  @media screen and (min-width: 1000px) {
    border-radius: 25px 0 0 25px;
  }
`;

const StyledInputWrapper = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
`;
const StyledLabel = styled.label`
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 700;
`;

const StyledInput = styled.input`
  min-width: 22rem;
  padding: 1rem;
  margin-top: 0.7rem;
  border: 2px solid rgba(223, 217, 217, 0.5);
  border-radius: 5px;
  font-family: Roboto;
`;

const StyledTextArea = styled.textarea`
  padding: 1rem;
  min-width: 22rem;
  min-height: 15rem;
  margin-top: 0.7rem;
  border: 2px solid rgba(223, 217, 217, 0.5);
  border-radius: 5px;
  font-family: Roboto;
`;

const StyledSubmit = styled.button`
  width: 60%;
  padding: 0.7rem;
  border: none;
  background-color: var(--color-red-purple);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;
  border-radius: 10px;

  :hover {
    transform: scale(1.01);
    transition: 0.1s ease-in-out;
  }
`;
export const ContactForm = ({ token }) => {
  // console.log(process.env)
  const [state, handleSubmit] = useForm(token);
  if (state.succeeded) {
    return <p>Thanks for contacting us!</p>;
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputWrapper>
        <StyledLabel htmlFor="email">Email address</StyledLabel>
        <StyledInput
          id="email"
          type="email"
          name="email"
          placeholder="your email address"
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledLabel htmlFor="message">Your message</StyledLabel>
        <StyledTextArea
          id="message"
          name="message"
          placeholder="write your message here"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </StyledInputWrapper>
      <StyledSubmit type="submit" disabled={state.submitting}>
        Submit
      </StyledSubmit>
    </StyledForm>
  );
};
