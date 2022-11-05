import React from 'react';
import Style from '@styles/styles.css';
import SoundScapeStyles from './styles.css';

const soundScapeClasses = () => `${SoundScapeStyles.SoundScape}`;
const playerClasses = () => `${SoundScapeStyles.Player}`;
const titleClasses = () => `${SoundScapeStyles.Title} ${Style.nerdFont}`;

const SoundScape = () => (
  <div className={soundScapeClasses()}>
    <p className={titleClasses()}>
      SoundScape Interactive Sculpture and Audio Visualizer
    </p>
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
