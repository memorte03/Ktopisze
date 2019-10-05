import * as React from 'react';
import * as ReactDOM from 'react-dom';

import LoginRegisterPanel from './Panel/LoginRegisterPanel';

export default class App extends React.Component<any,any>{
    render(){
        return(
            <LoginRegisterPanel />
        );
    }
}