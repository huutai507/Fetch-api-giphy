import "./App.css";
import React from "react";
import { useSelector } from "react-redux";
import { Footer, Header, ListImage, ListFavourited } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const listFavourited = useSelector((state) => state.listImage.listFavourited);
  const listImage = useSelector((state) => state.listImage.content);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="wrapper">
            <Header listFavourited={listFavourited} />
            <div className="content">
              <ListImage listFavourited={listFavourited} />
            </div>
            <Footer listImage={listImage} />
          </div>
        </Route>
        <Route exact path="/favourited">
          <div className="wrapper">
            <Header listFavourited={listFavourited} />
            <div className="content">
              <ListFavourited />
            </div>
            <Footer listImage={[]} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
