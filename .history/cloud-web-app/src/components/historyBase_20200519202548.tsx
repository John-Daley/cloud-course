import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonText, IonAvatar, IonThumbnail, IonButton, IonIcon, IonDatetime, IonSelect, IonSelectOption, IonToggle, IonInput, IonCheckbox, IonRange } from '@ionic/react';
import { closeCircle, home, star, navigate, informationCircle, checkmarkCircle, shuffle } from 'ionicons/icons';
//import './ExploreContainer.css';

interface ContainerProps { }

// to do 
// add the generation of the ion item to a function to generate based on the api call to get history
const ItemExamples: React.FC<ContainerProps> = () => {
 const testPhoto = "https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.0-9/p960x960/29468160_2015286372069529_9021510360649170944_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=--cwWTqI_wYAX_IIb_V&_nc_ht=scontent.fmmx3-1.fna&_nc_tp=6&oh=b5213df408f082abe3208fd53253c58e&oe=5EEB52D6";
    return (
    
    
      
      
   <IonList className="historyList">
   <IonItem href="#">
          <IonLabel>
         Identity: name or unknown displayed here depending on response <br/>
         Seen : here is time seen with date <br/>
         Should we make these expandable to show list of the last time that user was seen! ? 

      </IonLabel>
          <IonThumbnail slot="start">
            <img src={testPhoto} />
          </IonThumbnail>
        </IonItem>

        <IonItem href="#">
        <IonLabel>
         Identity: name or unknown displayed here depending on response <br/>
         Seen : here is time seen with date <br/>
         Should we make these expandable to show list of the last time that user was seen! ? 

      </IonLabel>
          <IonThumbnail slot="start">
            <img src={testPhoto} alt="broekn" />
          </IonThumbnail>
        </IonItem>

        <IonItem href="#">
        <IonLabel>
         Identity: name or unknown displayed here depending on response <br/>
         Seen : here is time seen with date <br/>
         Should we make these expandable to show list of the last time that user was seen! ? 

      </IonLabel>
          <IonThumbnail slot="start">
            <img src={testPhoto} alt="broekn" />
          </IonThumbnail>
        </IonItem>
        </IonList>
      
     
    
  );
 
};
export default ItemExamples;