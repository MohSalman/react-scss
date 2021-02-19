import { BrowserRouter, Route, Switch } from "react-router-dom";
import Path from "./Constant/RouterConstant";
import Layout from "./Layout";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Path.home} component={Layout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
