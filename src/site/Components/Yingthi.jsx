import React from 'react';
import YingthiImage from 'Images/yingthi.jpg';

const Yingthi = () => (
  <div className="YingthiTitle NerdFont">
    <p className="YingthiTitle NerdFont">Wilder Music (fka Yingthi)</p>
    <a href="https://yingthi.bandcamp.com">
      <img
        className="YingthiImage"
        src={YingthiImage}
        alt="Yingthi Album Art"
      />
    </a>
  </div>
);

export default Yingthi;
