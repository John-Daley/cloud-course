import React from 'react';
import {Link} from 'react-router-dom';

import * as ROUTES from '../'



 
const Navigation = (value) => ( 
    const [value, setValue] = React.useState(
        localStorage.getItem('myValueInLocalStorage') || ''
      );
    <div>{value ? <NavigationAuth /> : <NavigationNonAuth />}</div>

    );

  const NavigationAuth = () => (
    <ul className ="navNavUl">
      <li>
        <Link to="/">LandingAUTH</Link>
      </li>
     
    </ul>
  );
  const NavigationNonAuth = () => (
    <ul className="navNavUl">
      <li>
      <Link to="/admin">LandingNonNuth</Link>
      </li>
      
    </ul>
  );
  

export default Navigation;