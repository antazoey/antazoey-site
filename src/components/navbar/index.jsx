import React from 'react';
import PropTypes from 'prop-types';
import TopicEnum from 'topic-enum';
import navStyle from './navbar.css';
import style from '../../styles.css';

const classes = `${navStyle.navBar} ${style.nerdFont}`;

const getTopic = selected => Object.keys(TopicEnum)[selected - 1];

const stylize = (topic, selectedTopic) => {
  if (topic === selectedTopic) {
    return { color: 'black', ...navStyle.navItem };
  }
  return {};
};

const navBar = selected => {
  const topic = getTopic(selected);
  const webStyle = stylize(TopicEnum.WEB, topic);
  const mobileStyle = stylize(TopicEnum.MOBILE, topic);
  const blockChainStyle = stylize(TopicEnum.BLOCKCHAIN, topic);
  const webItem = () => (
    <span>
      <span className={style['juliya-red']}>00</span>
      <a href="" style={webStyle}>
        Web
      </a>
      <span className={style['juliya-red']}>01</span>
    </span>
  );
  const mobileItem = () => (
    <span>
      <a href="" style={mobileStyle}>
        Mobile
      </a>
      <span className={style['juliya-red']}>10</span>
    </span>
  );
  const blockchainItem = () => (
    <span>
      <a href="" style={blockChainStyle}>
        Blockchain
      </a>
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
    const { selected } = props;
    this.state = { selected };
  }

  render() {
    const { selected } = this.state;
    return <div className={classes}>{navBar(selected)}</div>;
  }
}

NavBar.propTypes = {
  selected: PropTypes.number,
};

export default NavBar;
