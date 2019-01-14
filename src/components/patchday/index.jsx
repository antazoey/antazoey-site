import React from 'react';
import { Button } from 'react-bootstrap';
import pdLogo from '../../resources/pdlogo.png';
import PDStyle from './patchday.css';
import Style from '../../styles.css';

const pdClasses = () => `${Style.center}`;

const pdButtonClasses = () => `${PDStyle.pdButton}`;

const pdImageClasses = () => `${PDStyle.pdImage}`;

const PDButton = () => (
  <div className={pdClasses()}>
    <Button className={pdButtonClasses()}>
      <img src={pdLogo} alt="PatchDay App Logo" className={pdImageClasses()} />
    </Button>
  </div>
);

export default PDButton;
