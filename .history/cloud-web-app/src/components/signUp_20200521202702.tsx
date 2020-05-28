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
          value={email}
          onChange={event => setEmail(event.target.value)}
          place="email here"
        />

        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <button type='submit'>Confirm</button>
      </form>
    </div>
  );
};
export default SignUp;