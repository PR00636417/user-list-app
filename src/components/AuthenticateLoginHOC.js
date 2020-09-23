import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const AuthenticateLoginHOC = WrappedComponent => {
  const HOC = props => {
    const { loginToken } = useSelector(state => state);
    return (
      <React.Fragment>
        {loginToken === "" ? <Redirect to="/" /> : <WrappedComponent />}
      </React.Fragment>
    );
  };
  return HOC;
};

export default AuthenticateLoginHOC;
