import React from "react";
import {
    IonToggle,
    IonContent,
    IonPage,
    IonLabel,
    IonItem,
    IonList,
  } from '@ionic/react';
  

const Settings = () => {
    return(
        <div>
            <IonPage className="ion-padding-start" className="ion-padding-end">
                <h2 className="ion-text-center">Settings</h2>
                <IonContent>
                
                    <IonList>
                    <IonItem>
                        <IonLabel>Fast Entry</IonLabel>
                        <IonToggle value="pepperoni" onChange={() => {}} />
                    </IonItem>

                    <IonItem>
                        <IonLabel>PLVM</IonLabel>
                        <IonToggle value="sausage" onChange={() => {}} disabled={true} />
                    </IonItem>

                    <IonItem>
                        <IonLabel>Entry Status</IonLabel>
                        <IonToggle value="mushrooms" onChange={() => {}} />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Exit Status</IonLabel>
                        <IonToggle value="mushrooms" onChange={() => {}} />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Entry Time</IonLabel>
                        <IonToggle value="mushrooms" onChange={() => {}} />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Exit Time</IonLabel>
                        <IonToggle value="mushrooms" onChange={() => {}} />
                    </IonItem>
                    </IonList>
                </IonContent>
            </IonPage>
        </div>
    );
}

export default Settings;