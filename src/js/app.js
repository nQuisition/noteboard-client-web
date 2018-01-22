import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import Main from './containers/main';
import store from './store';

import '../scss/index.scss';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>, app);
