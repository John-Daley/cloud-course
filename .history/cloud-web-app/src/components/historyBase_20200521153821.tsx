import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonText, IonAvatar, IonThumbnail, IonButton, IonIcon, IonDatetime, IonSelect, IonSelectOption, IonToggle, IonInput, IonCheckbox, IonRange } from '@ionic/react';
import { closeCircle, home, star, navigate, informationCircle, checkmarkCircle, shuffle } from 'ionicons/icons';
//import './ExploreContainer.css';

interface ContainerProps { }

// to do 
// add the generation of the ion item to a function to generate based on the api call to get history
const ItemExamples: React.FC<ContainerProps> = () => {
 const testPhoto = "https://l.facebook.com/l.php?u=https%3A%2F%2Fs3.console.aws.amazon.com%2Fs3%2Fbuckets%2Frasmuspubli&h=AT0BEtirx8GlUXR3flaBeVAaFV-6M-qaLOORQoraDPy9kjfUALFD5nNxav6atyBVQnvKQfJuYxdCfZAaQVZMonuR57MHhE9d1Bm_NEAJHGbXlKcJiQO-ndKVVpmRcQ";
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