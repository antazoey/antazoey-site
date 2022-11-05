import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppButtonStyle from '@styles/buttons.css';
import Style from '@styles/styles.css';
import JumboStyle from './styles.css';
import Navigation from '@components/navigation/index.jsx';

const jumboClasses = () => `${JumboStyle.jumbotron} ${Style.nerdFont}`;
const titleClasses = () =>
  `${JumboStyle.title} ${AppButtonStyle['title-app-button']}`;

const ViewController = ({ title }) => (
  <div className={jumboClasses()}>
    <h1 className="text-center">
      <Link to="/" className={titleClasses()}>
        {title}
      </Link>
    </h1>
    <Navigation />
  </div>
);

ViewController.propTypes = {
  title: PropTypes.string,
};

export default ViewController;
