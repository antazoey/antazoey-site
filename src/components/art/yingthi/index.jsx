import React from 'react';
import YingthiImage from '../../../images/yingthi.jpg';
import YingthiStyle from './yingthi.css';
import Style from '../../../styles.css';

const titleClasses = `${YingthiStyle.Title} ${Style.nerdFont}`;

const Yingthi = () => (
  <div className={YingthiStyle.Yingthi}>
    <p className={titleClasses}>Yingthi Music</p>
    <a href="https://yingthi.bandcamp.com/">
      <img
        className={YingthiStyle.Image}
        src={YingthiImage}
        alt="Yingthi Album Art"
      />
    </a>
  </div>
);

export default Yingthi;
