// @flow

// #region imports
import '@babel/polyfill'; // NOTE: REALLY important to avoid "regeneratorRuntime is not defined"
import React from 'react';
import { hydrate, render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import { loadableReady } from '@loadable/component';
import 'bootstrap/dist/css/bootstrap.min.css';
import injectGlobalStyle from './style/injectGlobalStyles';
import Root from './Root';
// #endregion

// #region constants
const ELEMENT_TO_BOOTSTRAP = 'root';
const bootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
// window.snapSaveState = () => getState();
// #endregion

// #region globals (styles, polyfill ...)
// smoothscroll polyfill
smoothScrollPolyfill.polyfill();
// force polyfill (even if browser partially implements it)
window.__forceSmoothScrollPolyfill__ = true;

injectGlobalStyle();
// #endregion

// #region render (with hot reload if dev)
const renderApp = RootComponent => {
  const Application = () => (
    <AppContainer>
      <RootComponent />
    </AppContainer>
  );

  // needed for react-snap:
  if (bootstrapedElement.hasChildNodes()) {
    loadableReady().then(() => {
      return hydrate(<Application />, bootstrapedElement);
    });
  }
  return render(<Application />, bootstrapedElement);
};

renderApp(Root);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const RootComponent = require('./Root').default;
    renderApp(RootComponent);
  });
}
// #endregion
