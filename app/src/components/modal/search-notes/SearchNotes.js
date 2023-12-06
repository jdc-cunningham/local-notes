import React, { useState, useEffect } from 'react';

import './SearchNotes.scss';

import CloseIcon from '../../../assets/icons/close-line-icon.svg';

const SearchNotes = (props) => {
  const { setShowSearchModal, searchNotes, refreshData, getNoteData, noteData } = props;

  const [noteName, setNoteName] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const updateLocalNotes = (noteName) => {
    const searchNoteData = getNoteData(noteName);

    if (searchNoteData) {
      refreshData([
        ...noteData,
        searchNoteData
      ]);
      setShowSearchModal(false);
    } else {
      alert("Failed to load note");
    }
  }

  const closeModal = () => {
    setNoteName('');
    setShowSearchModal(false);
  }

  useEffect(() => {
    clearTimeout(searchTimeout);
    setSearchTimeout(setTimeout(() => {
      if (noteName.length) {
        const matchingNotes = searchNotes(noteName);
        setSearchResults(matchingNotes);
      }
    }, 500))
  }, [noteName])

  return (
    <div className="SearchNotes">
      <div className="SearchNotes__container">
        <h2>Search Notes</h2>
        <input type="text" placeholder="note name" value={noteName} onChange={(e) => setNoteName(e.target.value)}/>
        {searchResults.length > 0 && searchResults.map((searchResult, index) =>(
          <div key={index} className="SearchNotes__search-result" onClick={() => {updateLocalNotes(searchResult)}}>{searchResult}</div>  
        ))}
        <button type="button" onClick={() => closeModal()} className="SearchNotes__container-close" title="close modal">
          <img src={CloseIcon} alt="close modal"/>
        </button>
      </div>
    </div>
  );
}

export default SearchNotes;