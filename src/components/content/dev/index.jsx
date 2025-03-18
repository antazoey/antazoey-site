import { ProjectTitleBox } from '@components/content/shared';
import { ContentLink } from '@components/shared';
import '@styles';
import React from 'react';

import './styles.less';

const CodeProjectTitleBox = ({ title, dates, page }) => (
  <ProjectTitleBox title={title} dates={dates} page={page} icon="GH" />
);

const Ape = () => (
  <div>
    <CodeProjectTitleBox
      title="Ape"
      dates="2021-present"
      page="https://github.com/ApeWorX/ape"
    />
    <div className="rootContextText">
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
      page="https://github.com/code42/py42"
    />
    <div className="rootContextText">
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
      page="#patchday"
    />
    <div className="rootContextText">
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
      page="https://github.com/antazoey/norboard"
    />
    <div className="rootContextText">
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

const TreesHaveLegs = () => (
  <div>
    <CodeProjectTitleBox
      title="Trees Have Legs"
      dates="2023-present"
      github="https://github.com/antazoey/trees-have-legs"
    />
    <div className="contentText">
      A <ContentLink content="PyGame" href="https://www.pygame.org/" /> game
      where you have to save your friends by getting them to your bon-fire while
      trees comes alive and attack you.
    </div>
  </div>
);

const AudiusPy = () => (
  <div>
    <CodeProjectTitleBox
      title="audius-py"
      dates="2023-present"
      github="https://github.com/antazoey/audius-py"
    />
    <div className="contentText">
      An HTTP client and SDK for the Audius decentralized music platform.
    </div>
  </div>
);

const AfplayPy = () => (
  <div>
    <CodeProjectTitleBox
      title="afplay-py"
      dates="2023-present"
      github="https://github.com/antazoey/afplay-py"
    />
    <div className="contentText">
      A wrapper around macOS audio-file play command.
    </div>
  </div>
);

const CodeProjects = () => (
  <div>
    <h1 className="projectTypeTitle">Hired Work</h1>
    <br />
    <Ape />
    <br />
    <br />
    <Py42 />
    <br />
    <br />
    <br />

    <h1 className="projectTypeTitle">Python Projects</h1>
    <br />
    <TreesHaveLegs />
    <br />
    <br />
    <AudiusPy />
    <br />
    <br />
    <AfplayPy />
    <br />
    <br />
    <br />

    <h1 className="projectTypeTitle">Mobile Applications</h1>
    <br />
    <PatchDay />
    <br />
    <br />
    <br />

    <h1 className="projectTypeTitle">Micro-Electronics</h1>
    <br />
    <Norboard />
    <br />
    <br />
    <br />
  </div>
);

export default CodeProjects;
