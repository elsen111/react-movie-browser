import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";
import Header from "./components/Header";
import Watched from "./components/Watched";
import Favourites from "./components/WatchList";
import { GlobalContextProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/favourites" component={Favourites} />
          <Route exact path="/watched" component={Watched} />
        </Switch>
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;
