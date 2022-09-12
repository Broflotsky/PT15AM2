import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/index';

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <Home />
      </BrowserRouter>
   </Provider>,
   document.getElementById('root')
);
