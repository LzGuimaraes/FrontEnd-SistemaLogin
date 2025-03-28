import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './Pages/styles/global';
import Routering from './Routes/routes';
import { NotificationProvider } from './Context/NotificationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationProvider>
      <GlobalStyle/>
      <Routering />
    </NotificationProvider>
  </React.StrictMode>
);
