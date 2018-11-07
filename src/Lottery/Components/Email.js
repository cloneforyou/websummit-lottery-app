import React, { useState } from "react";
import { postEmail, getDiscount } from "../utils";
import styled from 'styled-components';
import { Wrapper, Title, Input, SubmitButton } from "./ui";
import Logo from './Logo'

const Form = styled.form`
  background-color: rgba(0, 41, 56, 0.75);
  width: 90%;
  max-width: 800px;
  margin: 24px auto;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;
`
function Email({ history }) {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const discount = getDiscount()
    postEmail(email, discount).then(user => {
      history.push("/result", {discount});
    });
  }

  return (
    <Wrapper>
      <Logo />
      <Title fixed>ReactJS Academy Lottery</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          placeholder="Your best email ;-)"
          onChange={e => setEmail(e.target.value)}
        />
        <SubmitButton type="submit">SUBMIT</SubmitButton>
      </Form>
    </Wrapper>
  );
}

export default Email;
