import React from 'react';
import ReactDOM from 'react-dom';
import { ModalInfo } from './components/ModalInfo';
import { Main } from './Main';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


ReactDOM.render(
  <React.StrictMode>
    <Main />
    <ModalInfo/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

