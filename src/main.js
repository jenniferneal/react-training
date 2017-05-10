import React from 'react';
import ReactDOM from 'react-dom';
import App from './core/App';
import rootReducerStore from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(rootReducerStore);


ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('app')
);
