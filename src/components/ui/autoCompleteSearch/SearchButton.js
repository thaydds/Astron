import React from 'react';
import PropTypes from 'prop-types';

const SearchButton = ({ buttonText, handleButtonCLick }) => {
  return (
    <button onClick={() => handleButtonCLick()} type="submit">
      {buttonText}
    </button>
  );
};

export default SearchButton;

SearchButton.propTypes = {
  handleButtonCLick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};
