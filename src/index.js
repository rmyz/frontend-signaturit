import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import GlobalStyles from './styles/globalStyles';

ReactDOM.render(
  <Fragment>
    <GlobalStyles />
    <App />
  </Fragment>,
  document.getElementById('root'),
);
