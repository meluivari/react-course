import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../components/styles.css";
import React, { useState } from "react";

type MovieProps = {
  title: string;
  img?: string;
  info?: string;
};

export function MovieRow({ img, title }: MovieProps) {
  const [favorite, setFavorite] = useState(false);

  const onMovieClick = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="video-container" onClick={onMovieClick}>
      <img src={img} alt="video thumb" className="video-thumb" />
      <div>
        <p>{title}</p>
      </div>
      <FontAwesomeIcon icon={faHeart} color={favorite ? "#f00" : "#ddd"} />
    </div>
  );
}
