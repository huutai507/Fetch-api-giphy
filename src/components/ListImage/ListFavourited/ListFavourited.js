import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "../ListImage.css";
import Image from "../Image/Image";

import { addFavourited } from "../../../action/action";

function ListFavourited() {
  const dispatch = useDispatch();

  const listFavourited = useSelector((state) => state.listImage.listFavourited);
  const dispatchAddFavourited = (id, url) => dispatch(addFavourited(id, url));

  const handleClickFavourited = (id, url) => {
    dispatchAddFavourited(id, url);
  };

  return (
    <section className="listImage">
      <div className="content-img">
        {listFavourited.map((item, index) => (
          <Image
            id={item.id}
            url={item.url}
            handleClickFavourited={handleClickFavourited}
            listFavourited={listFavourited}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

export default ListFavourited;
