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
        <Link to="/userpage"></Link>
      </li>
     
    </ul>
  );
  const NavigationNonAuth = () => (
    <ul className="navNavUl">
      <li>
      <Link to="/home">LandingNonNuth</Link>
      </li>
      
    </ul>
  );
  

export default Navigation;