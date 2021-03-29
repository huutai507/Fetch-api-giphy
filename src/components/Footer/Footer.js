import React from "react";
import classnames from "classnames";
import "./Footer.css";

function Footer({ listImage }) {
  return (
    <footer className="footer">
      <ul
        className={classnames("menu__footer-list", {
          "footer-hidden": listImage.length
        })}
      >
        <li className="menu__footer-item">Gallereasy POC web app</li>
        <li className="menu__footer-item">2359 Media</li>
      </ul>
    </footer>
  );
}

export default Footer;
