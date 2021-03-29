import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";

import "./ListImage.css";
import Image from "./Image/Image";

import { giphy } from "../../libs/giphy";
import { addListImage, addFavourited } from "../../action/action";
import LazyLoad from "react-lazyload";

function ListImage({ listFavourited }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [count, setCount] = useState(8);

  const listImage = useSelector((state) => state.listImage.content);

  const dispatchAddImages = (content) => dispatch(addListImage(content));
  const dispatchAddFavourited = (id, url) => dispatch(addFavourited(id, url));

  const fetchImages = async (event) => {
    if (event === undefined) {
      await giphy
        .search(input, { limit: count })
        .then(({ data }) => dispatchAddImages(data.slice(-8)))
        .catch((error) => console.log("error"));
    } else {
      if (event.charCode === 13) {
        setCount(8);
        await giphy
          .search(input, { limit: count })
          .then(({ data }) => dispatchAddImages(data.slice(-8)))
          .catch((error) => console.log("error"));
      }
    }
  };

  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };

  const handleClickFavourited = (id, url) => {
    dispatchAddFavourited(id, url);
  };

  const handleCount = (input) => {
    input === 8 ? setCount(count + input) : setCount(count + input);
  };

  useEffect(() => {
    localStorage.setItem("listFavourited", JSON.stringify(listFavourited));
  }, [listFavourited, listImage]);

  useEffect(() => {
    fetchImages();
  }, [count]);

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
        {/* <button className="btn-search" onClick={(event) => fetchImages(event)}>
          Search
        </button> */}
      </div>
      <div className="content-img">
        {listImage.map((item, index) => (
          <LazyLoad height={100}>
            <Image
              id={item.id}
              url={item.images.downsized.url}
              handleClickFavourited={handleClickFavourited}
              listFavourited={listFavourited}
              key={index}
            />
          </LazyLoad>
        ))}
      </div>
      <div
        className={classnames("listImage__pagination", {
          "pagination-hidden": !listImage.length
        })}
      >
        <i
          className={classnames("fas fa-chevron-left", {
            "pagination-left": count === 8
          })}
          onClick={() => handleCount(-8)}
        ></i>
        <i
          className={classnames("fas fa-chevron-right", {
            "pagination-right": count > 55
          })}
          onClick={() => handleCount(8)}
        ></i>
      </div>
    </section>
  );
}

export default ListImage;
