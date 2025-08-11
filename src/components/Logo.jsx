import React from "react";
import "../css/Logo.css";

function Logo({ onClick }) {
  return (
    <div className="logo-container" onClick={onClick}>
      <img
        src="/assets/BootCampSimLogo2.png"
        alt="BootCamp Simulator Logo"
        className="logo-image"
        title="Click to return to main menu"
      />
    </div>
  );
}

export default Logo;
