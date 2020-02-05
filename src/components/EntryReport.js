import React, { useState, useEffect } from 'react';
import { getCustomerInfo } from './Service';
import QRCode from 'qrcode.react';

  

const EntryReport = () => {

    const [ownerId,setOwnerId]=useState(localStorage.getItem("owner_id"));
    const [staffId,setStaffId]=useState(localStorage.getItem("staff_id"));
    const [customers,setCustomers]= useState(null);
    useEffect(() => {
        
        getCustomerInfo(staffId,ownerId).then((res)=>{
            setCustomers(res.data.details);

        }).catch((err)=>{
            console.log(err);
        })
    }, []);

    return(
        <>
        <div className="ui container">
           {/* <div className="ui grid">
               <div className="ui one column row wide">
               <div className="column">
               <div className="ui input fluid">
                   <input type="text" name="searchCustomer" onChange={searchCustomer} placeholder="Search Vehicle No"/>
                   </div>
               </div>
               </div>
               </div> */}
           <div className="ui items">
               
               {
                 customers && customers.map((obj)=>(
                        <>
                        <div className="item middle aligned">
                            <div className="image">
                                <QRCode value={JSON.stringify(obj)} />                 
                            </div> 
                            <div className="content">
                                <div className="header">{obj.vehicle_no}
                                </div>  
                                <div className="meta">
                                    Vehicle Status {obj.vehicle_status}
                                    <p></p>
                                    <p>
                                       Entry Time : {obj.entry_time} 
                                    </p>
                                    <p>
                                       Exit Time : {obj.exit_time} 
                                    </p>
                                    <div class="extra">
                                      Wallet Status :- {obj.wallet_amount<0? `${obj.wallet_amount} Pending`:obj.wallet_amount===0?"NIL":`${obj.wallet_amount} Advance`}
                                    </div>

                                    </div> 
                        </div>
                        </div>
                        <div className="ui divider"></div>
                        </>
                   ))
               }
               </div> 
     
          
        </div>

       
        </>
    );
}

export default EntryReport;