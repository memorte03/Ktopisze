import * as React from 'react';
import * as ReactDOM from 'react-dom';

import LoginUnknownUser from './LoginUnknownUser';
import { stat } from 'fs';
//import LoginKnownUser from './LoginKnownUser';
//import RegisterUser from './RegisterUser';

export default class LoginRegisterPanel extends React.Component<any,any>{

    constructor(props: any){
        super(props);
        
        
    }

    componentDidMount() {

    }
  
    componentWillUnmount() {
  
    }

    render(){
        let nazwa = <LoginUnknownUser/>;

        return(
            <div id="container">
                <div id="main-panel">
                    <div className="nav-btn-container">
                        <div className="nav-btn">Rejestracja<i></i></div>
                    </div>
                    {nazwa}
                </div>
            </div>
        );
    }
}