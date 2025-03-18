import '@styles';
import '@styles';
import React from 'react';
import { Link } from 'react-router-dom';

const Haiku = () => (
  <div>
    <div className="rootContextText">Welcome to my domain,</div>
    <div className="rootContextText">
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
    <div className="rootContextText">Won't you look around?</div>
  </div>
);

export default Haiku;
