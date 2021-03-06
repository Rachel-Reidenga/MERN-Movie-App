import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
// serviceWorker.register();

if ('serviceWorker' in navigator) {
  console.log("Service wrokers are compatible.");
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceWorker.js')
    .then(reg => {
      console.log('Service Worker registered sucessfully. ', reg);
    }).catch(err => {
      console.log('Service Worker Registation failed. ', err);
    });
  });
}

