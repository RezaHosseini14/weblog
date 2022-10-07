import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        paddingTop:"10rem"
      }}
    >
      <div className="snippet" data-title=".dot-flashing">
        <div className="stage">
          <div className="dot-flashing"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
