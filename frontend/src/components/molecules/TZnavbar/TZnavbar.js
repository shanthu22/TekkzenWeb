import React, { useState } from "react";
import "./TZnavbar.css";
import Logo from "../../../assets/logo.png";
import TZbutton from "../../atoms/TZbutton/TZbutton";
import TZburgerIcon from "../../atoms/TZburgerIcon/TZburgerIcon";
import { useNavigate } from "react-router-dom";
const TZnavbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const HandleClick = (name) => {
    try {
      navigate("/" + name);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="TZnavbar">
      <div className="TZnavbar_elements">
        <div className="navbar_logo" onClick={(e) => HandleClick("")}>
          <img src={Logo} alt="logo" />
        </div>

        {/* Burger Icon */}
        <div className="burger-icon">
          <TZburgerIcon HandleOnClick={toggleMenu} />
        </div>

        {/* Menu Items */}
        <div className={showMenu ? "TZnavbar_right active" : "TZnavbar_right"}>
          <div className="Link" onClick={(e) => HandleClick("")}>
            Home
          </div>
          <div
            className="Link"
            name="about-us"
            onClick={(e) => HandleClick("about-us")}>
            About Us
          </div>
          <div className="Link" onClick={(e) => HandleClick("portfolio")}>
            Portfolio
          </div>
          <TZbutton
            className="navbar_button"
            HandleClick={HandleClick}
            pathName="contact-us">
            Talk to us
          </TZbutton>
        </div>
      </div>
    </div>
  );
};

export default TZnavbar;
