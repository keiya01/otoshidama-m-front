import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import sample from './sample';
import lotteryPage from './lotteryPage';

const Router: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route exact path="/" component={lotteryPage} />
        <Route path="/sample" component={sample} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Router;
