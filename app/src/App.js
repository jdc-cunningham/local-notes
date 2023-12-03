import React, { useState } from 'react';
import './App.css';
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
      </div>
      <div className="App__body">
        {bodyVerticalActive && <BodyVertical/>}
        {!bodyVerticalActive && <BodyGrid/>}
      </div>
    </div>
  );
}

export default App;
