import React, { useState } from 'react';
import { StudentListComponent } from '../../content/student-list-component/student-list.component';
import { RegisterComponent } from '../../content/register-component/register.component';
import { Student } from '../../../models/Student';

/**object  for swithing states */
export const childViews = {
    studentList: 'STUDENT_LIST',
    register: 'REGISTER'
};

//Test StudentModel object cause there's no DB
const initialStudent: Student[] = [{
    firstName: 'Abby',
    lastName: 'Adams',
    studentID: '123',
    email: 'abby@aol.com'
}, {
    firstName: 'Billy',
    lastName: 'Brown',
    studentID: '456',
    email: 'billy@bing.com'
}];

export const ContentComponent: React.FC = ()=> {
    //State with type defined as object properties for switch views
    const [view, setView] = useState<'STUDENT_LIST' | 'REGISTER'>('STUDENT_LIST');

    //manage studentListcomponent data
    const [students, setStudents] = useState<Student[]>(initialStudent);

    //Function add student model data to setStudents State
    const addStudent = (student: Student)=> {
        setStudents([...students, student]); //creact new array[student] by updated ...student data  
    };

    //Stateless component or functional componenet
    const getCurrentView = ()=> {
        switch(view) {
            case childViews.studentList: return <StudentListComponent setView={setView} students={students} /> //<..Component attribute=value of students data & setView data to child> //note:setView is the changing state before being passed to view as final state 
            case childViews.register: return <RegisterComponent setView={setView} addStudent={addStudent}/>
            default: return <React.Fragment />
        };
    };

    //page template
    return(
        <main>
            { getCurrentView() }
        </main>
    );
};