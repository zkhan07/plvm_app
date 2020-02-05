import axios from 'axios';
import moment from "moment";

export const ENDPOINTS={
    // BASE_URL:"http://192.168.1.5:8000/rest/",  // office LAN
    // BASE_URL:"http://192.168.1.107:8000/rest/",  // Home LAN
    BASE_URL:"http://mosambeeparking.in/rest/", // production
    // BASE_URL:"http://192.168.2.7:8000/rest/", //abhimanyu office
    // BASE_URL:"http://192.168.43.179:8000/rest/",
    // BASE_URL:"http://127.0.0.1/rest/",
    // MEDIA_URL:"http://192.168.43.179:8000/media/",
    
    GET_FRAME_IMG:"saveFrameImage/",
    LOGIN_URL:"checkOwnerStaffCredentialWeb/",
    MAKE_CUSTOMER_ENTRY:"makeCustomerEntry/",
    VERIFY_TOKEN:"api/token/verify/",
    GET_NEW_TOKEN:"api/token/refresh/",
    GET_NEW_PARKING_FEES:"getNewParkingFees/",
    CHECK_VEHICLE:"checkVehicle/",
    GET_CUSTOMER_INFO:"getCustomerInfo/",
    GET_STAFF_REPORT:"staffreports/"
}   

export const checkVehicle = function checkVehicle(staffId,ownerId,vehicleNo){
    return axios.get(ENDPOINTS.BASE_URL+ENDPOINTS.CHECK_VEHICLE+ownerId+"/"+staffId+"/"+vehicleNo,{headers:{
        "Content-Type":"application/json"
    }});
}

export const makeCustomerEntry=function makeCustomerEntry(body){
    return axios.post(ENDPOINTS.BASE_URL+ENDPOINTS.MAKE_CUSTOMER_ENTRY,body,{headers:{
        "Content-Type":"application/json"
    }});    
}

export const checkOwnerStaffLogin = function checkOwnerStaffLogin(username,password){
    return axios.get(ENDPOINTS.BASE_URL+ENDPOINTS.LOGIN_URL+username+"/"+password,{headers:{
        "Content-Type":"application/json"
    }}); 
}
export const getFrameImage= function getFrameImage(fileName){
    return axios.get(ENDPOINTS.BASE_URL+ENDPOINTS.GET_FRAME_IMG+fileName,{headers:{
        "Content-Type":"application/json"
    }});

}

export const getNewToken = function getNewToken(refresh_token){
    return axios.post(ENDPOINTS.BASE_URL+ENDPOINTS.GET_NEW_TOKEN,{"refresh":refresh_token},{headers:{
        "Content-Type":"application/json"
    }}); 
}

export const verifyToken = function verifyToken(token){
    return axios.post(ENDPOINTS.BASE_URL+ENDPOINTS.VERIFY_TOKEN,{"token":token},{headers:{
        "Content-Type":"application/json"
    }}); 
}

export const getNewParkingFees = function getNewParkingFees(owner_id){
    return axios.get(ENDPOINTS.BASE_URL+ENDPOINTS.GET_NEW_PARKING_FEES+owner_id,{headers:{
        "Content-Type":"application/json"
    }});
}

export const getCustomerInfo = function getCustomerInfo(staff_id,owner_id){
    return axios.get(ENDPOINTS.BASE_URL+ENDPOINTS.GET_CUSTOMER_INFO+owner_id+"/"+staff_id,{headers:{
        "Content-Type":"application/json"
    }});
}

export const getStaffReport = function getStaffReport(owner_id,parking_info_id,customDate){
    return axios.get(ENDPOINTS.BASE_URL+ENDPOINTS.GET_STAFF_REPORT+owner_id+"/"+parking_info_id+"/"+customDate,{headers:{
        "Content-Type":"application/json"
    }});
}