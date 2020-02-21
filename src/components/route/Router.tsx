import React, { Suspense, ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import sample from './sample';
import setting from './setting';
import lotteryPage from './lotteryPage';
import error from './error';
import resultPage from './resultPage';

const Router = (): ReactElement => (
  <BrowserRouter>
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route exact path="/" component={lotteryPage} />
        <Route exact path="/result" component={resultPage} />
        <Route path="/sample" component={sample} />
        <Route exact path="/setting" component={setting} />
        <Route path="/error/:statusCode" component={error} />
        <Route component={error} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Router;
