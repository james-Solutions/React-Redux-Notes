import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/pages/Home';
import Notes from './components/pages/Notes';
import UpdateNotes from './components/pages/UpdateNote';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/notes" render={() => <Notes />} />
          <Route exact path="/notes/update/:key" component={UpdateNotes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
