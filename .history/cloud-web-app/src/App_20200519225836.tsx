import React, {createContext, useEffect, useReducer} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import AdminPage from './pages/adminPage';
import UserPage from './pages/userPage';

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
type ContextProps = { 
  authenticated: boolean,
  lang: string,
  theme: string
};
export const AppContext = 
  React.createContext<Partial<ContextProps>>({});
const App: React.FC = () => (
  <IonApp>
    <AppContext.Provider value={{
      authenticated:true,
    }}> 
    <IonReactRouter >
      <IonRouterOutlet >
        <Route path="/home" component={Home} exact={true} />
<Route exact path="/" render={() => "/home"}/> 
        <Route path="/admin" component={AdminPage} exact={true}/>
        <Route path ="/userpage" component={UserPage}  exact={true}/>
      </IonRouterOutlet>
    </IonReactRouter>
    </AppContext.Provider>
    <AppContext.Provider value={{
      authenticated:false,
    }}> 
    <IonReactRouter >
      <IonRouterOutlet >
        <Route path="/home" component={Home} exact={true} />
<Route exact path="/" component={Home}/> 
   
      </IonRouterOutlet>
    </IonReactRouter>
    </AppContext.Provider>
  </IonApp>
);

export default App;
