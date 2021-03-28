import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../ListImage.css";
import Image from "../Image/Image";

import { giphy } from "../../../libs/giphy";
import { addListImage, addFavourited } from "../../../action/action";

function ListFavourited() {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [favourited, setFavoutired] = useState([]);

  const listFavourited = useSelector((state) => state.listImage.listFavourited);
  console.log("list favourited", listFavourited);
  const dispatchAddImages = (content) => dispatch(addListImage(content));
  const dispatchAddFavourited = (id, url) => dispatch(addFavourited(id, url));

  const fetchImages = async (event) => {
    if (event.charCode === 13) {
      const data = await giphy.search(input, { limit: 8 });
      dispatchAddImages(data);
    }
  };

  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };

  const handleClickFavourited = (id, url) => {
    dispatchAddFavourited(id, url);
  };

  useEffect((type) => {
    switch (type) {
      case "search":
    }
  }, []);

  return (
    <section className="listImage">
      <div className="listImage__input">
        <input
          type="text"
          className="listImage__input-search"
          placeholder="Start searching for images"
          onChange={handleChangeInput}
          onKeyPress={fetchImages}
        />
      </div>
      <div className="content-img">
        {listFavourited.map((item, index) => (
          <Image
            id={item.id}
            url={item.url}
            handleClickFavourited={handleClickFavourited}
            listFavourited={listFavourited}
          />
        ))}
      </div>
    </section>
  );
}

export default ListFavourited;
