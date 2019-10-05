import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { any } from 'prop-types';

import PrivateMessaging from './PrivateMessaging/PrivateMessaging'

export default class App extends React.Component<any, any>{
    constructor(props: any){
        super(props)
    }

    render(){
        return(
            <div><PrivateMessaging/></div>
        )
    }
}