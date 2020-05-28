import React from 'react';
import {Link} from 'react-router-dom';

import * as ROUTES from '../'



 
const Navigation = ({value}) => ( 
      
    <div>{value ? <NavigationAuth /> : <NavigationNonAuth />}</div>

    );

  const NavigationAuth = () => (
    <ul className ="navNavUl">
      <li>
        <Link to="/admin">ADMINAUTH</Link>
        <Link to="/userpage">UserPageAuth</Link>
      </li>
      <li>
        
        <Link to="/userpage">UserPageAuth</Link>
      </li>
    </ul>
  );
  const NavigationNonAuth = () => (
    <ul className="navNavUl">
      <li>
      <Link to="/home">ADMINNuth</Link>
      </li>
      
    </ul>
  );
  

export default Navigation;