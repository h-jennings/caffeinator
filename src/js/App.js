/* eslint-disable global-require */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import brewMethods from '../data/methods.json';
import Home from './domains/Home';
import Layout from './components/Layout';
import RecipePage from './domains/RecipePage';
import FourZeroFour from './domains/404';
import Caffeinator from './domains/Caffeinator';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home brewMethods={brewMethods} />
          </Route>
          <Route path="/:method" exact>
            <RecipePage brewMethods={brewMethods} />
          </Route>
          <Route path="/:method/:recipePath" exact>
            <Caffeinator brewMethods={brewMethods} />
          </Route>
          <Route component={FourZeroFour} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
