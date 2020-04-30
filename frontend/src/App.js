import React from 'react';
import './App.css';
import Classifier from './components/classifier/Classifier.js';
import ImageList from './components/imageList/ImageList.js';

function App() {
  return (
    <div className="App">
      <Classifier />
      {/* <h1>Hello World</h1>
      <Button variant="primary">Test</Button> */}
      <ImageList />
    </div>
  );
}

export default App;
