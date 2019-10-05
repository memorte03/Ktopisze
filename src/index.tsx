import * as React from 'react';
import * as ReactDOM from 'react-dom';

import HelloWorld1 from './components/HelloWorld1/App';
import HelloWorld2 from './components/HelloWorld2/App';


document.getElementById('root-helloworld1') ? ReactDOM.render(<HelloWorld1 />, document.getElementById('root-helloworld1')) : null;

document.getElementById('root-helloworld2') ? ReactDOM.render(<HelloWorld2 />, document.getElementById('root-helloworld2')) : null;



