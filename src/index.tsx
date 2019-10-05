import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AppLoginRegister from './components/loginRegister/App';
import AppMainPage from './components/mainPage/App';


document.getElementById('root-login-register') ? ReactDOM.render(<AppLoginRegister />, document.getElementById('root-login-register')) : null;

document.getElementById('root-main-page') ? ReactDOM.render(<AppMainPage />, document.getElementById('root-main-page')) : null;



