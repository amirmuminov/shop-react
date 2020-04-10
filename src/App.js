import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Main from './containers/main';
import './App.css';
import Contact from "./containers/contact";
import Men from "./containers/men";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Main}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/men" exact component={Men}/>
      </Router>
    </div>
  );
}

export default App;
