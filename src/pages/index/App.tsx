import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Lessons from './components/main/Lessons'
import Homeworks from './components/main/Homeworks'

if(location.pathname == "/index"){
    require('../../styles/css/main.css');
}

export default class App extends React.Component<any,any>{
    constructor(props:any){
        super(props);

    }

    render(){
        return(
            <div className="wrapper">
                <Homeworks />
                <Lessons />
            </div>
        );
    }
}