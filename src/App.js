import React, { useState } from 'react'
import PopUp from './components/UI/PopUp';
import UserInputForm from './components/User/UserInputForm';
import Container from './components/UI/Container'
import UserList from './components/User/UserList';

const App = () => {
  const USERNAME_ERROR_TITLE = "Invalid Username";
  const USERNAME_ERROR_MESSAGE = "Please enter one valid username.";
  const AGE_ERROR_TITLE = "Invalid input age";
  const AGE_ERROR_MESSAGE = "Age can't be a negative number.";
  
  const [isPopUp, setIsPopUp] = useState('');
  const [usersList, setUsersList] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState("Error message.");
  const [ errorTitle, setErrorTitle ] = useState("Error title");

  const displayUsernameErrorModal = () => {
      setErrorTitle(USERNAME_ERROR_TITLE)
      setErrorMessage(USERNAME_ERROR_MESSAGE);
      setIsPopUp(true);
  }

  const displayAgeErrorModal = () =>{
      setErrorTitle(AGE_ERROR_TITLE)
      setErrorMessage(AGE_ERROR_MESSAGE);
      setIsPopUp(true);
  }

  const displayErrorModal = (input) => {
    switch (input) {
      case 'username':
        displayUsernameErrorModal();
        break;
      case 'age':
        displayAgeErrorModal();
        break;
      default:
        break;
    }
  }

  const addUserToList = (user) => setUsersList( prevUserList => [ user , ...prevUserList ]);

  const closePopup = () => setIsPopUp(false);

  return (
    <>
      {isPopUp && <PopUp errorMessage={errorMessage} errorTitle={errorTitle} closePopup={closePopup} />}
      {!isPopUp &&
      <Container>
        <UserInputForm addUser={addUserToList} displayErrorModal={displayErrorModal}/>
        <UserList userList={usersList}/>
      </Container>
      }
    </>
  );
}

export default App;
