import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {

  

  return (
    <button className={styles.button} type={props.type} onClick={ () => props.click()}>
      {props.children}
    </button>
    )
}

export default Button;