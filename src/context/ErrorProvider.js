import React, { useReducer } from "react";
import ErrorContext from "./error-context";
const defaultErrorState = {
    successMsg:null,
    errorMsg:null,
    infoMsg:null,
};
const errorReducer = (state, action) => {
    console.log(action);
    if(action.type==="SHOW"){
     if(action.alertType==="success"){
        return {successMsg: action.msg,
            errorMsg: null,
            infoMsg: null,}
     }
     if(action.alertType==="error"){
        return {successMsg: null,
            errorMsg: action.msg,
            infoMsg: null,}
     }
     if(action.alertType==="info"){
        return {successMsg:null,
            errorMsg: null,
            infoMsg:  action.msg,}
     }
    }

    
  return defaultErrorState;
};
const ErrorProvider = (props) => {
  const [errorState, dispatchErrorAction] = useReducer(
    errorReducer,
    defaultErrorState
  );
  const showErrorHandler = (msg, alertType) => {
    console.log(msg, alertType);
    dispatchErrorAction({ type: "SHOW", msg:msg, alertType:alertType });
};
const hideErrorHandler = () => {
    console.log("Hidde");
    dispatchErrorAction({ type: "HIDE" });
  };
  const errorContext = {
    successMsg: errorState.successMsg,
    errorMsg: errorState.errorMsg,
    infoMsg: errorState.infoMsg,
    showMsg: showErrorHandler,
    hideMsg: hideErrorHandler,
  };
  return <ErrorContext.Provider value={errorContext}>{props.children}</ErrorContext.Provider>;
};

export default ErrorProvider;
