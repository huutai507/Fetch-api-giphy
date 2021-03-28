import React from "react";
import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header({ listFavourited }) {
  return (
    <header className="header">
      <nav className="header__menu">
        <ul className="header__menu-list">
          <li className="header__menu-item">
            Galler<b>easy</b>
          </li>
          <li className="header__menu-item">
            <b>Search</b>
          </li>
          <li className="header__menu-item">
            Favourites ({listFavourited.length})
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
