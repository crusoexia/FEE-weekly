// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import makeInspectable from 'mobx-devtools-mst';
import DevTools from 'mobx-react-devtools';
import appStore from './stores/AppStore';
import App from './App';
import './index.css';

makeInspectable(appStore);

const root = document.getElementById('root');

if (root) {
  ReactDOM.render((
    <Provider store={appStore} >
      <React.Fragment>
        <App />
        <DevTools />
      </React.Fragment>
    </Provider>
  ), root);
}
