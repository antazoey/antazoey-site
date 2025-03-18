import { createTheme } from '@mui/system';
import '@styles';
import * as PropTypes from 'prop-types';
import React from 'react';

class ContentLink extends React.Component {
  render() {
    let { content, href } = this.props;
    return (
      <a className="contentLink" href={href}>
        {content}
      </a>
    );
  }
}

ContentLink.propTypes = {
  content: PropTypes.any,
  href: PropTypes.any,
};

const theme = createTheme({
  palette: {
    background: {
      paper: '#000',
    },
  },
});
export { ContentLink, theme };
