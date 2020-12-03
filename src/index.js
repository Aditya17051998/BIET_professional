import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';   ////use it if you want to connect state with redux
import './index.css';
import App from './components/App';
import configureStore from './store';
import 'bootstrap/dist/css/bootstrap.min.css';



const store = configureStore();  ////// configureStore is defind in index.js of store folder



ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
      <App />
      </React.StrictMode>

    </Provider>,
  document.getElementById('root')
);

