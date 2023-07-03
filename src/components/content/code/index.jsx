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
      I am a principal mad-scientist for{' '}
      <ContentLink content="ApeWorX" href="https://apeworx.io/" />; we are
      building a multi-blockchain, Python development framework with a
      plugin-based architecture. It can be used for debugging, testing, and
      scripting smart-contract projects, including features like coverage,
      multi-chain connection management, project-templating, rich data displays,
      and an interactive web3 console.
    </div>
  </div>
);

const Py42 = () => (
  <div>
    <CodeProjectTitleBox
      title="Py42 and Incydr"
      dates="2019-2021"
      github="https://github.com/code42/py42"
    />
    <div className="contentText">
      This was the pythonic way to talk to Code42's Incydr application, and it
      allowed us to integrate with various security tools of the time, including
      SIEM tools like Splunk and response tools like Palo-Alto Networks XSOAR.
      Additionally, we built a CLI that could send data and respond to
      data-leaks in your organization. We also developed a Gmail integration
      (C#) that detected file-leak events.
    </div>
  </div>
);

const PatchDay = () => (
  <div>
    <CodeProjectTitleBox
      title="PatchDay"
      dates="2016-present"
      github="https://github.com/antazoey/patchday-ios"
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
      github="https://github.com/antazoey/norboard"
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
