import React from "react";
import {
    IonContent,
    IonButton,
    IonSegment,
    IonPage,
    IonLabel,
    IonIcon,
    IonItem,
    IonInput,
  } from '@ionic/react';
  

const Exit = () => {
    return(
        <div>
            <IonPage>
                <IonContent>  

                    <br/><br/><br/><br/>
                    <IonItem class="ion-padding-start" class="ion-padding-end">
                        <IonLabel class="ion-text-center"  position="stacked"><h2>Enter Vehicle No</h2></IonLabel>
                        <IonInput size="small" required type="text" ></IonInput>
                    </IonItem>
                    <br/>
                    <IonSegment>
                        <IonButton slot="start" size="default" color="secondary" expand="block">
                            <IonIcon  name="cash" />
                            CASH
                        </IonButton>
                        <IonButton slot="start" size="default" color="success" expand="block">
                            <IonIcon  name="card" />
                            CARD
                        </IonButton>
                    </IonSegment>
                    {/* <IonToolbar>
                        <IonButton slot="start" size="default" color="secondary" expand="block">CASH1</IonButton>
                        <IonButton slot="end"   size="default" color="success"   expand="block">CARD</IonButton>
                    </IonToolbar> */}
                
                    </IonContent>  
                </IonPage>

        </div>
    );
}

export default Exit;