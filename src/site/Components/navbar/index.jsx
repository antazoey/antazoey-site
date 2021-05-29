import React from "react";
import { Link } from "react-router-dom";
import NavStyle from "./navbar.css";
import Style from "../../styles.css";
import ButtonStyle from "../../app-button-styles.css";

const classes = `${NavStyle.navBar} ${Style.nerdFont}`;
const linkClass = `${ButtonStyle["app-button"]} ${Style.nerdFont} ${
  NavStyle.navItem
}`;

const BarItems = () => {
  const numStyle = Style["juliya-red"];
  const item = (itemClasses, value, deliminator) => (
    <span>
      <Link to={`/${value.toLowerCase()}`} className={itemClasses}>
        {value}
      </Link>
      <span className={numStyle}>{deliminator}</span>
    </span>
  );
  return (
    <p>
      <span className={numStyle}>00</span>
      {item(linkClass, "About", "01")}
      {item(linkClass, "Code", "10")}
      {item(linkClass, "Art", "11")}
    </p>
  );
};

const NavBar = () => <div className={classes}>{BarItems()}</div>;

export default NavBar;
