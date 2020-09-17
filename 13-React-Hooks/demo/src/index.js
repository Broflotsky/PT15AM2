import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppHooks from './components/AppHooks';
import AppClass from './components/AppClass';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store} >
    {/* <AppHooks /> */}
    <AppClass />
  </Provider>,
  document.getElementById('root')
);