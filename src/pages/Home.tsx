import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton } from '@ionic/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom'
import './Home.css';
interface MyComponentProps extends RouteComponentProps {

}
const Home: React.FC<MyComponentProps> = (props) => {

  const currentState = useSelector((state: any) => state);
  console.log(currentState, "home")
  let username = currentState?.userData?.username || "";

  const gotoButtonPage = () => {
    props.history.push("/differentbuttons");
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Home</IonTitle>
          <IonTitle slot="end">{username}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <IonButton color="success" onClick={gotoButtonPage}>Goto Button Page</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
