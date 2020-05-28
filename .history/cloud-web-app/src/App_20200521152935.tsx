import React, {createContext, useEffect, useReducer, useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonHeader, IonTitle, IonToolbar, IonContent} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import AdminPage from './pages/adminPage';
import UserPage from './pages/userPage';
import Login  from './components/login';
import SignUp from './components/signUp';
import globalHook, { Store } from 'use-global-hook';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
//import history from './components/history'
/* Theme variables */

import './theme/variables.css';
import { createBrowserHistory as history} from 'history';
import Navigation from './components/navigation';
import { isNull } from 'util';



type ContextProps = { 
  authenticated: boolean
};

export const AppContext = 
  React.createContext<Partial<ContextProps>>({});
  var authUser = isNull;
  const App: React.FC = () => (
  
 
<IonApp>
  <IonHeader className="header-css">
        <IonToolbar>
          <IonTitle>DIY Security Camera AB </IonTitle>
          "https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.0-9/p960x960/29468160_2015286372069529_9021510360649170944_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=--cwWTqI_wYAX_IIb_V&_nc_ht=scontent.fmmx3-1.fna&_nc_tp=6&oh=b5213df408f082abe3208fd53253c58e&oe=5EEB52D6";
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        </IonContent>
    <IonReactRouter >
      <IonRouterOutlet >
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/admin" component={AdminPage} exact={true}/>
        <Route path ="/userpage" component={UserPage}  exact={true}/>
      </IonRouterOutlet>
    </IonReactRouter>
  
  </IonApp>
);

export default App;
