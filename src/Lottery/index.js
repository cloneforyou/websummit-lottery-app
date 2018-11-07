import React from "react";
import { Switch, Route } from "react-router";
import { createGlobalStyle } from 'styled-components';

import Email from "./Components/Email";
import Result from "./Components/Result";

const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Barlow:400,500,800,900);
`
const Lottery = () => (
  <>
  <Switch>
    <Route path="/" exact component={Email} />
    <Route path="/result" component={Result} />
  </Switch>
  <GlobalStyle/>
  </>
);

export default Lottery;
