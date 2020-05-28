import React, { useState } from 'react';
import UserPool from '../helpers/userPool';


interface ContainerProps{ }
const SignUp: React.FC<ContainerProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], [], (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
        boarderRadius="25px"
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder="email here"
        />

        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
          placeholder="password here"
        />

        <button type='submit'>Add User </button>
      </form>
    </div>
  );
};
export default SignUp;