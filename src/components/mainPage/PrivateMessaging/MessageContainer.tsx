import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { any } from 'prop-types';

import ProperMessage from './ProperMessage';

export default class Message extends React.Component<any, any>{
    constructor(props: any){
        super(props)

        
    }

    render(){
        let message = this.props.message;
        let renderMessage = "xd";

        if(Array.isArray(message) && message.length > 1){
            for(let i = 0; i < message.length; i++){
                renderMessage += (" <ProperMessage message=" + `"${message[i]}"` + "/> ");
            }
        } else{renderMessage = "<ProperMessage message=" + "XD" + "/>"};

        let lol = <ProperMessage message="BMW"/> 

        function xd(){
            return('<ProperMessage message="BMW"/> ');
        }

        return(
            <div className="message__main-container">
                <div className="message__user-profile-picture">
                    {this.props.userProfilePicture || ""}
                </div>
                <div>
                    <div className="message__info-container">
                        <div className="message__username">
                            {this.props.username || "Unknown user"}
                        </div>
                        <div className="message__date">
                            {this.props.date || "XX:XX"}
                        </div>
                    </div>
                    <div>
                        {}
                    </div>
                    
                </div>
            </div>
        )
    }
}