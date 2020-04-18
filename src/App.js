import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Main from './containers/main';
import './App.css';
import Contact from "./containers/contact";
import Men from "./containers/men";
import {Provider} from 'react-redux';
import {store} from './store/store';

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Route path="/" exact component={Main}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/men" exact component={Men}/>
          </Router>
        </div>
      </Provider>
  );
}

export default App;
