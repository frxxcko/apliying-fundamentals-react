import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {

  

  return (
    <button className={styles.button} type={props.type} onClick={() => props.closePopup()}>
      {props.children}
    </button>
    )
}

export default Button;