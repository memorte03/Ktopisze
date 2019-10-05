import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { any } from 'prop-types';

export default class Message extends React.Component<any, any>{
    constructor(props: any){
        super(props)
    }

    render(){
        return(
            <div className="message__proper-message">
                {this.props.message}
            </div>
        )
    }
}