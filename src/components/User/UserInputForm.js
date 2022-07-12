import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card'
import styles from './UserInputForm.module.css'

const UserInputForm = (props) => {
    
    const [username, setUsername] = useState('');
    const [userAge, setUserAge] = useState(0);

    const captureUsername = (e) => setUsername(e.target.value);
    const captureUserAge = (e) => setUserAge(e.target.value);

    const submitHandler = (event) => {
        event.preventDefault();
        debugger


        const user = {
            username: username,
            age: userAge
        }


        props.addUser(user)
    }

    return (
        <Card >
            <form onSubmit={submitHandler} className={styles.form_control}>
                <label htmlFor="username">Username</label>
                <input required onChange={captureUsername} type="text" id="username" placeholder='Please type an username' autoComplete='off'/>
                
                <label htmlFor="age">Age (Years)</label>
                <input required onChange={captureUserAge} type="number" id="age" placeholder='Please type your age' />

                <Button type='submit'>Submit</Button>
            </form>
        </Card>
    )
}

export default UserInputForm