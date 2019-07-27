import View from '@/View';
import React, {Fragment} from 'react';

const appRoot = document.querySelector('[app-root]');

const App = () => (
  /**
   * Fragment can be removed
   **/
  <Fragment>
    {View}
  </Fragment>
);

export {appRoot};
export default App;
