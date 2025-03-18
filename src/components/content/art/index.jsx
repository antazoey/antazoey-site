import { ProjectTitleBox } from '@components/content/shared';
import '@styles';
import React from 'react';

import { ContentLink } from '../../shared';

const AntazoeyVideo = () => (
  <div>
    <ProjectTitleBox title="Video" dates="2022-present" icon="YT" />
    <div className="contentText">
      See my{' '}
      <ContentLink
        content="YouTube Channel"
        href="https://www.youtube.com/@Antazoey"
      />
      {' '}for videos on exploring, outdoors, coding, foraging, snowboarding,
      mountain boarding, off-road motorcycling, and other adventures.
    </div>
  </div>
);

const AntazoeyMusic = () => (
  <div>
    <ProjectTitleBox
      title="Music"
      dates="2007-present"
      page="https://antazoey.bandcamp.com/album/divine-office"
      icon="BC"
    />
    <div className="rootContextText">
      Wilder is an overly-dramatic, industrial, noisy, performance-ridden,
      extra-terrestrial, attention-seeking, artsy, musician who will never
      return to the Mother Planet.
    </div>
  </div>
);

const Soundscape = () => (
  <div>
    <ProjectTitleBox
      title="SoundScape Spectrometer"
      dates="2017"
      page="https://www.youtube.com/watch?v=ndX4ULw5S74"
      icon="YT"
    />
    <div className="rootContextText">
      A light in a dark room illuminates a microphone facing a series of
      circular white concave disks on drum stands. There are left-over colors
      projected onto the disks. As you speak into the microphone, the colors
      change. Your pitch affects the size of the color beams, and your volume
      affects where the beams go. You can find the source code{' '}
      <ContentLink
        content="here"
        href="https://github.com/antazoey/soundscape"
      />{' '}
      but note that this was very much a hack.
    </div>
  </div>
);

const BounceProject = () => (
  <div>
    <ProjectTitleBox
      title="Bounce Project"
      dates="2017"
      page="https://github.com/antazoey/bounce-project"
      icon="GH"
    />
    <div className="rootContextText">
      An iPad rests on a pedestal in a quiet room in an art museum. It is
      surrounded by five studio monitors, awaiting instruction. The iPad shows
      an application with a single button that says "Bounce" in the center of
      it. As soon as you press the button, you immediately hear the combination
      of five randomly selected samples; one for each monitor. There are 5^5
      (3125) potential combinations of sounds you can get from this device. Most
      of the sounds are quirky and cute and you can't help but want to press
      more. You eventually are pressing the button as fast as you can, hearing
      strings of sounds back-to-back until your amusement fades and you move on
      from the once-quiet room.
    </div>
  </div>
);

const ArtProjects = () => (
  <div>
    <AntazoeyVideo />
    <br />
    <br />
    <AntazoeyMusic />
    <br />
    <br />
    <Soundscape />
    <br />
    <br />
    <BounceProject />
    <br />
    <br />
  </div>
);

export default ArtProjects;
