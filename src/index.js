import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.scss';
import './App';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./style.scss";

export { Login } from "./login.jsx";
export { Register } from "./register.jsx";




ReactDOM.render(
  // <React.StrictMode>
  // <div>Hello World</div>,

    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


