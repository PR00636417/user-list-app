import React from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const AuthenticateLogin = WrappedComponent => {
  const HOC = props => {
    const { loginToken } = useSelector(state => state.userData);
    return (
      <React.Fragment>
        {loginToken === "" ? <Redirect to="/" /> : <WrappedComponent />}
      </React.Fragment>
    );
  };
  return HOC;
};

export default AuthenticateLogin;
