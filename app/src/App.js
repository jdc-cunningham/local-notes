import React, { useState, useEffect } from 'react';

import './App.scss';

import GridIcon from './assets/icons/four-squares-line-icon.svg';
import VerticalIcon from './assets/icons/three-horizontal-lines-outline-icon.svg';

import TabView from './components/header/tab-view/TabView';
import TabSearch from './components/header/tab-search/TabSearch';
import BodyVertical from './components/body/body-vertical/BodyVertical';
import BodyGrid from './components/body/body-grid/BodyGrid';
import AddNote from './components/modal/add-note/AddNote';
import SearchModal from './components/modal/search-notes/SearchNotes';

import { addNote, getNotes, updateNote, deleteNote, hideNote, searchNotes, getNoteData } from './data';

function App() {
  const [tabViewActive, setTabViewActive] = useState(true);
  const [bodyVerticalActive, setBodyVerticalActive] = useState(true);
  const [noteData, setNoteData] = useState([]);
  const [activeNoteTab, setActiveNoteTab] = useState('');
  const [showModal, setShowModal] = useState(false); // only 1 modal right now
  const [showSearchModal, setShowSearchModal] = useState(false);

  // if noteData is provided by param, means UI update not storage
  const refreshData = (modNoteData = []) => {
    if (modNoteData.length){
      setNoteData(modNoteData);
    } else {
      const noteData = getNotes();
      setNoteData(noteData);
    }
  }

  useEffect(() => {
    const noteData = getNotes();
    setActiveNoteTab(noteData.length ? noteData[0].name : '');
    setNoteData(noteData);
  }, []);

  return (
    <div className="App">
      {showModal && <AddNote setShowModal={setShowModal} addNote={addNote} refreshData={refreshData}/>}
      {showSearchModal && <SearchModal
        setShowSearchModal={setShowSearchModal}
        noteData={noteData}
        refreshData={refreshData}
        searchNotes={searchNotes}
        getNoteData={getNoteData}
      />}
      <div className="App__header">
        {tabViewActive && <TabView
          setShowModal={setShowModal}
          noteData={noteData}
          activeNoteTab={activeNoteTab}
          setActiveNoteTab={setActiveNoteTab}
          hideNote={hideNote}
          refreshData={refreshData}
          setShowSearchModal={setShowSearchModal}
        />}
        {!tabViewActive && <TabSearch/>}
        {bodyVerticalActive &&
          <button type="button" className="App__header-grid-view" onClick={() => setBodyVerticalActive(false)}>
            <img src={GridIcon} alt="grid view"/></button>
        }
        {!bodyVerticalActive &&
          <button type="button" className="App__header-vertical-view" onClick={() => setBodyVerticalActive(true)}>
            <img src={VerticalIcon} alt="vertical view"/>
          </button>
        }
      </div>
      <div className="App__body">
        <BodyVertical
          noteData={noteData}
          updateNote={updateNote}
          refreshData={refreshData}
          activeNoteTab={activeNoteTab}
          gridView={!bodyVerticalActive}
          deleteNote={deleteNote}
        />
        {/* {!bodyVerticalActive && <BodyGrid noteData={noteData}/>} */}
      </div>
    </div>
  );
}

export default App;
