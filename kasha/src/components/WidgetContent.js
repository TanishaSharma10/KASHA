import React from "react";
import "./css/WidgetContent.css";

const WidgetContent = () => {
  return (
    <div className=" widget__contents">
      <div className="widget__content">
        <img
          src="https://thumbs.dreamstime.com/b/animated-female-character-business-attire-brown-hair-purple-background-d-rendered-cartoon-professional-woman-suit-hands-319179906.jpg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>WOMAN</h5>
          <p>"Where there is a Woman, there is Magic"</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://static.vecteezy.com/system/resources/previews/008/294/873/original/cute-business-woman-cartoon-illustration-vector.jpg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>HERO</h5>
          <p>"She needed a Hero, so that's what she became"</p>
        </div>
      </div>
    </div>
  );
};

export default WidgetContent;