import React from 'react';
import Resume from 'Components/Resume';
import { Link } from 'react-router-dom';

const AboutJules = () => (
  <div>
    <Resume />
    <br />
    <br />
    <br />
    <br />
    <div className="About SharedText center">
      Jules creates <Link to="/code">~/SoftwareProjects</Link> and{' '}
      <Link to="/art">&#647;&#633;&#592;</Link>.
    </div>
  </div>
);

export default AboutJules;
