import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { any } from 'prop-types';

import Message from './MessageContainer';

export default class PrivateMessaging extends React.Component<any, any>{
    constructor(props: any){
        super(props)
    }

    render(){
        return(
            <div>
                <Message
                    userProfile = ""
                    username = "Emer"
                    date = "10:21"
                    message = "Zagrajmy w fortnite chłopaki"
                />

                <Message
                    userProfile = ""
                    username = "PEPE"
                    date = "10:21"
                    message = "JD"
                />

                <Message
                    userProfile = ""
                    username = "Emer"
                    date = "10:21"
                    message = "BOI Kurła"
                />

                <Message
                    userProfile = ""
                    username = "Emer"
                    date = "10:21"
                    message = {["Saab", "Volvo", "BMW"]}
                />
            </div>

        )
    }
}