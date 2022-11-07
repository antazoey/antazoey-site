import React from 'react';
import { Link } from 'react-router-dom';
import Styles from '@styles/styles.css';
import LocalStyles from './styles.css';

const contentStyles = () => `${LocalStyles.about} ${Styles.sharedText}`;

const AboutJules = () => (
  <div>
    <br />
    <div className={contentStyles()}>
      Juliya Smith (a.k.a Jules) creates{' '}
      <Link to="/code">~/SoftwareProjects</Link> and{' '}
      <Link>&#647;&#633;&#592;</Link>.
    </div>
    <br />
    <div className={contentStyles()}>My Work</div>
  </div>
);

export default AboutJules;
