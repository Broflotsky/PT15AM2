import React from 'react';
import { render } from 'react-dom';
import Friends from './src/components/Friends.jsx';
import  { Provider } from 'react-redux';
import store from './src/store.js';

render(
    <Provider store={store}>
      <div>
        <Friends/>
      </div>
    </Provider>,
  document.getElementById('app')
);
