import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Route from './Routes/Route'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById('root')
);

