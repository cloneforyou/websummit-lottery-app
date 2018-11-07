import React from "react";
import { Switch, Route } from "react-router";

import Lottery from "../../Lottery";

const App = () => (
  <Switch>
    <Route path="/" component={Lottery} />
  </Switch>
);

export default App;
