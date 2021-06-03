import logo from './logo.svg';
import './App.css';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList/UsersList";
import {useState} from "react";

const USERS_ARRAY = [
    {id: 1,name: 'John Doe',age: '40'},
    {id: 2,name: 'Scott Tiger',age: '55'},
    {id: 3,name: 'Maurice green',age: '46'},
];

const  App = () => {
    const [usersList, setUsersList] = useState(USERS_ARRAY);
    const addUser = (user) => {
        setUsersList((prevUsersList) =>{
            return [...prevUsersList, user]
        });
    };


  return (
    <div>
      <AddUser onAddUser={addUser}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
