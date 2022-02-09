import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Provider} from "react-redux";
import {persistore, store} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate persistor={persistore}>
              <App />
          </PersistGate>
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
)
