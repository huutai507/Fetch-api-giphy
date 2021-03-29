import React from "react";
import "./Image.css";
import classnames from "classnames";

function Image({ id, url, handleClickFavourited, listFavourited }) {
  return (
    <div className="item-img">
      <img src={url} alt="Cat" />
      <i
        className={classnames("fas fa-heart heart-img", {
          "favorited-img": listFavourited.filter((value) => value.id === id)
            .length
        })}
        onClick={() => handleClickFavourited(id, url)}
      ></i>
    </div>
  );
}

export default Image;
