import React from 'react';
import Homework from '../ui/Homework'
import data from '../../../../data/homeworks.json'

export default class App extends React.Component<any,any>{
    render(){
        let homeworks = data.map(homework =>{
            return(
                <Homework title={homework.title} date={homework.date} description={homework.description}/>
            )
        });

        return(
            <div>
                <h3>Homeworks</h3>
                <div className="homeworks-flex">
                {homeworks}
                </div>
            </div>
        );
    }
}