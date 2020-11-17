import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route path="/" exact component={Join}/>
              <Route path="/chat" component={Chat}/>
            </Switch>
          </div>
        </Router>
    );
  }
}
export default App;