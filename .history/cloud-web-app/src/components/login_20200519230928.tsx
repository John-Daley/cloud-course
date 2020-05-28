import React, { useState } from 'react';
import UserPool from '../helpers/userPool';
import {CognitoUser , AuthenticationDetails } from 'amazon-cognito-identity-js';
import { Redirect, Router, withRouter } from 'react-router';
import { push } from 'ionicons/icons';
import AdminPage from '../pages/adminPage';
import { AppContext } from '../App';
interface ContainerProps{ }
const Login: React.FC<ContainerProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const [authed ,setAuthed] = useState('');


  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  var userAuth = false;  
  const user = new CognitoUser({
      Username: email,
      Pool: UserPool
  }) ; 
  const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password
  });
  const Header = () => {
    return <AppContext.Consumer>
    {
      ({authenticated}) => {
        if(authenticated) {
          return <h1>Logged in!</h1>
        }
        return <h1>You need to sign in</h1>
      }
    }
    </AppContext.Consumer>
  }
  
  user.authenticateUser(authenticationDetails,{
      onSuccess: data=>{
        console.log('success is  on ', data);
      setAuthed("authed");
      },
      onFailure: err=>{
          console.error('onFaulure:' , err)
      },
      newPasswordRequired: data => {
          console.log('new pass word required:  ', data)
      }
  });
  
};

  return (
   <AppContext.Consumer>
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
    </AppContext.Consumer>
  );
};
export default Login;