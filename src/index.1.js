import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import '../src/fonts/fontcircular.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// Routes
import Routes from './routes';
import rootReducer from './reducers';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#0288d1' },
    secondary: {
      main: '#005b9f'
    }
  }
});

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>,

  document.getElementById('app')
);

export const mainStore = store;
