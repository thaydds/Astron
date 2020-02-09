import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Suggestions = ({
  suggestions,
  indexSuggestion,
  clickSuggestionHandler,
  mouseOverHandle,
  handleKeyDown,
}) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return (
    <ul onBlur={() => console.log('oi')}>
      {suggestions.map((s, index) => (
        <li key={s}>
          <button
            type="submit"
            className={
              index === indexSuggestion ? 'selected_suggestions' : undefined
            }
            onMouseDown={() => clickSuggestionHandler(s)}
            onMouseOver={() => mouseOverHandle(index)}
            onBlur={() => console.log('jahsdjkhasjk')}
            onFocus={() => console.log()}
          >
            {s}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Suggestions;

Suggestions.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  indexSuggestion: PropTypes.number.isRequired,
  clickSuggestionHandler: PropTypes.func.isRequired,
  mouseOverHandle: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
};
