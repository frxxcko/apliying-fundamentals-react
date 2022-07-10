import React from 'react'
import styles from './PopUp.module.css'
import Card from './Card'
import Button from './Button'

const PopUp = (props) => {
  return (
    <Card>
      <div className={styles.container}>
        <h2 className={styles.title_header}>
          {/* {props.children} */}
          Invalid input
        </h2>
        <p className={styles.p}>Hello world!</p>
        <Button type='button'>Okay</Button>
      </div>
    </Card>
  )
}

export default PopUp;