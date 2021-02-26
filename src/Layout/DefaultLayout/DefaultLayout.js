import React from "react";
import { Route, Switch } from "react-router-dom";
import Path from "../../Constant/RouterConstant";
import About from "../../Pages/About";
import Career from "../../Pages/Career";
import Home from "../../Pages/HomePage";
import Pricing from "../../Pages/Pricing";
import TabSwitchAnimation from "../../Pages/TabSwitchAnimation/TabSwitchAnimation";

const DefaultLayout = () => {
  return (
    <Switch>
      <Route exact path={Path.homePage} component={Home} />
      <Route exact path={Path.tabSwitchAnimation} component={TabSwitchAnimation} />
      <Route exact path={Path.about} component={About} />
      <Route exact path={Path.career} component={Career} />
      <Route exact path={Path.pricing} component={Pricing} />
    </Switch>
  );
};

export default DefaultLayout;
