import React, { useState } from 'react';
import './UserForm.css';

const UserForm = () => {
    const [ buttonColor, setButtonColor ] = useState('red')

    return(
        <div> 
            <form>
                <h1>Form</h1>
                <label>First Name
                    <input type="text" placeholder='first name'/>
                </label>
                <label>Last Name
                    <input type="text"/>
                </label>
                <label>Phone Number
                    <input type="text"/>
                </label>
                <button>Submit</button>
            </form>
            <button 
                className={buttonColor} 
                onClick={() => setButtonColor(buttonColor === 'red' ? 'blue': 'red')}
            >
            Change to {buttonColor === 'red' ? 'blue' : 'red'}
            </button>
        </div>
    )
}

export default UserForm