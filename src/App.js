import React, { useState } from 'react'
import PopUp from './components/UI/PopUp';
import UserInputForm from './components/User/UserInputForm';
import Container from './components/UI/Container'
import UserList from './components/User/UserList';

const App = () => {
  const USERNAME_ERROR_TITLE = "Invalid Username";
  const USERNAME_ERROR_MESSAGE = "Please enter one valid username.";
  const AGE_ERROR_TITLE = "Invalid input age";
  const AGE_ERROR_MESSAGE = "Age input can't be empty or a negative number.";
  
  const [ isPopUp, setIsPopUp ] = useState('');
  const [ usersList, setUsersList ] = useState([{id: 0, username: '', age: 0}]);
  const [ showMaxUsersMessage , setShowMaxUsersMessage ] = useState('');
  
  const [ errorInfo, setErrorInfo ] = useState({ title: "Error title.", message: "Error message."});

  const displayUsernameErrorModal = () => {
    setErrorInfo({ 
      title: USERNAME_ERROR_TITLE,
      message: USERNAME_ERROR_MESSAGE
    })
    setIsPopUp(true);
  }
  
  const displayAgeErrorModal = () =>{
    setErrorInfo({ 
      title: AGE_ERROR_TITLE,
      message: AGE_ERROR_MESSAGE
    })
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

  const addUserToList = (user) => {
    if(usersList.length <= 5)
    {
      setUsersList( prevUserList => [ user , ...prevUserList ]);
      return;
    }
    
    setShowMaxUsersMessage(true)
  }
  
  const setNewID = () => Number(usersList?.at(0).id) + 1
  
  const deleteUserItem = (userIdToDelete) => {
    setShowMaxUsersMessage(false);
    setUsersList(usersList?.filter( user => user?.id !== userIdToDelete));
  }
  const closePopup = () => setIsPopUp(false);

  return (
    <>
      {isPopUp && <PopUp errorInfo={errorInfo} errorMessage={errorMessage} errorTitle={errorTitle} closePopup={closePopup} />}
      <Container>
        <UserInputForm addUser={addUserToList} displayErrorModal={displayErrorModal} setNewID={setNewID}/>
        <UserList userList={usersList} showMaxUsersMessage={showMaxUsersMessage} deleteUserItem={deleteUserItem}/>
      </Container>
    </>
  );
}

export default App;
