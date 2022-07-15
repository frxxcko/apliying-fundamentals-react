import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card'
import styles from './UserInputForm.module.css'

const UserInputForm = (props) => {
    const [username, setUsername] = useState('');
    const [userAge, setUserAge] = useState(0);

    const captureUsername = (e) => setUsername(e.target.value);
    const captureUserAge = (e) => setUserAge(e.target.value);

    const isUserInputValid = (username, age) => {
        let isValidInput = true;
        let _username = username.trim();
        if(!_username || _username.split(' ').length > 1)
        {
            isValidInput = false;
            props.displayErrorModal('username');
        }
        else if(!age || age < 0)
        {
            isValidInput = false;
            props.displayErrorModal('age');
        }
        
        return isValidInput;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        if(!isUserInputValid(username, userAge)) return;
        
        const USER = {
            id: props.setNewID(),
            username: username.trim(),
            age: userAge
        }

        props.addUser(USER)
    }

    return (
        <Card className={styles.card_form}>
            <form onSubmit={submitHandler} className={styles.form_control}>
                <label htmlFor="username">Username</label>
                <input onChange={captureUsername} type="text" id="username" placeholder='Please type an username' autoComplete='off'/>
                
                <label htmlFor="age">Age (Years)</label>
                <input onChange={captureUserAge} type="number" id="age" placeholder='Please type your age' />

                <Button type='submit'>Submit</Button>
            </form>
        </Card>
    )
}

export default UserInputForm