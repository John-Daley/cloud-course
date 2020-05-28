import React from 'react';
import {Link} from 'react-router-dom';

import * as ROUTES from '../'



 
const Navigation = ({value}) => ( 
      
    <div>{<NavigationAuth />}</div>

    );

  const NavigationAuth = () => (
    <ul className ="navNavUl">
      <li>
        <Link to="/admin">Admin Page</Link>
 
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