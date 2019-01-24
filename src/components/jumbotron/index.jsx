import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import JumboStyle from './jumbotron.css';
import Style from '../../styles.css';
import NavBar from '../navbar/index.jsx';
import ButtonStyle from '../../app-button-styles.css';

const jumboClasses = `${JumboStyle.jumbotron} ${Style.nerdFont}`;

const buttonClasses = `${ButtonStyle['title-app-button']} ${Style.nerdFont}`;

const Jumbotron = ({
  title,
  navSelected,
  handleJuliyaClick,
  handleWebClick,
  handleMobileClick,
  handleArtClick,
}) => (
  <div className={jumboClasses}>
    <h1 className="text-center">
      <Button className={buttonClasses} onClick={handleJuliyaClick}>
        <strong>{title}</strong>
      </Button>
    </h1>
    <NavBar
      selected={navSelected}
      handleWebClick={handleWebClick}
      handleMobileClick={handleMobileClick}
      handleArtClick={handleArtClick}
    />
  </div>
);

Jumbotron.propTypes = {
  title: PropTypes.string,
  navSelected: PropTypes.number,
  handleJuliyaClick: PropTypes.func,
  handleWebClick: PropTypes.func,
  handleMobileClick: PropTypes.func,
  handleArtClick: PropTypes.func,
};

export default Jumbotron;
