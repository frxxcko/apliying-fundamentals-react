import React, { useState } from 'react'
import styles from './Card.module.css'

const Card = (props) => {
  const [isPopUp, setIsPopUp] = useState(false);

    return (
    <div className={styles.card}>
        {props.children}
    </div>
  )
}

export default Card