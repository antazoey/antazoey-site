import React from 'react';
import { Link } from 'react-router-dom';

import './styles.less';

const Navigation = () => {
  const navigationButton = (titleName) => (
    <Link to={`${titleName.toLowerCase()}`} className="navigationButton">
      {titleName}
    </Link>
  );
  return (
    <div id="navigation">
      <span className="navigationNumber">
        00
        {navigationButton('About')}
        01
        {navigationButton('Code')}
        10
        {navigationButton('Art')}
        11
      </span>
    </div>
  );
};

export default Navigation;
