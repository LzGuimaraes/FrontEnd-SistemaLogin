import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Pages/Login/index';
import GlobalStyle from './Pages/styles/global';
import Routering from './Routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Routering />
  </React.StrictMode>
);
