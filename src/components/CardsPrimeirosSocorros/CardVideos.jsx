import "./CardsVideos.css";
import React from "react";
import { Link } from "react-router-dom";


const CardVideos = (props) => {
  return (
    <Link to={props.link} target="_blank">
     <div className="container-Card-Videos">
        <img src={props.image} alt="" />
        {props.crises && <h2 className="title-Crises">{props.crises}</h2>}
      </div>
    </Link>
  );
};
export default CardVideos;
