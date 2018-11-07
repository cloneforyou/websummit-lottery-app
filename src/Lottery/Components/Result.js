import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Title } from "./ui";
import Confetti from "react-confetti";
import SizeMe from "react-sizeme";
import styled from "styled-components";
import Logo from "./Logo"

const Value = styled(Title)`
display: inline-block;
font-size: 80px;
width: auto;
padding: 0 32px;
`

const FancyLink = styled(Link)`
  margin: 24px;
  color: white;
  font-size: 22px;
`

function Result(props) {
  console.log(props.location)
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(setLoading(false));
  }, 1000);
  return (
    <Wrapper>
      <Logo />
      {loading ? (
        <p>HOLA</p>
      ) : (
        <>
          <Confetti {...props.size} />
          <Title>You just won a...</Title>
          <Value>
            {props.location.state.discount}% discount!
          </Value>
          <FancyLink to="/">Next user</FancyLink>
        </>
      )}
    </Wrapper>
  );
}

const SizeMeResult = SizeMe({ monitorHeight: true })(Result);

export default SizeMeResult;
