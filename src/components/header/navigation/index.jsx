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
      00{navigationButton('Haiku')}
      01{navigationButton('Code')}
      10{navigationButton('Art')}11
    </div>
  );
};

export default Navigation;
