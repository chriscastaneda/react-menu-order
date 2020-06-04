import React from 'react';
import { Student } from '../../../models/Student';
import './student-card.component.css';

/**Defining StudentCardComponent Props */
interface StudentCardComponentProps{
    student: Student;
}
/**Render card & data */
export const StudentCardComponent: React.FC<StudentCardComponentProps> = (props)=> {
    return(
        <div className="student-card">
            <div className="student-name"> {props.student.firstName} {props.student.lastName} </div> {/**Passing parent data */}
            <div className="studen-id"><span className="muted">ID: </span> {props.student.studentID} </div>
            <div className="email"><a href={"mailto:"+props.student.email}> {props.student.email} </a></div>
        </div>
    );
};