import React from 'react';
import SoundScape from '@components/art/soundscape';
import Yingthi from '@components/art/yingthi';
import ArtStyle from './art.css';

const Art = () => (
  <div className={ArtStyle.Art}>
    <SoundScape />
    <Yingthi />
  </div>
);

export default Art;
