import React, { useState } from 'react';
import UserPool from '../helpers/userPool';


interface ContainerProps{ }
const Login: React.FC<ContainerProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

  
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder=
        />

        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <button type='submit'>Login</button>
      </form>
    </div>
  );
};
export default Login;