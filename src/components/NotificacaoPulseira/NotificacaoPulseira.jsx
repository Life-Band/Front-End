import React from "react";
import "./NotificacaoPulseira.css";

function NotificacaoPulseira(props) {
  return (
    <div className="Notification">
      <div className="boxDoe">
        <img className="doeImg" src={props.profileUser} />
        <h2 className="h2Notfdoe">{props.nameUser}</h2>
        <img className="doeImg2" src={props.iconNotification} />

        <span className="NotfDate">{props.dateNotification}</span>
      </div>

      <div className="statusNotification">
        <h3 className="h3Status">STATUS:</h3>
        <span className="statusDoe" style={{ color: props.color }}>
          {props.statusNotification}
        </span>
      </div>
    </div>
  );
}

export default NotificacaoPulseira;
