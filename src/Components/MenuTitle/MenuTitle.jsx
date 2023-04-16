import React from "react";
import "./MenuTitle.css";
function MenuTitle({ icon, title }) {
  return (
    <div className="wrapper__menu">
      <div className="main__menu">
        <div className="icon__menu">{icon}</div>

        <div className="title__menu">{title}</div>
      </div>
    </div>
  );
}

export default MenuTitle;
