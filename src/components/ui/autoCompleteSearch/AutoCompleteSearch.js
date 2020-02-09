import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { selectStudent } from '../../../actions';
import SearchButton from './SearchButton';
import Suggestions from './Suggestions';
import SearchInput from './SearchInput';
import './AutoCompleteSearch.scss';

const AutoCompleteSearch = ({ students }) => {
  const [text, setText] = useState('');
  const [indexSuggestion, setIndexSuggestion] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(false);
  const renderSuggestions = suggestions.length > 0;
  const dispatch = useDispatch();

  const handleTextChange = e => {
    const { value } = e.target;
    if (!value) {
      setText('');
      setSuggestions([]);
      setError(false);
    } else {
      const newSuggestions = students
        .sort()
        .filter(i => i.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
      setText(value);
      setSuggestions(newSuggestions);
      setError(false);
    }
  };
  const handleKeyDownSuggestions = e => {
    const selectSuggestion = e.keyCode === 13 && suggestions.length;
    const moveDownSuggestions =
      e.keyCode === 40 && suggestions.length - 1 > indexSuggestion;
    const moveUpSuggestions = e.keyCode === 38 && indexSuggestion > 0;

    if (selectSuggestion) {
      setText(suggestions[indexSuggestion]);
      setIndexSuggestion(0);
      setSuggestions([]);
    } else if (moveDownSuggestions) {
      setIndexSuggestion(indexSuggestion + 1);
    } else if (moveUpSuggestions) {
      setIndexSuggestion(indexSuggestion - 1);
    }
  };

  const handleKeyDownInput = e => {
    const searchSuggestion = e.keyCode === 13 && suggestions.length === 0;
    const searchResult = students.filter(
      s => s.toLowerCase().trim() === text.toLowerCase().trim()
    );
    if (searchSuggestion && searchResult.length === 1) {
      dispatch(selectStudent(text));
      setText('');
      setError(false);
    } else {
      setError(true);
    }
  };

  const mouseOverHandleSuggestions = index => {
    setIndexSuggestion(index);
  };
  const clickSuggestionHandler = suggestion => {
    setText(suggestion);
    setSuggestions([]);
    setIndexSuggestion(0);
  };
  const handleBlurSuggestions = () => {
    setText('');
    setIndexSuggestion(0);
    setSuggestions([]);
  };

  const handleButtonCLick = () => {
    const searchResult = students.filter(
      s => s.toLowerCase().trim() === text.toLowerCase().trim()
    );
    if (searchResult.length === 1) {
      dispatch(selectStudent(text));
    } else {
      setError(true);
    }
  };

  return (
    <div className="search_container">
      <div className="search_container__autocomplete">
        <SearchInput
          text={text}
          placeholder="Encontre um estudante"
          handleKeyDown={handleKeyDownInput}
          handleTextChange={handleTextChange}
        />
        <SearchButton
          text={text}
          buttonText="procurar"
          handleButtonCLick={handleButtonCLick}
        />
      </div>
      {error && <p>Estudante nao encontrado</p>}
      <div className="search_container__suggestions">
        {renderSuggestions && (
          <Suggestions
            indexSuggestion={indexSuggestion}
            suggestions={suggestions}
            text={text}
            handleKeyDown={handleKeyDownSuggestions}
            mouseOverHandle={mouseOverHandleSuggestions}
            clickSuggestionHandler={clickSuggestionHandler}
            handleBlurSuggestions={handleBlurSuggestions}
          />
        )}
      </div>
    </div>
  );
};

export default AutoCompleteSearch;

AutoCompleteSearch.propTypes = {
  students: PropTypes.arrayOf(PropTypes.string).isRequired,
};
