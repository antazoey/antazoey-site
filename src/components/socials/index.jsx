import { idToIcon } from '@antazoey/utils';
import { ContentLink } from '@components/shared';
import React from 'react';

import './styles.less';

const idToSocialUrl = {
  GH: 'https://github.com/antazoey',
  TW: 'https://twitter.com/antazoey',
  MA: 'https://hachyderm.io/@antazoey">Mastodon',
};

const Social = ({ socialId }) => {
  const image = (
    <img className="icon" src={idToIcon[socialId]} alt={socialId} rel="me" />
  );
  const url = idToSocialUrl[socialId];
  return <ContentLink content={image} href={url} />;
};

const Socials = () => (
  <div className="socialList">
    <Social socialId="GH" />
    <Social socialId="TW" />
    <Social socialId="MA" />
  </div>
);

export default Socials;
