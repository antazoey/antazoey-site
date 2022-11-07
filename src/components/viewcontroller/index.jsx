import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navigation from '@components/navigation/index.jsx';

import './styles.less';

const ViewController = ({ title }) => (
  <div id="viewController">
    <h1 className="text-center">
      <Link to="/" id="websiteTitle">
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
