import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './styles.less';

const NavigationItems = () => {
  const item = (value, deliminator) => (
    <span>
      <Link to={`/${value.toLowerCase()}`} className={Styles.navigationItem}>
        {value}
      </Link>
      <span className={Styles.number}>{deliminator}</span>
    </span>
  );
  return (
    <p>
      <span className={numStyle}>00</span>
      {item('About', '01')}
      {item('Code', '10')}
      {item('Art', '11')}
    </p>
  );
};

const Navigation = () => <div className={classes}>{NavigationItems()}</div>;

export default Navigation;
