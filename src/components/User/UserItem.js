import React from 'react'
import styles from './UserItem.module.css'

const UserItem = (props) => {
    const firstName = props?.username?.at(0);
    const firstNameWithFirstLetterToUpperCase = !firstName? "" : firstName.toUpperCase() + props?.username?.slice(1);

    const clickItemHandler = (e) => {
        console.log(e);
    }
    
    return (
    <li className={styles.item} onClick={clickItemHandler} tabIndex='0'>
        <h3>{`${firstNameWithFirstLetterToUpperCase}`}</h3>
        <h4>Age: {props.age}</h4>
    </li>
  )
}

export default UserItem