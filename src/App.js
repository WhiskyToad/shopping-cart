import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import ItemPage from "./Components/ItemPage";
import './Components/CSS/App.css'

const App = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/item" component={ItemPage} />
      </Switch>
    </HashRouter>
  );
};

export default App;