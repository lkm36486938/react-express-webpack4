import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Home, About} from './pages';

function App() {
  

  return (
    <div className="App">
      App !

      <hr/>
      <Switch>
        <Route exact path='/home' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
      </Switch>
    </div>
  );
}

export default App;
