import {Router} from '@/Component';
import {TransitionStyleName} from '@/Component/CSSTransition';
import React from 'react';
import Home from './Home';
import PageNotFound from './PageNotFound';
import Style from './Style';

const View = (
  <Router
    classNames={Style.view}
    routeIndex={0}
    transitionStyle={TransitionStyleName.fade}
  >
    {Home}
    {PageNotFound}
  </Router>
);

export default View;
