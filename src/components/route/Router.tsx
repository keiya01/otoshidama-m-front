import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import sample from './sample';
import setting from './setting';

const Router: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route exact path="/" component={sample} />
        <Route exact path="/setting" component={setting} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Router;
