import React from 'react';

const SoundScape = () => (
  <div className="SoundScape">
    <p className="SoundScapeTitle NerdFont">
      SoundScape Interactive Sculpture and Audio Visualizer
    </p>
    <iframe
      className="Player"
      title="SoundScape Audio Visualizer"
      src="https://www.youtube.com/embed/ndX4ULw5S74"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default SoundScape;
