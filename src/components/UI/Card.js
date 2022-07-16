import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {

    const clickHandler = event => event.stopPropagation();

    return (
    <div className={`${styles.card} ${props.className}`} onClick={clickHandler}>
        {props.children}
    </div>
  )
}

export default Card