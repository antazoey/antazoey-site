import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import JumboStyle from './jumbotron.css';
import AppButtonStyle from '../../app-button-styles.css';
import Style from '../../styles.css';
import NavBar from '../navbar/index.jsx';

const jumboClasses = () => `${JumboStyle.jumbotron} ${Style.nerdFont}`;
const titleClasses = () =>
  `${JumboStyle.title} ${AppButtonStyle['title-app-button']}`;

const Jumbotron = ({ title }) => (
  <div className={jumboClasses()}>
    <h1 className="text-center">
      <Link to="/" className={titleClasses()}>
        {title}
      </Link>
    </h1>
    <NavBar />
  </div>
);

Jumbotron.propTypes = {
  title: PropTypes.string,
};

export default Jumbotron;
