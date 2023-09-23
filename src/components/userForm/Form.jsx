import { useState } from 'react';
import './Form.styles.css';

const Form = function() {
    const [user, setUser] = useState('');
    
    const handleSubmission = function(e) {
        e.preventDefault();
        return <p>Thank you {user} </p>;
    }

    return (
        <div className='form-container'  >
        
            <form action="">
                <input autoFocus type="text" placeholder="Name" required onChange={() => setUser(user)} />

                <input type="email" placeholder="Email" required />

                <textarea name="" id="" cols="30" rows="10" placeholder="Describe the purpose of form" />

                <input type="submit" value='Submit' onSubmit={handleSubmission} />
            </form>    

        </div>
    )
}

export default Form;