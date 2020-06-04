import React from 'react';
import { Student } from '../../../models/Student'
import { StudentCardComponent } from '../student-card/student-card.component';
import './student-list.component.css'

/**Defining props from ContentComponet parent data & Student model*/
interface StudentListProps{
    setView: (str: 'STUDENT_LIST' | 'REGISTER') => void; //setView swtich function with string params, returns void.
    students: Student[]; //Model object data declared for props
};

//Functional component with props params deined via <DataType>
export const StudentListComponent: React.FC<StudentListProps> = (props)=> {

    //render Student model properties function
    const renderStudentComponents = ()=> {
        return props.students.map(student => { //map matching parent data to StudentCardComponent data
            return (<StudentCardComponent key={student.studentID} student={student}></StudentCardComponent>) //key={student.studentID} making new data unique for virtual DOM rendering efficientcy.
        });
    };

    return(
        <section>
            <header>
                <h2>Student List</h2>
            </header>

            <div>
                <button onClick={()=> props.setView('REGISTER')}>Register New Student</button> {/**onClick function sends data to parent by callBack funct. */}
            </div>

            <section id="student-list-container">
                {renderStudentComponents()}
            </section>
        </section>
    );
};