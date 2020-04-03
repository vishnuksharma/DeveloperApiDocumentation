import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux'
import { CircularProgress } from '@material-ui/core';

const Workspace = React.lazy(() => import("./Routes/Route"));
const WorspaceWithFallback = () => (
  <React.Suspense fallback={<CircularProgress />}>
    <Workspace />
  </React.Suspense>
);

ReactDOM.render(
  <Provider store={store}>
    <WorspaceWithFallback />
  </Provider>,
  document.getElementById('root')
);

