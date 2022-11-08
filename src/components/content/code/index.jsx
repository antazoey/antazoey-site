import { ProjectTitleBox } from '@components/content/shared';
import { ContentLink } from '@components/shared';
import '@styles';
import React from 'react';

import './styles.less';

const CodeProjectTitleBox = ({ title, dates, github }) => (
  <ProjectTitleBox title={title} dates={dates} github={github} icon="GH" />
);

const Ape = () => (
  <div>
    <CodeProjectTitleBox
      title="Ape"
      dates="2021-present"
      github="https://github.com/ApeWorX/ape"
    />
    <div className="contentText">
      I am the principal engineer for{' '}
      <ContentLink content="ApeWorX" href="https://apeworx.io/" />, and I am
      building a multi-blockchain, Python development framework with a
      plugin-based architecture and a vibrant community. This includes the world
      of Starknet and other potentially non-EVM ecosystems.
    </div>
  </div>
);

const Py42 = () => (
  <div>
    <CodeProjectTitleBox
      title="Py42"
      dates="2019-2021"
      github="https://github.com/code42/py42"
    />
    <div className="contentText">
      I implemented many features in the Python SDK and CLI for the Code42
      Insyder suite of security tools and integrated Insyder with Splunk,
      Palo-Alto Networks XSOAR, and other popular enterprise-level security
      platforms at the time.
    </div>
  </div>
);

const PatchDay = () => (
  <div>
    <CodeProjectTitleBox
      title="PatchDay"
      dates="2016-present"
      github="https://github.com/unparalleled-js/patchday-ios"
    />
    <div className="contentText">
      An{' '}
      <ContentLink
        content="iOS app"
        href="https://apps.apple.com/us/app/patchday-hrt-schedule/id1253637065"
      />{' '}
      for managing HRT / menopause medication schedules.
    </div>
    .
  </div>
);

const Norboard = () => (
  <div>
    <CodeProjectTitleBox
      title="Norboard"
      dates="2019"
      github="https://github.com/unparalleled-js/norboard"
    />
    <div className="contentText">
      An Arduino hobby project where you can play snake using a small screen and
      a potentiometer. As you score points, an LED blinks. See this{' '}
      <ContentLink
        content="demo"
        href="https://www.youtube.com/shorts/gfGgRGrh3HQ"
      />{' '}
      to watch it work!
    </div>
  </div>
);

const CodeProjects = () => (
  <div>
    <Ape />
    <br />
    <br />
    <PatchDay />
    <br />
    <br />
    <Py42 />
    <br />
    <br />
    <Norboard />
  </div>
);

export default CodeProjects;
