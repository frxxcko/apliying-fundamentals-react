import React from 'react'
import styles from './PopUp.module.css'
import Card from './Card'
import Button from './Button'
import PopUpBackground from './PopUpBackground'

const PopUp = (props) => {
  
  
  return (
    <PopUpBackground>
      <Card>
        <div className={styles.container}>
          <h2 className={styles.title_header}>
            {props.children}
            Hello world!
          </h2>
          <p className={styles.p}>Hello world!</p>
          <Button type='button'>Okay</Button>
        </div>
      </Card>
    </PopUpBackground>
  )
}

export default PopUp;