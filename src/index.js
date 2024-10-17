import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import Menu from './components/nav';
import Content from './components/body';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Menu />
    <Content />
  </React.StrictMode>
);
