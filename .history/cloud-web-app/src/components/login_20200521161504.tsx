import React, { useState, useEffect } from 'react';
import UserPool from '../helpers/userPool';
import {CognitoUser , AuthenticationDetails } from 'amazon-cognito-identity-js';
import { Redirect, Router, withRouter } from 'react-router';
import { push } from 'ionicons/icons';
import AdminPage from '../pages/adminPage';
interface ContainerProps{ }


const Login: React.FC<ContainerProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [authed ,setAuthed] = useState('');
  const [value, setValue] = React.useState('');
  React.useEffect(() => {
    localStorage.setItem('myValueInLocalStorage', value);
  }, [value]);
  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
 
    var userAuth = "authedVar";  
  const user = new CognitoUser({
      Username: email,
      Pool: UserPool
  }) ; 
  const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password
  });
  user.authenticateUser(authenticationDetails,{
      onSuccess: data=>{
        console.log('success is  on ', data);
      setValue("authed");
    localStorage.setItem('userName', authenticationDetails.getUsername )  
    },
      onFailure: err=>{
          console.error('onFaulure:' , err)
          setValue("unAuthed")
      },
      newPasswordRequired: data => {
          console.log('new pass word required:  ', data)
      }
  });
  //  if (value == ("authed")){
  //      return (<Redirect from='/home' to="/admin" />)
  //  }

};

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder="johnSmith@coolemail.com"
        />

        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
          placeholder="8675309JENnY!"
        />

        <button type='submit'>Login</button>
      </form>
    </div>
  );
};
export default Login ;