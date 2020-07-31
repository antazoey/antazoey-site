import React from 'react';
import AboutStyles from './about.css';
import Styles from '../../styles.css';
import Resume from '../resume';

const styleClasses = () =>
  `${AboutStyles.About} ${AboutStyles.SharedText} ${Styles.nerdFont}`;

const AboutJules = () => (
  <div>
    <Resume />
    <br />
    <div className={styleClasses()}>
      Jules is a software engineer and an &#647;s&#7433;&#647;&#633;&#592;.
    </div>
  </div>
);

export default AboutJules;
