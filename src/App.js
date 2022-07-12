import React, { useState } from 'react'
import PopUp from './components/UI/PopUp';
import UserInputForm from './components/User/UserInputForm';
import Container from './components/UI/Container'
import UserList from './components/User/UserList';

const App = () => {
  const [isPopUp, setIsPopUp] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState("Error message.");
  const [ errorTitle, setErrorTitle ] = useState("Error title");

  const validateAgeInput = (user) =>{
    let valid = true;

    if(user.age < 0){
      valid = false; 
      setErrorMessage("Age can't be negative.");
      setErrorTitle("Invalid input age")
      setIsPopUp(true);
    }
    
    return valid;
  }

  const addUserToList = (user) => {
    debugger
    if(!validateAgeInput(user)) return;

    setUsersList( prevUserList => [ user , ...prevUserList ]);
  }

  const closePopup = () => setIsPopUp(false);
  
  return (
    <>
      {!isPopUp && <PopUp errorMessage={errorMessage} errorTitle={errorTitle} closePopup={closePopup} />}
    <Container>
      <UserInputForm addUser={addUserToList}/>
      <UserList userList={usersList}/>
    </Container>
    </>
  );
}

export default App;
