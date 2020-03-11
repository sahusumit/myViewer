import React from 'react';
import './App.css';
import Viewer from './Viewer/viewer';
import stack from './Viewer/stackElement';




function App() {
  return (
    <div className="App">
      <h1>hi,This will be going to be dicom Viewer</h1>
      <Viewer stack={stack} />
    </div>
    // React.createElement('div', {className:"App"}, React.createElement('h1', null,"React app is working ffine"))
  );
  
}

export default App;
