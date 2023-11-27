import React from "react"
const ErrorContext= React.createContext({
    successMsg:null,
    errorMsg:null,
    infoMsg:null,
    showMsg:(msg, alertType)=>{},
    hideMsg:()=>{}
});
export default ErrorContext;
