import React from 'react'
import styles from './UserItem.module.css'

const UserItem = (props) => {
    const firstName = props?.username?.at(0);
    const firstNameWithFirstLetterToUpperCase = !firstName? "" : firstName.toUpperCase() + props?.username?.slice(1);

    const clickHandler = () => props.deleteUserItem(props.id);
    
    return (
    <li className={styles.item} tabIndex='0' onClick={clickHandler} id={props.id} onKeyDown={e => e.code === "Space" && clickHandler()}>
        <h3>{`${firstNameWithFirstLetterToUpperCase}`}</h3>
        <h4>Age: {props.age}</h4>
    </li>
  )
}

export default UserItem