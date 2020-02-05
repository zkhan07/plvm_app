import React from "react";
import Entry from "./Entry";
import Exit from "./Exit";
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
  

const FastEntry = () => {
    return(
        <div>
            <IonPage>
                <IonContent>  
                <IonReactRouter>
                    <IonContent>
                        <IonTabs>

                        <IonRouterOutlet>
                            <Route path="/entry" component={Entry} exact />
                            <Route path="/exit" component={Exit} exact />
                            {/* <Route exact path="/" render={() => <Redirect to="/tabpage" />} /> */}
                        </IonRouterOutlet>

                        <IonTabBar slot="top">
                            <IonTabButton tab="entry" href="/entry">
                            <IonIcon name="add-circle-outline" />
                            <IonLabel>ENTRY</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="exit" href="/exit">
                            <IonIcon name="exit" />
                            <IonLabel>EXIT</IonLabel>
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

export default FastEntry;