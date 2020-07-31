import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import pdLogo from '../../resources/pdlogo.png';
import CodeStyles from './code.css';
import Style from '../../styles.css';
import detectMobile from '../../mobile-detect';

const pdClasses = () => `${Style.center} ${CodeStyles.patchDay}`;
const pdButtonClasses = () => `${CodeStyles.pdButton}`;
const pdImageClasses = () => `${CodeStyles.pdImage}`;

const PDButton = props => {
  const { handleHover, handleExitHover } = props;
  return (
    <Button
      className={pdButtonClasses()}
      onMouseEnter={handleHover}
      onMouseLeave={handleExitHover}
      onClick={() => {
        window.location.href = 'https://github.com/unparalleled-js/PatchDay';
      }}
    >
      <img src={pdLogo} alt="PatchDay App Logo" className={pdImageClasses()} />
    </Button>
  );
};

const PDText = textVisible => {
  const hideText = textVisible || detectMobile();
  const classes = hideText
    ? `${Style.SharedText}`
    : `${Style.SharedText} ${Style.hide}`;
  return (
    <div className={classes}>
      <p>
        <h1 id="patchday">PatchDay</h1>
        <p>
          An iOS app for managing HRT medication. The primary use-case is the
          &quot;patch staggering&quot; technique for transdermal patches.
          PatchDay also supports Pills, Injection-based HRT, and Gel-based HRT.
          To learn more about how to set up the app, visit the support site.
        </p>
      </p>
    </div>
  );
};

class PatchDay extends React.Component {
  constructor(props) {
    super(props);
    const { textVisible } = props;
    this.handleHover = this.handleHover.bind(this);
    this.handleExitHover = this.handleExitHover.bind(this);
    this.state = { ...props, textVisible: !!textVisible };
  }

  handleHover() {
    this.setState({ textVisible: true });
  }

  handleExitHover() {
    this.setState({ textVisible: false });
  }

  render() {
    const { textVisible } = this.state;
    const buttonProps = {
      handleHover: this.handleHover,
      handleExitHover: this.handleExitHover,
    };
    return (
      <div className={pdClasses()}>
        {PDButton(buttonProps)}
        {PDText(textVisible)}
      </div>
    );
  }
}

PDButton.propTypes = {
  handleHover: PropTypes.func,
  handleExitHover: PropTypes.func,
};

PatchDay.propTypes = {
  textVisible: PropTypes.bool,
};

export default PatchDay;
