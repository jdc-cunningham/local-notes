import React, { useState, useEffect } from 'react';

import './App.scss';

import GridIcon from './assets/icons/four-squares-line-icon.svg';
import VerticalIcon from './assets/icons/three-horizontal-lines-outline-icon.svg';

import TabView from './components/header/tab-view/TabView';
import TabSearch from './components/header/tab-search/TabSearch';
import BodyVertical from './components/body/body-vertical/BodyVertical';
import BodyGrid from './components/body/body-grid/BodyGrid';
import AddNote from './components/modal/add-note/AddNote';

import { addNote, getNotes, updateNote } from './data';

function App() {
  const [tabViewActive, setTabViewActive] = useState(true);
  const [bodyVerticalActive, setBodyVerticalActive] = useState(true);
  const [noteData, setNoteData] = useState([]);
  const [noteTabs, setNoteTabs] = useState([]); // all
  const [activeNoteTabs, setActiveNoteTabs] = useState([]);
  const [activeNoteTab, setActiveNoteTab] = useState(0);
  const [showModal, setShowModal] = useState(false); // only 1 modal right now

  const refreshData = () => {
    const noteData = getNotes();
    setNoteData(noteData); 
  }

  useEffect(() => {
    const noteData = getNotes();
    setNoteData(noteData);
  }, []);

  return (
    <div className="App">
      {showModal && <AddNote setShowModal={setShowModal} addNote={addNote} refreshData={refreshData}/>}
      <div className="App__header">
        {tabViewActive && <TabView setShowModal={setShowModal} noteData={noteData}/>}
        {!tabViewActive && <TabSearch/>}
        {bodyVerticalActive &&
          <button type="button" className="App__header-grid-view">
            <img src={GridIcon} alt="grid view"/></button>
        }
        {!bodyVerticalActive &&
          <button type="button" className="App__header-vertical-view">
            <img src={VerticalIcon} alt="vertical view"/>
          </button>
        }
      </div>
      <div className="App__body">
        {bodyVerticalActive && <BodyVertical
          noteData={noteData}
          updateNote={updateNote}
          refreshData={refreshData}
        />}
        {!bodyVerticalActive && <BodyGrid noteData={noteData}/>}
      </div>
    </div>
  );
}

export default App;
