import React from 'react';
import { render } from 'react-dom';
import Counter from './src/components/Counter.jsx';
import Post from './src/components/Post.jsx';
import  { Provider } from 'react-redux';
import store from './src/store.js';

render(
    <Provider store={store}>
      <div>
        <Counter />
        <Post />
      </div>
    </Provider>,
  document.getElementById('app')
);
