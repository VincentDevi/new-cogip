import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import darkModeReducer from './features/darkMode';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { invoiceApi } from './features/apiSlice';

const store = configureStore({
  reducer:{
    darkMode: darkModeReducer,
    invoiceApi: invoiceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(invoiceApi.middleware),
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={invoiceApi}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApiProvider>
  </React.StrictMode>
)
