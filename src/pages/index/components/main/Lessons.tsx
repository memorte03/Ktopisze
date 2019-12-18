import React from 'react';
import Lesson from '../ui/Lesson'
import data from '../../../../data/lessons.json'

export default class App extends React.Component<any,any>{

    render(){
        var lessons = data.map(lesson =>{
            return(
                <Lesson lesson={lesson.lesson} person={lesson.person} key={lesson["lesson-number"]}/>
            )
        })

        return(
            <div>
               <h3>Lessons</h3>
               {lessons}
            </div>
        );
    }
}