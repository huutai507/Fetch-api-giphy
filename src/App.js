import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Footer, Header, ListImage, ListFavourited } from "./components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const listFavourited = useSelector((state) => state.listImage.listFavourited);
  return (
    <div className="wrapper">
      <Header listFavourited={listFavourited} />
      <div className="content">
        <ListImage listFavourited={listFavourited} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
