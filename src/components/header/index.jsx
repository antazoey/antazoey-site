import Navigation from '@components/header/navigation/index.jsx';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import './styles.less';

const Header = () => (
  <div id="header">
    <h1>
      <Link to="/" id="websiteTitle">
        Antazoey
      </Link>
    </h1>
    <Navigation />
    <hr />
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
