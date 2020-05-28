import { IonContent,IonImg,IonCard,IonCardContent,IonList, IonItem, IonCardHeader,IonChip,IonAvatar, IonCardSubtitle, IonCardTitle,IonHeader, IonPage, IonTitle, IonToolbar, IonGrid,IonCol,IonRow, IonLabel } from '@ionic/react';
import React, {useState } from 'react';
import UserPool from '../helpers/userPool';
import SignUp from '../components/signUp'
import Login from '../components/login';
import Navigation from '../components/navigation';
import {isNull} from 'util'
const testPhoto = "https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.0-9/p960x960/29468160_2015286372069529_9021510360649170944_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=K9zvL3pRRs0AX-MT4sP&_nc_ht=scontent.fmmx3-1.fna&_nc_tp=6&oh=ec9dad3450e9bf393171991716a5fdda&oe=5EBBDCD6";
const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [authUser, setAuthUser] = useState('true');
  var authUser = "false";
  const [value, setValue] = React.useState(
    localStorage.getItem('myValueInLocalStorage') || ''
  );
  
  return (
    <IonPage>
      <IonHeader className="header-css">
        <IonToolbar>
          <IonTitle>DIY Security Camera AB</IonTitle>
          <Navigation />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        
      
        <IonCard>
        <Login/>
          <IonCardHeader>
            <IonCardSubtitle>DIY Security</IonCardSubtitle>
            <Navigation value=/>
            <IonCardTitle>About Us</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          DIY security is the premier do it yourself cloud service in the areas of DIY and cameras, at least in the local area of Kristianstad Högskolan! A company founded by two students who wanted to learn more about cloud development, 
          machine learning and the development process
          <IonList>
      <IonItem>
      <img width="25%" src="https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.0-9/s960x960/88331250_3220801227971095_4598663471427485696_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=NZe8O1eYrpYAX_KPklC&_nc_ht=scontent.fmmx3-1.fna&_nc_tp=7&oh=69c03a3e03679a4b31b7b1df467c0949&oe=5EC6B53C" />
        <IonLabel>Pokémon Yellow</IonLabel>
      </IonItem>
      <IonItem>
      <img width="25%" src="https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.0-9/p960x960/29468160_2015286372069529_9021510360649170944_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=K9zvL3pRRs0AX-MT4sP&_nc_ht=scontent.fmmx3-1.fna&_nc_tp=6&oh=ec9dad3450e9bf393171991716a5fdda&oe=5EBBDCD6" />
        <IonLabel>Mega Man X {value} </IonLabel>
      </IonItem>
    </IonList>
      </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            Contact us with questions or feed back at hkrstud@hkr.se  
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
