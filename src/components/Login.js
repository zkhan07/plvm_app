import React, { useEffect, useState } from 'react';
import { checkOwnerStaffLogin,verifyToken,getNewToken } from './Service';
import { Redirect, useParams } from 'react-router-dom';
import { MyModal } from './Modal';
import { setServers } from 'dns';

// First check accessToken exist or not 
//  if exist then check accessToken Valid Or Not
// if valid then transfer to Dashboard
// if invalid get new Token from refresh token
//  if refresh token is invalid clear localStorage and return to login screen


const Login = function Login(props) {
    const [loginData,setLoginData] = useState({agree:true});
    const [redirectToAdminLanding,setRedirectToAdminLanding]=useState(false);
    const [redirectToUserLanding,setRedirectToUserLanding]=useState(false);
    const [userDoesNotExist,setUserDoesNotExist]=useState(false);
    const [enterProperCredential,setEnterProperCredential] = useState(false);
    const [serverError,setServerError]=useState(false);
    const [serverErrorDetails,setServerErrorDetails]=useState(null);
    const [agree,setAgree]=useState(true);
    let {device}=useParams();
    useEffect(() => {
        const token = localStorage.getItem("token");
        const isAdmin = localStorage.getItem("isAdmin");
        if(token)
        {
            console.log(token);
            //check for validity
            // if valid redirect to dashboard page
            verifyToken(token).then((res)=>{
                console.log("token is exist and valid!!");
                if(isAdmin){
                    if(isAdmin===true ||isAdmin==="true"){
                        setRedirectToAdminLanding(true);
                    }else{
                        setRedirectToUserLanding(true);
                    }
                }
            }).catch((err)=>{
                console.log(err);
                // if token is invalid get new token using refresh_token
                if(err.response){
                if(err.response.status===401){
                    const refresh = localStorage.getItem("refresh");
                    // if refresh token is valid get new token and redirect to dashboard
                    getNewToken(refresh).then((res)=>{
                        console.log("token don't exist getting new token!!");
                        localStorage.setItem("token",res.data.access);
                        if(isAdmin){
                        if(isAdmin===true ||isAdmin==="true"){
                            setRedirectToAdminLanding(true);
                        }else{
                            setRedirectToUserLanding(true);
                        }
                    }
                    }).catch((err)=>{
                        // if refresh token is invalid showing login page
                        console.log("refresh token is invalid!!!");
                    })
                }
            }else{
                setServerErrorDetails("Server Error or NetWork Error!!!");
                setServerError(true);
                
            }
            })
        }    
}, []);


    function  getLoginDetails(e){
        if(e.target.name==="agree"){
            if(e.target.checked){
                setLoginData({...loginData,[e.target.name]:e.target.checked});
                setAgree(e.target.checked);
            
            }else{
            setLoginData({...loginData,[e.target.name]:e.target.checked});
            setServerErrorDetails("You Have To Agree Our Terms And Conditions!!");
            setAgree(e.target.checked);
            setServerError(true);
            
            
        }
        }else{
            setLoginData({...loginData,[e.target.name]:e.target.value});
        }
    }

    function submitLoginData(e){
        e.preventDefault();
        if(!loginData.agree){
            setServerErrorDetails("You Have To Agree Our Terms And Conditions!!");
            setServerError(true);
       
        }else{
            
            loginData.username===undefined || loginData.password===undefined?setEnterProperCredential(true):
            checkOwnerStaffLogin(loginData.username,loginData.password).
            then((res)=>{
                console.log(res);
                if(res.data.msg==="success"){
                        localStorage.setItem("isAdmin",res.data.details.isAdmin);
                        localStorage.setItem("owner_id",res.data.details.owner_id);
                        localStorage.setItem("parking_address",res.data.details.parking_address);
                        localStorage.setItem("parking_name",res.data.details.parking_name);
                        localStorage.setItem("name",res.data.details.name);
                        localStorage.setItem("parking_id",res.data.details.parking_id);
                        localStorage.setItem("token",res.data.details.access_token.access);
                        localStorage.setItem("refresh",res.data.details.access_token.refresh); 
                        if(res.data.details.isAdmin){
                            setRedirectToAdminLanding(true);
                        }else{
                            localStorage.setItem("staff_id",res.data.details.staff_id);
                            setRedirectToUserLanding(true);
                        }
                    }
                else{
                    setUserDoesNotExist(true);
                }
            }).catch((err)=>{
                setServerErrorDetails("Server Error or NetWork Error!!!");
                setServerError(true);
            })
        }
   
    }



    if(redirectToUserLanding){
        const url = "/user/dashboard/"+device;
        return(<Redirect to={url}/>);
    }

    if(redirectToAdminLanding){
        const url = "/admin/dashboard/"+device;
        return(<Redirect to={url}/>);
    
    }

    const cancelUserDoesNotExitModal = function cancelUserDoesNotExitModal(){
        setUserDoesNotExist(false);
    }


    const cancelEnterCredentialModal = function cancelEnterCredentialModal(){
        setEnterProperCredential(false);
    }

    const cancelServerErrorModal = function cancelServerErrorModal(){
        setServerError(false);
    }
    
    return (
        <>
            {
            serverError?    
            <MyModal title={"Alert!!"} content={serverErrorDetails}  positiveActionText={"OK"} redirect={cancelServerErrorModal} />
            :
            enterProperCredential?   
            <MyModal title={"Alert!!"} content={"Enter Proper UserName And Password!!!"}  positiveActionText={"OK"} redirect={cancelEnterCredentialModal} />
            :
            userDoesNotExist?
            <MyModal title={"Alert!!"} content={"User Does Not Exist!!!"}  positiveActionText={"OK"} redirect={cancelUserDoesNotExitModal} />
             :   
            <div className="ui container">
            <div className="middleCenterClass">
                <div className="ui segment">
                    <div className="formContent">
                        <form className="ui form" onSubmit={submitLoginData}>
                            <div className="field">
                                <label>First Name</label>
                                <input type="text" onChange={getLoginDetails} name="username" placeholder="Username" />
                            </div>
                            <div className="field">
                                <label>Last Name</label>
                                <input type="password" onChange={getLoginDetails} name="password" placeholder="Password" />
                            </div>
                            <div className="field">
                                <div className="ui checkbox">
                                    <input type="checkbox" tabIndex="0" name="agree" onChange={getLoginDetails} defaultChecked={agree} />
                                    <label>I agree to the Terms and Conditions</label>
                                </div>
                            </div>
                            <button className="ui primary button">
                                Login
                            </button>
                            <button disabled className="ui button">
                                 Forgot Password ?
                            </button>
                        </form>
                    </div>


                </div>

                </div>
            </div>
        }
        </>

    );


}

export default Login;