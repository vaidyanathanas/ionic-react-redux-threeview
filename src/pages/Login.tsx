import { IonContent, IonPage, IonText, IonItem, IonLabel, IonInput, IonButton, IonHeader, IonToolbar, IonTitle, IonAlert, IonGrid, IonRow, IonCol } from "@ionic/react";

import "./Login.css";
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import * as Action from '../redux/action';
import { History, LocationState } from "history";
import { RouteComponentProps } from "react-router";
import { Plugins } from '@capacitor/core';
interface MyComponentProps extends RouteComponentProps {

}
const Login: React.FC<MyComponentProps> = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert1, setShowAlert1] = useState(false);
  const [message, setMessage] = useState("");
  const [headermsg, setHeadermsg] = useState("");
  const { Device } = Plugins;



  let currentState = useSelector((state: any) => state);
  const loginUser = (data: any) => {
    console.log('creating a new user account with: ', username, password);
    let obj = {
      username,
      password
    }
    if (!username) {
      setHeadermsg("")
      setMessage("Please enter username");
      setShowAlert1(true)
      return
    }
    if (!password) {
      setHeadermsg("")
      setMessage("Please enter password");
      setShowAlert1(true)
      return
    }
    dispatch(Action.setUserState(obj));
    props.history.push('/home');

  }
  useEffect(() => {
    console.log("sdfds");

    async function anyNameFunction() {
      const info = await Device.getInfo();
      setMessage("You are using " + info.platform);
      setShowAlert1(true)
      console.log(info);
    }
    // Execute the created function directly
    anyNameFunction();

  }, []);



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary"><IonTitle style={{ textAlign: "center" }}>Login</IonTitle></IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid style={{background: "#C0C0C0", height:"100%"}}>
          <IonRow><IonCol>
            <IonText class="txtCenter">
              <h3>Create your account!</h3>
            </IonText>

            <IonItem>

              <IonInput placeholder="Username" onIonChange={(e: any) => setUsername(e.target.value)} />
            </IonItem>
            <IonItem>
              <IonInput placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)} />
            </IonItem>
            
              <IonButton color="secondary" onClick={loginUser} expand="full">Login</IonButton>
            <IonAlert
              isOpen={showAlert1}
              onDidDismiss={() => setShowAlert1(false)}
              cssClass='my-custom-class'
              header={headermsg}
              subHeader={''}
              message={message}
              buttons={['OK']}
            /></IonCol></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Login;