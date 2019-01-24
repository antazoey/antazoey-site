import React from 'react';
import SoundScapeStyle from './soundscape.css';

const soundScapeClasses = () => `${SoundScapeStyle.SoundScape}`;
const playerClasses = () => `${SoundScapeStyle.Player}`;

const SoundScape = () => (
  <div className={soundScapeClasses()}>
    <iframe
      className={playerClasses()}
      title="SoundScape Audio Visualizer"
      src="https://www.youtube.com/embed/ndX4ULw5S74"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default SoundScape;
