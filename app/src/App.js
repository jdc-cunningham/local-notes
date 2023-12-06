import React, { useState, useEffect } from 'react';

import './App.scss';

import GridIcon from './assets/icons/four-squares-line-icon.svg';
import VerticalIcon from './assets/icons/three-horizontal-lines-outline-icon.svg';

import TabView from './components/header/tab-view/TabView';
import TabSearch from './components/header/tab-search/TabSearch';
import BodyVertical from './components/body/body-vertical/BodyVertical';
import BodyGrid from './components/body/body-grid/BodyGrid';
import AddNote from './components/modal/add-note/AddNote';

import { addNote, getNotes, updateNote, deleteNote, hideNote } from './data';

function App() {
  const [tabViewActive, setTabViewActive] = useState(true);
  const [bodyVerticalActive, setBodyVerticalActive] = useState(true);
  const [noteData, setNoteData] = useState([]);
  const [activeNoteTab, setActiveNoteTab] = useState('');
  const [showModal, setShowModal] = useState(false); // only 1 modal right now

  // if noteData is provided by param, means UI update not storage
  const refreshData = (modNoteData = []) => {
    if (modNoteData){
      setNoteData(modNoteData);
    } else {
      const noteData = getNotes();
      setNoteData(noteData); 
    }
  }

  useEffect(() => {
    setActiveNoteTab(noteData.length ? noteData[0].name : '');
  }, [noteData]);

  useEffect(() => {
    const noteData = getNotes();
    setActiveNoteTab(noteData.length ? noteData[0].name : '');
    setNoteData(noteData);
  }, []);

  return (
    <div className="App">
      {showModal && <AddNote setShowModal={setShowModal} addNote={addNote} refreshData={refreshData}/>}
      <div className="App__header">
        {tabViewActive && <TabView
          setShowModal={setShowModal}
          noteData={noteData}
          activeNoteTab={activeNoteTab}
          setActiveNoteTab={setActiveNoteTab}
          hideNote={hideNote}
          refreshData={refreshData}
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
