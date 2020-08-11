import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/pages/Home';
import Notes from './components/pages/Notes';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/notes" render={() => <Notes />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
