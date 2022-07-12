import React from 'react'
import styles from './UserItem.module.css'

const UserItem = (props) => {
    const firstNameWithFirstLetterToUpperCase = props.username.at(0).toUpperCase() + props.username.slice(1).split(" ")[0]??"";
    const secondName = props.username.split(" ")[1] ?? '';
    debugger
    const secondNameFirstLetterToUpperCase = secondName?.at(0)?.toUpperCase() + secondName?.slice(1) ?? '';
    

    const clickItemHandler = (e) => {
        console.log(e);
    }
    
    return (
    <li className={styles.item} onClick={clickItemHandler}>
        <h3>{`${firstNameWithFirstLetterToUpperCase}`}</h3>
        <h4>Age: {props.age}</h4>
    </li>
  )
}

export default UserItem