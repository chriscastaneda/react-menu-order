import React, { useState } from 'react';
import { StudentListComponent } from '../../content/student-list-component/student-list.component';
import { RegisterComponent } from '../../content/register-component/register.component';

/**object  multiple states */
export const childView = {
    studentList: 'STUDENT_LIST',
    register: 'REGISTER'
};

export const ContentComponent: React.FC = ()=> {
    //State with type defined as object properties
    const [view, setView] = useState<'STUDENT_LIST' | 'REGISTER'>('STUDENT_LIST');

    //Stateless component or functional componenet
    const getCurrentView = ()=> {
        switch(view) {
            case childView.studentList: return <StudentListComponent setView={setView}/> //<..Component attribute=value of setView> //note:setView is the changing state before being passed to view as final state 
            case childView.register: return <RegisterComponent setView={setView}/>
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