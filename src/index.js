import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// Styles
// cleanup
import 'normalize.css';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { popper } from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


// app styles
import './styles/styles.scss'

//import reportWebVitals from './reportWebVitals';
// import app stuff
import config from './store/config';
import App from './App';

const store = config();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
      </Provider>
  //</React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
