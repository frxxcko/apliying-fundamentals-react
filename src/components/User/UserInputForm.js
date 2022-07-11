import React from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card'
import styles from './UserInputForm.module.css'

const UserInputForm = () => {
    
    const submitHandler = (event) => {
        event.preventDefault();
        console.log('SH');
    }

    return (
        <Card>
            <form onSubmit={submitHandler} className={styles.form_control}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder='Please type an username' autoComplete='off'/>
                
                <label htmlFor="age">Age (Years)</label>
                <input type="number" id="age" placeholder='Please type your age' />

                <Button type='submit'>Submit</Button>
            </form>
        </Card>
    )
}

export default UserInputForm