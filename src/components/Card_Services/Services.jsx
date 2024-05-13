import React from "react";
import "./Services.css";
const Services = (props) => {
  return (
    <>
      <div className="Services-Card">
        <div className="Icon-Img">
          <img src={props.icons} alt="" />
        </div>
        <h2 className="title-Services">{props.title}</h2>
        <p className="description-service">{props.description}</p>
        <hr className="divisor-description" />
        <a className="maisInfo" href="">
          Saiba Mais
        </a>
      </div>
    </>
  );
};

export default Services;
