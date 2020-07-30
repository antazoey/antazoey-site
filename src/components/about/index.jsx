import React from 'react';
import { Button } from 'react-bootstrap';
import PDSiteStyle from './about.css';
import Style from '../../styles.css';

const pdSiteClasses = () => `${PDSiteStyle.PDSite}`;
const frameClasses = () => `${PDSiteStyle.Frame}`;
const buttonClasses = () => `${PDSiteStyle.SiteButton}`;
const messageClasses = () => `${PDSiteStyle.Message} ${Style.center}`;

const SoundScape = () => (
  <div>
    <div className={pdSiteClasses()}>
      <iframe
        className={frameClasses()}
        title="PatchDay HRT Support Site"
        src="http://www.patchdayhrt.com"
        frameBorder="0"
        allowFullScreen
      />
      <div className={messageClasses()}>
        <Button
          className={buttonClasses()}
          onClick={() => {
            window.location.href = 'http://www.patchdayhrt.com';
          }}
        >
          Go
        </Button>
      </div>
    </div>
  </div>
);

export default SoundScape;
