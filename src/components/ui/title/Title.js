import React from 'react';
import './Title.scss';
import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return (
    <div className="title_container">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
