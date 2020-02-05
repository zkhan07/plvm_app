import React, { useState, useEffect } from 'react';
import { getStaffReport } from './Service.js';
import moment from 'moment';

import {
    IonContent,
    IonButton,
    IonPage,
    IonLabel,
    IonIcon,
    IonItem,
    IonList,
    IonItemSliding,
  } from '@ionic/react';
  

const Collection = () => {

    const [ownerId,setOwnerId]=useState(localStorage.getItem("owner_id"));
    const [parkinId,setParkingId]=useState(localStorage.getItem("parking_id"))
    const [details,setDetails]=useState(null);
    useEffect(() => {
       
        getStaffReport(ownerId,parkinId,moment().format("DD/MM/YYYY")).then((res)=>{
            setDetails(res.data.details);
        }).catch((err)=>{
            console.log(err);
        })
    }, []);

    return(
        <div>
            <IonPage >
                <IonContent className="ion-padding-start" className="ion-padding-end">  

                <IonList>
                <IonItemSliding>
                    <IonItem>
                    <IonLabel>TWO WHEELER</IonLabel>
                    <IonButton slot="end" size="default" color="secondary" expand="block">
                        &#8377;{details && details.total_two_wheeler}
                    </IonButton>
                    </IonItem>
                    <IonItem>
                    <IonLabel>THREE WHEELER</IonLabel>
                    <IonButton slot="end" size="default" color="secondary" expand="block">
                        &#8377;{details && details.total_three_wheeler}
                    </IonButton>
                    </IonItem>
                    <IonItem>
                    <IonLabel>FOUR WHEELER</IonLabel>
                    <IonButton slot="end" size="default" color="secondary" expand="block">
                        &#8377;{details && details.total_four_wheeler}
                    </IonButton>
                    </IonItem>
                    <IonItem>
                    <IonLabel>HEAVY WHEELER</IonLabel>
                    <IonButton slot="end" size="default" color="secondary" expand="block">
                        &#8377;{details && details.total_heavy_wheeler}
                    </IonButton>
                    </IonItem>
                

                    <div className="ui divider"></div>
                <IonItem>
                    <IonLabel>CASH</IonLabel>
                    <IonButton slot="end" size="default" color="warning" expand="block">
                        &#8377;{details && details.total_cash}
                    </IonButton>
                    </IonItem>
                    <IonItem>
                    <IonLabel>CARD</IonLabel>
                    <IonButton slot="end" size="default" color="danger" expand="block">
                        &#8377;{details && details.total_card}
                    </IonButton>
                    </IonItem>

                    <div className="ui divider"></div>

                    <IonItem>
                    <IonLabel>TOTAL COLLECTION</IonLabel>
                    <IonButton slot="end" size="default" color="success" expand="block">
                        &#8377;{details && details.total_collection}
                    </IonButton>
                    </IonItem>

                </IonItemSliding>
                </IonList>

                </IonContent>  
                </IonPage>

        </div>
    );
}

export default Collection;