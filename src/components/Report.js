import React from "react";
import Collection from "./Collection";
import EntryReport from "./EntryReport";

import {
    IonContent,
    IonPage,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonRouterOutlet,
    IonIcon,
  } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
  

const Report = () => {
    return(
        <div>
            <IonPage>
                <IonContent>  
                <IonReactRouter>
                    <IonContent>
                        <IonTabs>

                        <IonRouterOutlet>
                            <Route path="/collection" component={Collection} exact />
                            <Route path="/entryreport" component={EntryReport} exact />
                            {/* <Route exact path="/" render={() => <Redirect to="/tabpage" />} /> */}
                        </IonRouterOutlet>

                        <IonTabBar slot="top">
                            <IonTabButton tab="amount collection" href="/collection">
                            <IonIcon name="cash" />
                            <IonLabel>Amount collection</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="entryreport" href="/entryreport">
                            <IonIcon name="document" />
                            <IonLabel>Entry Report</IonLabel>
                            </IonTabButton>
                        </IonTabBar>

                        </IonTabs>
                    </IonContent>
                    </IonReactRouter>
                </IonContent>

                </IonPage>
        </div>
    );
}

export default Report;