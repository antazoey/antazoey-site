import '@styles';
import '@styles';
import React from 'react';
import { Link } from 'react-router-dom';

const Haiku = () => (
  <div>
    <div className="contentText">Welcome to my domain,</div>
    <div className="contentText">
      Of{' '}
      <Link className="contentLink" to="/dev">
        ~/SoftwareProjects
      </Link>{' '}
      and{' '}
      <Link className="contentLink" to="/art">
        &#647;&#633;&#592;
      </Link>
      ,
    </div>
    <div className="contentText">Won't you look around?</div>
  </div>
);

export default Haiku;
