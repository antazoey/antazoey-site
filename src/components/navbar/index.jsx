import React from 'react';
import PropTypes from 'prop-types';
import TopicEnum from 'topic-enum';
import { Button } from 'react-bootstrap';
import navStyle from './navbar.css';
import style from '../../styles.css';

const classes = `${navStyle.navBar} ${style.nerdFont}`;

const getTopic = selected => Object.keys(TopicEnum)[selected - 1];

const stylize = (topic, selectedTopic) => {
  if (topic === selectedTopic) {
    return {};
  }
  return navStyle.navItem;
};

const BarItems = ({
  selected,
  handleWebClick,
  handleMobileClick,
  handleBlockchainClick,
}) => {
  const topic = getTopic(selected);
  const webClasses = `${stylize(TopicEnum.WEB, topic)} ${style.nerdFont}`;
  const mobileClasses = `${stylize(TopicEnum.MOBILE, topic)} ${style.nerdFont}`;
  const blockchainClasses = `${stylize(TopicEnum.BLOCKCHAIN, topic)} ${
    style.nerdFont
  }`;
  const webItem = () => (
    <span>
      <span className={style['juliya-red']}>00</span>
      <Button onClick={handleWebClick} className={webClasses}>
        Web
      </Button>
      <span className={style['juliya-red']}>01</span>
    </span>
  );
  const mobileItem = () => (
    <span>
      <Button onClick={handleMobileClick} className={mobileClasses}>
        Mobile
      </Button>
      <span className={style['juliya-red']}>10</span>
    </span>
  );
  const blockchainItem = () => (
    <span>
      <Button onClick={handleBlockchainClick} className={blockchainClasses}>
        Web
      </Button>
      <span className={style['juliya-red']}>11</span>
    </span>
  );
  return (
    <p>
      {webItem()}
      {mobileItem()}
      {blockchainItem()}
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
