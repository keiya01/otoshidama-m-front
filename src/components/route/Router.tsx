import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sample from './sample';

const Router: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path="/" component={Sample} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Router;
