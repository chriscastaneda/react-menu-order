import React, { useState } from 'react';

/**importing object for props */
interface StudentListProps{
    setView: (str: 'STUDENT_LIST' | 'REGISTER') => void; //setView fucntion with string params, returns void.
};

//Functional component with props params deined via Type
export const StudentListComponent: React.FC<StudentListProps> = (props)=> {
    return(
        <section>
            <header>
                <h2>Student List</h2>
            </header>

            <div>
                <button onClick={()=> props.setView("REGISTER")}>Register New Student</button>
            </div>
        </section>
    );
};