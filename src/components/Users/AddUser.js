import React, {useState} from "react";
import Card from "../UI/Card/Card";

import classes from  './AddUser.module.css'
import Button from "../UI/Button/Button";


const AddUser = (props) => {

    const [userNameEntered, setUserName] = useState('');
    const [userAgeEntered, setUserAge] = useState('');
    let userObj = {};

    const getUserName = (event) => {
        setUserName(event.target.value);
    };

    const getUserAge = (event) => {
        setUserAge(event.target.value)
    };

    const onAddUser = (event) => {
        event.preventDefault()

        if(userAgeEntered.trim().length === 0 || userNameEntered.trim().length === 0)
        {
            return;
        }

        if(Number(userAgeEntered) < 1)
        {
            console.log('too small');
            return;
        }

        console.log(userNameEntered +' '+ userAgeEntered);
        userObj.name = userNameEntered;
        userObj.age = userAgeEntered;
        userObj.id = Math.random().toString();

        props.onAddUser(userObj);

        setUserAge('');
        setUserName('');
    };

    return (
        <Card cssClassName={classes.input} >
            <form onSubmit={onAddUser}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={userNameEntered} onChange={getUserName}/>
                <label htmlFor="age">Age(Years)</label>
                <input type="number" id="age" value={userAgeEntered} onChange={getUserAge}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>

 );
};

export default AddUser;
