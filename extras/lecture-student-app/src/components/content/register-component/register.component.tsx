import React, { useState } from 'react';

interface RegisterProps{
    setView: (str: 'STUDENT_LIST' | 'REGISTER') => void;
};

export const RegisterComponent: React.FC<RegisterProps> = (props)=> {
    return(
        <section>
            <header>
                <h2>Register New Student</h2>
            </header>

            <div>
                <button onClick={()=> props.setView("REGISTER")}>Back</button>
                <button>Save</button>
            </div>
        </section>
    );
};