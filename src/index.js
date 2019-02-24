import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import App from './App';
import rootReducer from './reducers';
import Routes from './routes';

const store = createStore(rootReducer, applyMiddleware(thunk));
const theme = createMuiTheme({
  palette: {
    primary: { main: '#27C657' },
    secondary: {
      main: '#ffffff'
    }
  }
});
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
export const mainStore = store;
