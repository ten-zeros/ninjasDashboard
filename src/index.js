import React from 'react';
import ReactDOM from 'react-dom';
const rootEl = document.getElementById("root");

//Production Mode
let render = () => {
    const MainApp = require('./App').default;
    ReactDOM.render(
      <MainApp />,
      rootEl
    );
};

//Development Mode
if (module.hot) {
//quickly replaces modules 
  module.hot.accept('./App', () => {
      const NextApp = require('./App').default;
      render(
        <NextApp />,
        rootEl
      );
  });
}


render() 