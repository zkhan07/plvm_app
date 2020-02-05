import React from "react";
import {
    IonContent,
    IonButton,
    IonSegment,
    IonSegmentButton,
    IonPage,
    IonLabel,
    IonIcon,
    IonItem,
    IonDatetime,
    IonInput,
    IonText,
  } from '@ionic/react';
  

const Entry = () => {
    return(
        <div>
            <IonPage> 
                <IonContent>
                    <IonSegment>
                    <IonSegmentButton>2W</IonSegmentButton>
                    <IonSegmentButton>3W</IonSegmentButton>
                    <IonSegmentButton>4W</IonSegmentButton>
                    <IonSegmentButton>4H W</IonSegmentButton>
                    </IonSegment>
                    <IonSegment>
                    <IonSegmentButton>Hour</IonSegmentButton>
                    <IonSegmentButton>Day</IonSegmentButton>
                    <IonSegmentButton>Month</IonSegmentButton>
                    </IonSegment>

                    
                    <br/>
                    <IonItem class="ion-padding-start" class="ion-padding-end">
                        <IonInput required type="text" placeholder="Enter Name" ></IonInput>
                    </IonItem>
                    <br/>
                    <IonItem class="ion-padding-start" class="ion-padding-end">
                        <IonInput required type="number" placeholder="Enter Contact No"></IonInput>
                    </IonItem>
                    <br/>
                    <IonItem class="ion-padding-start" class="ion-padding-end">
                        <IonInput required type="text" placeholder="Enter Vehicle"></IonInput>
                    </IonItem>
                    <br/>

                    <IonItem class="ion-padding-start" class="ion-padding-end">
                        <IonLabel>Entry Time</IonLabel>
                        <IonDatetime displayFormat="	DD-MM-YYYYTHH:mm" min="2030" max="2020" value="03-02-2020T10:10Z"></IonDatetime>
                    </IonItem>
                    <br/>
                    <IonItem class="ion-padding-start" class="ion-padding-end">
                        <IonLabel class="ion-text-center" position="stacked">Total Bill <IonText color="danger">*</IonText></IonLabel>
                        <IonInput class="ion-text-center" required type="number" placeholder="Total Bill"></IonInput>
                    </IonItem>
                    <br/>
                    <IonItem class="ion-padding-start" class="ion-padding-end">
                        <IonLabel class="ion-text-center" position="stacked">Paid Amount <IonText color="danger">*</IonText></IonLabel>
                        <IonInput class="ion-text-center" required type="number" placeholder="Paid Amount"></IonInput>
                    </IonItem>
                    <br/>

                    <IonButton expand="block" color="danger">Pending</IonButton>
                    <IonButton expand="block">Advance</IonButton>
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


                </IonContent>
                </IonPage>

        </div>
    );
}

export default Entry;