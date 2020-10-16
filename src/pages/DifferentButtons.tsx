import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonText, IonIcon, IonItemOptions, IonItemOption, IonItemSliding, IonList, IonItem, IonLabel, IonButtons, IonBackButton, IonAlert } from '@ionic/react';
import React, { useState } from 'react';
import './DifferentButtons.css';
import { RouteComponentProps } from 'react-router-dom'
import { home, star, swapHorizontal } from 'ionicons/icons';
import SwipeableButton from "../shared/SwipeableButton";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router";

interface MyComponentProps extends RouteComponentProps {

}
const DifferentButtons: React.FC<MyComponentProps> = (props) => {
  const currentState = useSelector((state: any) => state);
  const history = useHistory();
  const [showAlert1, setShowAlert1] = useState(false);
  console.log(currentState, "home")
  let username = currentState?.userData?.username || "";
  const gotoHome = (e: any) => {
    console.log(e)
    history.goBack();

  }

  const swipeBtn = (e: any) => {
    setShowAlert1(true);
  }

  const swipeDone = (e: any) => {
    setShowAlert1(false);
  }

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Buttons</IonTitle>
          <IonTitle slot="end">{username}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
        <IonButton color="warning" shape="round" expand="full" onClick={gotoHome}>Home</IonButton>
        <IonButton color="danger" shape="round" fill="outline" expand="full" onClick={gotoHome}>Home</IonButton>
        <IonButton color="dark" routerLink="/" expand="full">
          <IonIcon slot="start" icon={home} />  Home
        </IonButton>
        <SwipeableButton success={swipeBtn} label="Home" />
        <IonAlert
          isOpen={showAlert1}
          onDidDismiss={swipeDone}
          cssClass='my-custom-class'
          message="Slide successful"
          buttons={['OK']}
        />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DifferentButtons;
