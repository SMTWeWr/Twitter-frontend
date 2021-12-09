import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from "./theme";
import {StylesProvider, ThemeProvider} from '@material-ui/core';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";

import './index.css';


ReactDOM.render(
      <ThemeProvider theme={theme} >
          <StylesProvider injectFirst>
          <BrowserRouter>
              <Provider store={store}>
                  <App />
              </Provider>
          </BrowserRouter>
          </StylesProvider>
      </ThemeProvider>,
  document.getElementById('root')
);
