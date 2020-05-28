import { IonContent,IonImg, IonList, IonItem, IonInput, IonToggle, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid,IonCol,IonRow, IonLabel } from '@ionic/react';
import React from 'react';
//import ExploreContainer from '../components/ExploreContainer';
//import './Home.css';
import ItemExamples from '../components/historyBase'
import AddUser from '../components/addUser'
const testPhoto = "https://lastimagebucket.s3.eu-west-2.amazonaws.com/lastimage.jpg";
const AdminPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="header-css">
        <IonToolbar>
          <IonTitle>DIY Security Camera AB</IonTitle>
          <IonList>
      <IonItem>
        <IonLabel>Input</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel>Toggle</IonLabel>
        <IonToggle slot="end"></IonToggle>
      </IonItem>
      <IonItem>
        <IonLabel>Radio</IonLabel>
        <IonRadio slot="end"></IonRadio>
      </IonItem>
      <IonItem>
        <IonLabel>Checkbox</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
    </IonList>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel>
                Welcome John Daley
              </IonLabel>
              <img className="ion-notimage" src={testPhoto}/></IonCol>
          <IonCol> <AddUser/> <ItemExamples /> </IonCol>
          </IonRow>
        </IonGrid>
          
      </IonContent>
    </IonPage>
  );
};

export default AdminPage;

