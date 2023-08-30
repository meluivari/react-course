import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type MovieProps = {
    img: string;
    title: string;
};

export function MovieRow({img, title}: MovieProps) {
    const [favorite, setFavorite] = useState(false);
    console.log('favorite', favorite);
    return (
        <div
            className="video-container"
            onClick={() => {
                setFavorite(!favorite);
            }}
        >
            <img src={img} alt="video thumb" className="video-thumb" />
            <p className="video-tite">{title}</p>
            <FontAwesomeIcon icon={faHeart} color={favorite ? "red" : "white"} />
        </div>
    )
}