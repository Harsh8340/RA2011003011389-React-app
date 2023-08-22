import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TrainsList from './components/TrainsList.js'; // Make sure the path is correct
import SingleTrain from './components/SingleTrain.js'; // Make sure the path is correct

function App() {
  return (
    <Router>
      <Route exact path="/" component={TrainsList} />
      <Route path="/train/:id" component={SingleTrain} />
    </Router>
  );
}

export default App;