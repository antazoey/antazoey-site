import React from 'react';
import PropTypes from 'prop-types';
import jumboStyle from './jumbotron.css';
import style from '../../styles.css';
import NavBar from '../navbar/index.jsx';

const classes = `${jumboStyle.jumbotron} ${style.nerdFont}`;

const Jumbotron = ({ title, navSelected }) => (
  <div className={classes}>
    <h1 className="text-center">
      <strong>{title}</strong>
    </h1>
    <NavBar selected={navSelected} />
  </div>
);

Jumbotron.propTypes = {
  title: PropTypes.string,
  navSelected: PropTypes.number,
};

export default Jumbotron;
