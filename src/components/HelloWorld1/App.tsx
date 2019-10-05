import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './css/main.css';

export default class App extends React.Component<any,any>{
    render(){
        return(
            <div>
                <a href="helloworld1">helloworld1</a><br/>
                <a href="helloworld2">helloworld2</a>
            </div>
        );
    }
}