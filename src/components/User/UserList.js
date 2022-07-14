import React from 'react'
import Card from '../UI/Card'
import UserItem from './UserItem'
import styles from './UserList.module.css'

const UserList = (props) => {
  return (
    <Card className={styles.card_list}>
        <h2>List of users</h2>
        <ul className={styles.user_list}>
            {props.userList.map( (user, index) => <UserItem username={user.username} age={user.age} key={`${user.username.replace(" ", "-")}-${index}`}/> )}
        </ul>
    </Card>
  )
}

export default UserList