import React from 'react';
import navStyle from './navbar.css';
import style from '../../styles.css';

const classes = `${navStyle.navbar} ${style.nerdFont}`;

const NavBar = () => (
  <div className={classes}>
    <p>
      <a href="">Web</a> | <a href="http://www.patchdayhrt.com">Mobile</a> |{' '}
      <a href="">Soon-to-be Blockchain Developer</a>
    </p>
  </div>
);

export default NavBar;
