import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import methods from '../data/methods.json';
import Home from './domains/Home';
import Layout from './components/Layout';
import RecipePage from './domains/RecipePage';
import FourZeroFour from './domains/404';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home methods={methods} />
          </Route>
          <Route path="/:method">
            <RecipePage methods={methods} />
          </Route>
          <Route component={FourZeroFour} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
