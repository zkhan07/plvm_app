import React, { useState, useEffect } from 'react';
import { getNewParkingFees } from './Service';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';

import Plvm from "./Plvm";
import FastEntry from "./FastEntry";
import Report from "./Report";
import Settings from "./Settings";

import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet,
  IonIcon,
} from '@ionic/react';



const Dashboard = () => {

  const [tab, setTab] = useState(null);
    const [activeCSS,setActiveCSS] = useState(null);
    const [staffName,setStaffName] = useState(localStorage.getItem("name"))
    const [parkingName,setParkingName] = useState(localStorage.getItem("parking_name"))
    const [selectTab,setSelectTab] = useState({
        "entry":"ui active item orange",
        "fast":"ui item orange",
        "report":"ui item orange",
        "setting":"ui item orange",
    })
    
    const [redirectToLogin,setRedirectToLogin]=useState(false);
    function showTabs(params) {
        setTab(params);
        if(params==="entry"){
            setSelectTab({"entry":"ui item active orange",
            "fast":"ui item orange",
            "report":"ui item orange",
            "setting":"ui item orange",
        });
    

        }else if(params==="fast"){
            setSelectTab({"entry":"ui item orange",
            "fast":"ui item active orange",
            "report":"ui item orange",
            "setting":"ui item orange",
        });
    

        }else if(params==="report"){

            setSelectTab({"entry":"ui item orange",
            "fast":"ui item orange",
            "report":"ui item active orange",
            "setting":"ui item orange",
        });

        }else{

            setSelectTab({"entry":"ui item orange",
            "fast":"ui item orange",
            "report":"ui item orange",
            "setting":"ui item active orange",
        });
            
        }
    }



    useEffect(() => {
        var owner_id = localStorage.getItem("owner_id");
        var vehicle_fees = localStorage.getItem("vehicle_fees");
        if(!vehicle_fees){
        getNewParkingFees(owner_id).then((res)=>{
            localStorage.setItem("vehicle_fees",JSON.stringify(res.data));
        }).catch((err)=>{
            console.log(err);
        })
    }
        
    }, [])
  

    const logout = function logout(){
        localStorage.clear();
        setRedirectToLogin(true);
    }

    if(redirectToLogin){
       return( <Redirect to="/"/>);
    }

  return (
    <IonApp>
      <IonReactRouter>
        <IonHeader>
          <IonToolbar>
            <h5 slot="start"> {staffName}</h5>
            <IonTitle class="ion-text-center">PLVM</IonTitle>
            <IonButton onClick={logout} slot="end" color="success" size="small">Logout</IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonTabs>
            <IonRouterOutlet>

              <Route path="/plvm" component={Plvm} exact={true} />
              <Route path="/fastentry" component={FastEntry} exact={true} />
              <Route path="/report" component={Report} exact={true} />
              <Route path="/settings" component={Settings} exact={true} />
           
           
             
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="plvm" href="/plvm" active>
                <IonIcon name="car" />
                <IonLabel>PLVM</IonLabel>
              </IonTabButton>
              <IonTabButton tab="fastentry" href="/fastentry">
                <IonIcon name="fastforward" />
                <IonLabel>Fast Entry</IonLabel>
              </IonTabButton>
              <IonTabButton tab="report" href="/report">
                <IonIcon name="document" />
                <IonLabel>Report</IonLabel>
              </IonTabButton>
              <IonTabButton tab="settings" href="/settings">
                <IonIcon name="settings" />
                <IonLabel>Settings</IonLabel>
              </IonTabButton>
            </IonTabBar>

          </IonTabs>

        </IonContent>
      </IonReactRouter>


            <div className="ui grid">
                        <div className="ui row one column wide">
                            <div className="column">
                                {

                                    tab && tab === "entry" ?
                                    <Plvm/> : tab === "fast" ?
                                    <FastEntry/> : tab === "report" ?
                                    <Report/> : <Plvm/>

                                }
                            </div>
                        </div>
                      
                    </div>

    </IonApp>
  );
}

export default Dashboard;
