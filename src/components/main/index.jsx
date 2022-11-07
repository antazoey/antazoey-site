import Navigation from '@components/navigation/index.jsx';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import './styles.less';

const MainContainer = () => (
  <div id="viewController">
    <h1 className="">
      <Link to="/" id="websiteTitle">
        Juliya Smith
      </Link>
    </h1>
    <Navigation />
  </div>
);

MainContainer.propTypes = {
  title: PropTypes.string,
};

export default MainContainer;
