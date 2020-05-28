import React from 'react';
//import './ExploreContainer.css';
import {IonItem, IonLabel, IonSelect, IonSelectOption} from '@ionic/react';
import SignUp from ''
interface ContainerProps { }

const AddUser: React.FC<ContainerProps> = () => {
  return (
  

<IonItem >
          <IonLabel slot="start">DIY Security Camera</IonLabel>
          <IonLabel slot="end" >sillyMenuIdea</IonLabel>
          <IonSelect>
            <IonSelectOption value="">Add User</IonSelectOption>
            <IonSelectOption value="nes">Remove User</IonSelectOption>
            <IonSelectOption value="n64">Log Out</IonSelectOption>
          </IonSelect>
        </IonItem>
  
  );
};

export default AddUser;