import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Classifier from './components/classifier/Classifier.js';

function App() {
  return (
    <div className="App">
      <Classifier />
      {/* <h1>Hello World</h1>
      <Button variant="primary">Test</Button> */}
    </div>
  );
}

export default App;
