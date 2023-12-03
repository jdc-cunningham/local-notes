import React, { useState } from 'react';
import './App.css';
import GridIcon from './assets/icons/four-squares-line-icon.svg';
import VerticalIcon from './assets/icons/three-horizontal-lines-outline-icon.svg';
import TabView from './components/header/tab-view/TabView';
import TabSearch from './components/header/tab-search/TabSearch';
import BodyVertical from './components/body/body-vertical/BodyVertical';
import BodyGrid from './components/body/body-grid/BodyGrid';

function App() {
  const [tabViewActive, setTabViewActive] = useState(true);
  const [bodyVerticalActive, setBodyVerticalActive] = useState(true);

  return (
    <div className="App">
      <div className="App__header">
        {tabViewActive && <TabView/>}
        {!tabViewActive && <TabSearch/>}
        {bodyVerticalActive && <button type="button"><img src={GridIcon} alt="grid view"/></button>}
        {!bodyVerticalActive && <button type="button"><img src={VerticalIcon} alt="vertical view"/></button>}
      </div>
      <div className="App__body">
        {bodyVerticalActive && <BodyVertical/>}
        {!bodyVerticalActive && <BodyGrid/>}
      </div>
    </div>
  );
}

export default App;
