import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ listFavourited }) {
  return (
    <header className="header">
      <nav className="header__menu">
        <ul className="header__menu-list">
          <Link to="/">
            <li className="header__menu-item">
              Galler<b>easy</b>
            </li>
          </Link>
          <li className="header__menu-item">
            <Link to="/">
              <b>Search</b>
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/favourited">Favourites ({listFavourited.length})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
