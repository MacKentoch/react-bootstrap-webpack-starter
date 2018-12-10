// @flow

// #region imports
import '@babel/polyfill'; // NOTE: REALLY important to avoid "regeneratorRuntime is not defined"
import React from 'react';
import { hydrate, unstable_createRoot } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './Root';
// #endregion

// #region constants
const ELEMENT_TO_BOOTSTRAP = 'root';
const bootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
const root = unstable_createRoot(bootstrapedElement);
// #endregion

// #region globals (styles, polyfill ...)
// smoothscroll polyfill
smoothScrollPolyfill.polyfill();
// force polyfill (even if browser partially implements it)
window.__forceSmoothScrollPolyfill__ = true;

window.snapSaveState = () => ({
  __LOADABLE_STATE__: {
    children: [
      {
        id: '../pages/home',
      },
      {
        id: '../pages/about',
      },
      {
        id: '../pages/protected',
      },
      {
        id: '../pages/pageNotFound',
      },
    ],
  },
});

// #endregion

// #region render (with hot reload if dev)
const renderApp = RootComponent => {
  const Application = () => (
    <AppContainer>
      <RootComponent />
    </AppContainer>
  );

  // // needed for react-snap:
  // if (bootstrapedElement.hasChildNodes()) {
  //   return hydrate(<Application />, bootstrapedElement);
  // }

  return root.render(<Application />);
};

renderApp(Root);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const RootComponent = require('./Root').default;
    renderApp(RootComponent);
  });
}
// #endregion
