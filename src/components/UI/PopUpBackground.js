import React from 'react'
import styles from './PopUpBackground.module.css'

const PopUpBackground = (props) => {
  
  const clickHandler = () => props.closePopup();

  return (
    <div className={styles.background} onClick={clickHandler}>
        {props.children}
    </div>
  )
}

export default PopUpBackground