import React from 'react'
import styles from './PopUp.module.css'
import Card from './Card'
import Button from './Button'
import PopUpBackground from './PopUpBackground'

const PopUp = (props) => {

  const closePopup = () => props.closePopup();

  return (
    <PopUpBackground >
      <Card className={styles.card_popup}>
        <div className={styles.container}>
          <h2 className={styles.title_header}>{props.errorTitle}</h2>
          <p className={styles.p}>{props.errorMessage}</p>
          <Button type='button' click={closePopup}>Okay</Button>
        </div>
      </Card>
    </PopUpBackground>
  )
}

export default PopUp;