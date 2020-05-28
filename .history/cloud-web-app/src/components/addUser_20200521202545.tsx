import React, { useState } from 'react';
//import './ExploreContainer.css';
import {IonItem, IonLabel, IonSelect, IonSelectOption} from '@ionic/react';
import SignUp from './signUp'
interface ContainerProps { }


const AddUser: React.FC<ContainerProps> = () => {
  const [addUser, setAddUser] = useState<string>('')
  
  return (
  

<IonItem >
          <IonLabel slot="start">DIY Security Camera</IonLabel>
          <IonLabel slot="end" > Add User </IonLabel>
          <SignUp/>
         
        </IonItem>
  
  );
};

export default AddUser;