import React from 'react';
import { Link } from 'react-router-dom';

const linkClasses = 'app-button NerdFont NavItem';

const BarItems = () => {
  const item = (value, deliminator) => (
    <span>
      <Link to={`/${value.toLowerCase()}`} className={linkClasses}>
        {value}
      </Link>
      <span className="juliya-red">{deliminator}</span>
    </span>
  );
  return (
    <p>
      <span className="juliya-red">00</span>
      {item('About', '01')}
      {item('Code', '10')}
      {item('Art', '11')}
    </p>
  );
};

const NavBar = () => <div className="NavBar NerdFont">{BarItems()}</div>;

export default NavBar;
