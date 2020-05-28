import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonText, IonAvatar, IonThumbnail, IonButton, IonIcon, IonDatetime, IonSelect, IonSelectOption, IonToggle, IonInput, IonCheckbox, IonRange } from '@ionic/react';
import { closeCircle, home, star, navigate, informationCircle, checkmarkCircle, shuffle } from 'ionicons/icons';
//import './ExploreContainer.css';

interface ContainerProps { }

// to do 
// add the generation of the ion item to a function to generate based on the api call to get history
const ItemExamples: React.FC<ContainerProps> = () => {
 
 const historyPhotoOne = "https://facehistory.s3.eu-west-2.amazonaws.com/0.jpg";
 const historyPhotoTwo= "https://facehistory.s3.eu-west-2.amazonaws.com/1.jpg";
 const historyPhotoThree = "https://facehistory.s3.eu-west-2.amazonaws.com/2.jpg";
 const historyPhotoFour= "https://facehistory.s3.eu-west-2.amazonaws.com/3.jpg";
 const historyPhotoFive= "https://facehistory.s3.eu-west-2.amazonaws.com/4.jpg";
 const historyPhotoSix= "https://facehistory.s3.eu-west-2.amazonaws.com/5.jpg";
 const historyPhoto7= "https://facehistory.s3.eu-west-2.amazonaws.com/6.jpg"; 
 const historyPhoto8= "https://facehistory.s3.eu-west-2.amazonaws.com/7.jpg";
 const historyPhoto9= "https://facehistory.s3.eu-west-2.amazonaws.com/8.jpg";
 const historyPhoto10 = "https://facehistory.s3.eu-west-2.amazonaws.com/9.jpg";
  
 return (
    
    
      
      
   <IonList className="historyList">
   <IonItem href="#">
       
            <img src={historyPhotoOne} />
         
        </IonItem>

        <IonItem href="#">
        
            <img src={historyPhotoTwo} alt="broekn" />
         
        </IonItem>

        <IonItem href="#">
      
            <img src={historyPhotoThree} alt="broekn" />
        
        </IonItem>
        <IonItem href="#">
     
            <img src={historyPhotoFour} alt="broekn" />
         
        </IonItem>
        <IonItem href="#">
       
            <img src={historyPhotoFive} alt="broekn" />
        
        </IonItem>
        <IonItem href="#">
     
            <img src={historyPhotoSix} alt="broekn" />
          
        </IonItem>
        <IonItem href="#">
      
            <img src={historyPhoto7} alt="broekn" />
          
        </IonItem>
        <IonItem href="#">
       
          
            <img src={historyPhoto8} alt="broekn" />
          
        </IonItem>
        <IonItem href="#">
      
          
            <img src={historyPhoto9} alt="broekn" />
          
        </IonItem>
        </IonList>
      
     
    
  );
 
};
export default ItemExamples;