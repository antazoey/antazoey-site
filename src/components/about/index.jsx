import '@styles';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutJules = () => (
  <div>
    <br />
    <div className="contentText">
      Juliya Smith (a.k.a Jules) creates{' '}
      <Link to="/code">~/SoftwareProjects</Link> and{' '}
      <Link>&#647;&#633;&#592;</Link>.
    </div>
    <br />
    <div className="contentText">My Work</div>
  </div>
);

export default AboutJules;
