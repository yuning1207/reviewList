import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { List } from './pages/list';
import { Detail } from './pages/detail';
import history from './utils/history';

export const LIST = '/';
export const DETAIL = '/detail';

class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path={LIST} component={List} exact />
          <Route path={DETAIL} component={Detail} exact />
        </Switch>
      </Router>
    );
  }
}

export default App;

