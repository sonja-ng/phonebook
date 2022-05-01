import React, { useState } from 'react';
import './UserForm.css';

const UserForm = () => {
    const [ buttonColor, setButtonColor ] = useState('red')
    const [ disableStatus, setDisableStatus ] = useState(false);

    const btnColor = buttonColor === 'red' ? 'blue': 'red'
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
                onClick={() => setButtonColor(btnColor)}
                disabled={disableStatus}
            >
            Change to {btnColor}
            </button>
            <label>Change button status
            <input 
                type="checkbox"
                aria-checked={disableStatus}
                onChange={(e) => setDisableStatus(e.target.checked) }
            />
            </label>
        </div>
    )
}

export default UserForm