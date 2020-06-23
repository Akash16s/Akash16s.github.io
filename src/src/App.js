import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/headerComponent";
import HomePage from "./components/homepage/homePageComponent";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <div>
            <Route exact path="/" component={HomePage}></Route>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
