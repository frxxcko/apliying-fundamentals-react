import React, { useState } from 'react'
import Card from './components/UI/Card';
import PopUp from './components/UI/PopUp';
import UserInputForm from './components/User/UserInputForm';
import Container from './components/UI/Container'

const App = () => {
  const [isPopUp, setIsPopUp] = useState(false);


  return (
    <>
    <Container>
      <UserInputForm />
    </Container>
      {isPopUp && <PopUp />}
    </>
  );
}

export default App;
