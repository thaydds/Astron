import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({
  placeholder,
  text,
  handleKeyDown,
  handleTextChange,
}) => {
  return (
    <input
      value={text}
      onKeyDown={e => handleKeyDown(e)}
      onChange={e => handleTextChange(e)}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired,
};
