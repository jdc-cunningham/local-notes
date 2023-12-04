import React, { useState, useEffect } from 'react';
import './App.scss';
import GridIcon from './assets/icons/four-squares-line-icon.svg';
import VerticalIcon from './assets/icons/three-horizontal-lines-outline-icon.svg';
import TabView from './components/header/tab-view/TabView';
import TabSearch from './components/header/tab-search/TabSearch';
import BodyVertical from './components/body/body-vertical/BodyVertical';
import BodyGrid from './components/body/body-grid/BodyGrid';

function App() {
  const [tabViewActive, setTabViewActive] = useState(true);
  const [bodyVerticalActive, setBodyVerticalActive] = useState(true);
  const [noteTabs, setNoteTabs] = useState([]); // all
  const [activeNoteTabs, setActiveNoteTabs] = useState([]);
  const [activeNoteTab, setActiveNoteTab] = useState(0);

  useEffect(() => {
    const localStorageNoteTabs = localStorage.getItem('local-notes-tabs') ?? [];

    if (localStorageNoteTabs.length) {
      setNoteTabs(localStorageNoteTabs);
    }
  }, []);

  return (
    <div className="App">
      <div className="App__header">
        {tabViewActive && <TabView/>}
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
        {bodyVerticalActive && <BodyVertical/>}
        {!bodyVerticalActive && <BodyGrid/>}
      </div>
    </div>
  );
}

export default App;
