import React, { useState } from 'react';
import UserPool from '../helpers/userPool';
import {CognitoUser , AuthenticationDetails } from 'amazon-cognito-identity-js';

interface ContainerProps{ }
const Login: React.FC<ContainerProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
   
  const user = new CognitoUser({
      Username: email,
      Pool: UserPool
  }) ; 
  const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password
  });
  user.authenticateUser(authenticationDetails,{
      onSuccess: data
  })
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
export default Login;