import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavBar from 'Components/NavBar';

const Jumbotron = ({ title }) => (
  <div className="Jumbotron NerdFont">
    <h1 className="text-center">
      <Link to="/" className="JumbotronTitle title-app-button">
        {title}
      </Link>
    </h1>
    <NavBar />
  </div>
);

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Jumbotron;
