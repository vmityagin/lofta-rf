import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main';

function App() {
return (
  <>
    <Switch>
      <Route exact path="/lofta-rf">
        <Main />
      </Route>
    </Switch>
  </>
);
}

export default App;