import React from 'react';

export default class App extends React.Component<any,any>{
    render(){
        let color = Math.floor(Math.random() * 8 + 1);

        return(
            <div className="lesson">
                <div className={"lesson__icon bg-color-" + color}>
                    {this.props.icon}
                </div>
                <div className="lesson__description">
                    <span className="lesson__title">{this.props.lesson}</span>
                    <span className="lesson__person">{this.props.person}</span>
                </div>
            </div>
        );
    }
}