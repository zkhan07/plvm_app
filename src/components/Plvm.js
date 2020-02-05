import React, { useState, useEffect } from 'react';
import Entry from "./Entry";
import Exit from "./Exit";
import { MyModal } from './Modal';
import { checkVehicle, makeCustomerEntry } from './Service';

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
  

const Plvm = (props) => {

    const [ownerId,setOwnerId]=useState(localStorage.getItem("owner_id"))
    const [staffId,setStaffId]=useState(localStorage.getItem("staff_id"))
    const [vehicleNo,setVehicleNo]=useState(null);
    const [customerNotExist,setCustomerNotExist] = useState(false);
    const [vehicleCheckOut,setVehicleCheckout]=useState(false);
    const [addNewCustomer,setAddNewCustomer]=useState(false);
    const [alreadyOutAlert,setAlreadyOutAlert]=useState(false);
    const [customer,setCustomer]=useState(null);
    



    const checkVehicleStatus =function checkVehicleStatus(e){
        if(vehicleNo){
            checkVehicle(staffId,ownerId,vehicleNo).then((res)=>{
                if(res.data.msg==="failure"){
                    setCustomerNotExist(true);
                    return;
                }else{
                    setCustomer(res.data.details);
                    
                    setVehicleCheckout(true);

                }
                
            }).catch((err)=>{
                console.log(err);
            })
   
        }
    }


    const  handleChange=function handleChange(e){
        setVehicleNo(e.target.value);
    }

    const redirectToAddNew = function redirectToAddNew(){
        setAddNewCustomer(true);
        if(props.hideLotiCallback){
            props.hideLotiCallback();
        }
    }

    const cancelRedirectNew = function cancelRedirectNew(){
        setCustomerNotExist(false);
    }

    return(
    <>
        {
            vehicleCheckOut?<Exit customer={customer}/>:    
            addNewCustomer?<Entry vehicleNo={vehicleNo}/>:
            customerNotExist ? <MyModal title={"Alert!!"} content={"Customer Doesn't Exist!!"}  cancelRedirectNew={cancelRedirectNew} cancelActionText={"Cancel"} positiveActionText={"Add New"} redirect={redirectToAddNew} />:
        <div>
            <IonPage>
                <IonContent>  
                    <div className="ui container">
                    <div className="ui image">
                        <img src="cycle.jpg" />
                    </div>
                    </div>

                    <IonItem class="ion-padding-start" class="ion-padding-end">
                        <IonLabel class="ion-text-center"  position="stacked"><h2>Enter Vehicle No</h2></IonLabel>
                        <IonInput onChange={handleChange} name="vehicle_no" size="small" required type="text" ></IonInput>
                    </IonItem>
                    <br/>
                    <IonSegment>
                        <IonButton onClick ={checkVehicleStatus} slot="start" size="default" color="secondary" expand="block">
                            <IonIcon  name="cash" />
                            CASH
                        </IonButton>
                        <IonButton slot="start" size="default" color="success" expand="block">
                            <IonIcon  name="card" />
                            SCAN QR
                        </IonButton>
                    </IonSegment>
                    
                </IonContent>  
            </IonPage>

        </div>
        }
    </>
    );
}

export default Plvm;