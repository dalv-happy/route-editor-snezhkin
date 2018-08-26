import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store';
import MainLayout from './components/MainLayout';

const App = () => (
  <div>
    <Provider store={configureStore()}>
      <MainLayout />
    </Provider>
  </div>
);

export default App;
