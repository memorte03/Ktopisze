import React from 'react';

export default class App extends React.Component<any,any>{
    render(){
        let color = Math.floor(Math.random() * 8 + 1);

        return(
            <div className={"homework bg-color-" + color}>
                <span className="homework__title">{this.props.title}</span>
                <span className="homework__date">{this.props.date}</span>
                <span className="homework__description">{this.props.description}</span>
            </div>
        );
    }
}