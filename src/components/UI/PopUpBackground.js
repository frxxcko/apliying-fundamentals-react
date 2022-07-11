import React from 'react'
import styles from './PopUpBackground.module.css'

const PopUpBackground = (props) => {
  return (
    <div className={styles.background}>
        {props.children}
    </div>
  )
}

export default PopUpBackground