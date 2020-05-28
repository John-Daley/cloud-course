import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
const testPhoto = "https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.0-9/p960x960/29468160_2015286372069529_9021510360649170944_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=--cwWTqI_wYAX_";
const UserPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLabel>
                Welcome John Daley
              </IonLabel>
        <img className="ion-notimage" src={testPhoto}/>
      </IonContent>
    </IonPage>
  );
};

export default UserPage;
