import React from 'react';
import {Link} from 'react-router-dom';

import * as ROUTES from '../'


const Navigation = ({ authUser }) => (
    <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
  );
  const NavigationAuth = () => (
    <ul className ="navNavUl">
      <li>
        <Link to="/admin">Landing</Link>
      </li>
     
    </ul>
  );
  const NavigationNonAuth = () => (
    <ul className="navNavUl">
      <li>
      <Link to="/">Landing</Link>
      </li>
      
    </ul>
  );
  

export default Navigation;