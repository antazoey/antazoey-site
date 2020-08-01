import React from 'react';
import SoundScape from './soundscape';
import Yingthi from './yingthi';
import ArtStyle from './art.css';

const Art = () => (
  <div className={ArtStyle.Art}>
    <SoundScape />
    <Yingthi />
  </div>
);

export default Art;
