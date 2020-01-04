import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import methods from '../data/methods.json';
import Home from './domains/Home';
import Layout from './components/Layout';
import RecipePage from './domains/RecipePage';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home methods={methods} />
          </Route>
          <Route path="/">
            <RecipePage methods={methods} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
