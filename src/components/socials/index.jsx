import { ContentLink } from '@components/shared';
import { idToIcon } from '@juliya/utils';
import React from 'react';

import './styles.less';

const idToSocialUrl = {
  GH: 'https://github.com/antazoey',
  TW: 'https://twitter.com/AdobePup',
  LI: 'https://www.linkedin.com/in/unparalleled-js/',
};

const Social = ({ socialId }) => {
  const image = (
    <img className="icon" src={idToIcon[socialId]} alt={socialId} />
  );
  const url = idToSocialUrl[socialId];
  return <ContentLink content={image} href={url} />;
};

const Socials = () => (
  <div className="footer">
    <Social socialId="GH" /> <Social socialId="TW" /> <Social socialId="LI" />
  </div>
);

export default Socials;
