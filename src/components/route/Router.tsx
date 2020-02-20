import React, { Suspense, ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import sample from './sample';
import setting from './setting';
import lotteryPage from './lotteryPage';

const Router = (): ReactElement => (
  <BrowserRouter>
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route exact path="/" component={lotteryPage} />
        <Route path="/sample" component={sample} />
        <Route exact path="/setting" component={setting} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Router;
