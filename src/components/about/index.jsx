import React from 'react';
import Styles from '@styles/styles.css';
import AboutStyles from './styles.css';

const styleClasses = () => `${AboutStyles.About} ${Styles.SharedText}`;

const AboutJules = () => (
  <div>
    <br />
    <div className={styleClasses()}>
      Jules creates ~/software and &#647;&#633;&#592;.
    </div>
  </div>
);

export default AboutJules;
