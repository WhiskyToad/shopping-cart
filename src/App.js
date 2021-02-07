import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import ItemPage from "./Components/ItemPage";
import './Components/CSS/App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/item" component={ItemPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;