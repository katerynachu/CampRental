import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { Provider } from 'react-redux';
import { persistor } from './components/redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { store } from './/components/redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </PersistGate>

    </Provider>

  </React.StrictMode>,
)
