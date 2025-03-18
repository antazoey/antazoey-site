import { theme } from '@components/shared';
import DefaultPills from '@images/default_pills.png';
import DoubleSites from '@images/double_sites.png';
import FindSettings from '@images/find_settings.png';
import NewPillButton from '@images/new_pill_button.png';
import SelectedPillsTab from '@images/selected_pills_tab.png';
import SetPillProps from '@images/set_pill_props.png';
import SetSettings from '@images/set_settings.png';
import SimpleSites from '@images/simple_sites.png';
import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

import './styles.less';

const boxSx = {
  bgcolor: 'background.paper',
  boxShadow: 1,
  borderRadius: 2,
  minWidth: 300,
};

const PatchDay = () => (
  <ThemeProvider theme={theme}>
    <Box className="pdBanner" sx={boxSx}>
      <Box className="pdBannerTitle">PatchDay /Help</Box>
      <Button
        variant="outline-primary"
        className="storeButton"
        onClick={() => {
          window.location.href =
            'https://itunes.apple.com/us/app/patchday-hrt-schedule/id1253637065?mt=8';
        }}
      />
    </Box>

    <br />

    <Box sx={boxSx}>
      <br />

      <Box>
        <div>
          <h2 className="pdTitle">best hrt ever</h2>
        </div>
        <Link className="pdLink" to="#Hormones">
          Hormones
        </Link>
        <Link className="pdLink" to="#Pills">
          Pills
        </Link>
        <Link className="pdLink" to="#Sites">
          Sites
        </Link>
      </Box>
      <br />
      <Box id="Hormones">
        <a title="Hormones" />
        <div>
          <h2 className="pdTitle">Hormones</h2>
        </div>
        <p className="contentText">
          The <i>Hormones</i> view is the first view you see when opening in the
          app. It displays the hormones in the current schedule, which start off
          blank.
        </p>
        <p className="contentText">
          Notice the gear icon in the top right corner. It leads to the settings
          view, which mostly controls the hormones schedule.
        </p>
        <img src={FindSettings} alt={'Find settings'} />
        <p className="contentText">
          Ensure the following settings are accurate; this is how you create
          your schedule.
        </p>
        <p className="contentText">
          <span style={{ color: 'green' }}>Delivery method</span>: patches,
          injection, gel
        </p>
        <p className="contentText">
          <span style={{ color: 'green' }}>Expiration</span> interval: duration
        </p>
        <p className="contentText">
          <span style={{ color: 'green' }}>Quantity</span>: number of patches
        </p>
        <img src={SetSettings} alt="Set Settings" />
      </Box>
      <br />
      <br />
      <Box id="Pills">
        <div>
          <h2 className="pdTitle">Pills</h2>
        </div>
        <p className="contentText">
          The pills view is for extra pills you take in your schedule, such as
          Spironolactone or Progesterone.
        </p>
        <img src={SelectedPillsTab} alt="Pills Tab" />
        <p className="contentText">
          Select a pill from the list to edit or take it.
        </p>
        <img src={DefaultPills} alt="Default pills" />
        <p className="contentText">
          Or, to add pills, use the plus arrow in the top right corner of the
          Pills View.
        </p>
        <img src={NewPillButton} alt="New pill button" />
        <p className="contentText">
          By inserting a new pill (or tapping on / editing a current pill), you
          can adjust its properties.
        </p>
        <img src={SetPillProps} alt="Set pill props" />
      </Box>
      <br />
      <Box id="Sites">
        <div>
          <h2 className="pdTitle">Sites</h2>
        </div>
        <p className="contentText">
          Create <i>sites</i> in the order you rotate through them. You can
          create repeats if needed. Order them how you want; as you change
          patches (or rotate injection sites), PatchDay tells you the next
          location automatically.
        </p>
        <img src={SimpleSites} alt="Simple sites" />
        <p>
          Another use case might be that you use the same site 2x in a row. Here
          is how you would achieve that: Add more sites with the green plus
          button and then use the name picker to select the names of the other
          sites. Also choose the corresponding site image if you want the full
          effect. Here is what that would look like:
        </p>
        <img src={DoubleSites} alt="Double sites" />
      </Box>
    </Box>

    <Box sx={boxSx}>
      <Box className="pdTitle">Privacy Policy</Box>
      <br />
      <Box className="contentText">
        I, Juliya Smith, the developer of "PatchDay - HRT Schedule" iOS app and
        other related software, do not collect, view, sell, or use any user
        data.
      </Box>
    </Box>

    <br />
    <br />
  </ThemeProvider>
);

export default PatchDay;
