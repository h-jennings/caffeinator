import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { methods } from '@/data/methods';
import { Home } from './domains/Home/Home';
import { Layout } from '@components/Layout/Layout';
import RecipePage from './domains/RecipePage';
import { FourZeroFour } from '@domains/404/FourZeroFour';
import { Caffeinator } from './domains/Caffeinator/Caffeinator';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home brewMethods={methods} />
          </Route>
          <Route path="/:method" exact>
            <RecipePage brewMethods={methods} />
          </Route>
          <Route path="/:method/:recipePath" exact>
            <Caffeinator brewMethods={methods} />
          </Route>
          <Route component={FourZeroFour} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
