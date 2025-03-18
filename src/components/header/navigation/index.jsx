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
      00{navigationButton('俳句')}
      01{navigationButton('Dev')}
      10{navigationButton('Art')}11
    </div>
  );
};

export default Navigation;
