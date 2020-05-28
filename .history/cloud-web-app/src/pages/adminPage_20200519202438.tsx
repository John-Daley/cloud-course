import { IonContent,IonImg, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid,IonCol,IonRow, IonLabel } from '@ionic/react';
import React from 'react';
//import ExploreContainer from '../components/ExploreContainer';
//import './Home.css';
import ItemExamples from '../components/historyBase'
import AddUser from '../components/addUser'
const testPhoto = "https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.0-9/p960x960/29468160_2015286372069529_9021510360649170944_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=--cwWTqI_wYAX_IIb_V&_nc_ht=scontent.fmmx3-1.fna&_nc_tp=6&oh=b5213df408f082abe3208fd53253c58e&oe=5EEB52D6";
const AdminPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="header-css">
        <IonToolbar>
          <IonTitle>DIY Security Camera AB</IonTitle>
        
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

