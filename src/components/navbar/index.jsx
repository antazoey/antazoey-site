import React from 'react';
import PropTypes from 'prop-types';
import TopicEnum from 'topic-enum';
import { Button } from 'react-bootstrap';
import NavStyle from './navbar.css';
import Style from '../../styles.css';
import ButtonStyle from '../../app-button-styles.css';

const classes = `${NavStyle.navBar} ${Style.nerdFont}`;

const getTopic = selected => Object.keys(TopicEnum)[selected - 1];

const stylize = (topic, selectedTopic) => {
  if (topic === selectedTopic) {
    return {};
  }
  return ButtonStyle['app-button'];
};

const BarItems = ({
  selected,
  handleWebClick,
  handleMobileClick,
  handleBlockchainClick,
}) => {
  const topic = getTopic(selected);
  const numStyle = Style['juliya-red'];
  const webClasses = `${stylize(TopicEnum.WEB, topic)} ${Style.nerdFont}`;
  const mobileClasses = `${stylize(TopicEnum.MOBILE, topic)} ${Style.nerdFont}`;
  const blockchainClasses = `${stylize(TopicEnum.BLOCKCHAIN, topic)} ${
    Style.nerdFont
  }`;
  const item = (handleClick, itemClasses, value, deliminator) => (
    <span>
      <Button onClick={handleClick} className={itemClasses}>
        {value}
      </Button>
      <span className={numStyle}>{deliminator}</span>
    </span>
  );
  return (
    <p>
      <span className={numStyle}>00</span>
      {item(handleWebClick, webClasses, 'Web', '01')}
      {item(handleMobileClick, mobileClasses, 'Mobile', '10')}
      {item(handleBlockchainClick, blockchainClasses, 'Blockchain', '11')}
    </p>
  );
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    const {
      selected,
      handleWebClick,
      handleMobileClick,
      handleBlockchainClick,
    } = props;
    this.state = {
      selected,
      handleWebClick,
      handleMobileClick,
      handleBlockchainClick,
    };
  }

  render() {
    return <div className={classes}>{BarItems(this.state)}</div>;
  }
}

BarItems.propTypes = {
  selected: PropTypes.number,
  handleWebClick: PropTypes.func,
  handleMobileClick: PropTypes.func,
  handleBlockchainClick: PropTypes.func,
};

NavBar.propTypes = BarItems.propTypes;

export default NavBar;
