import resources from '$/resources';
import {Logo} from "@/Component";
import {Route, withRouter} from '@/Component/Router';
import IHome from '@/View/Home/spec';
import React from 'react';
import Background from './Background';
import './Style';

const {
  view: {
    home: {
      content: {heading, message},
      path
    }
  }
} = resources;

const Home: React.FunctionComponent<IHome.Props> = () => (
  <main data-routes='home'>
    <Background />
    <Logo/>
    <h2>{heading}</h2>
    <p>{message}</p>
  </main>
);

const Component = withRouter(Home);

export default <Route path={path} exact={true} component={Component} />;
