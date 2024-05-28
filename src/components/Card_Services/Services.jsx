import React from "react";
import "./Services.css";
import { useTranslation } from "react-i18next";

const Services = (props) => {
  const { t } = useTranslation();
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
          {t("SaibaMais")}
        </a>
      </div>
    </>
  );
};

export default Services;
