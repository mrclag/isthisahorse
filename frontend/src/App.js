import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './App.css';

import Classifier from './components/classifier/Classifier.js';
import ImageList from './components/imageList/ImageList.js';
import Navigation from './components/nav/Navigation.js';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Classifier} />
          <Route path="/list" component={ImageList} />
          <Route exact path="*" component={Classifier} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
