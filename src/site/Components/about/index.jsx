import React from "react";
import AboutStyles from "./about.css";
import Styles from "../../styles.css";
import Resume from "../resume";

const styleClasses = () => `${AboutStyles.About} ${Styles.SharedText}`;

const AboutJules = () => (
  <div>
    <Resume />
    <br />
    <div className={styleClasses()}>
      Jules creates ~/software and &#647;&#633;&#592;.
    </div>
  </div>
);

export default AboutJules;
