import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  validateUserLogin,
  onInputFieldChange,
  userLogout
} from "../redux/actions/userActions";
import { Redirect } from "react-router-dom";
import CustomSpinner from "./CustomSpinner";

const Login = () => {
  const dispatch = useDispatch();

  const [loginEmailError, setLoginEmailError] = useState(false);
  const [loginPasswordError, setLoginPasswordError] = useState(false);
  const {
    loginEmail,
    loginPassword,
    loginErrorMessage,
    loginToken,
    loadSpinner
  } = useSelector(state => state);

  useEffect(
    () => {
      dispatch(userLogout());
    },
    [dispatch]
  );

  const onLoginClick = () => {
    if (loginEmail && loginPassword) {
      dispatch(validateUserLogin());
    } else if (loginEmail === "") {
      setLoginEmailError(true);
    } else if (loginPassword === "") {
      setLoginPasswordError(true);
    }
  };

  const loginInputFieldChange = (inputFieldName, inputValue) => {
    dispatch(onInputFieldChange(inputFieldName, inputValue));
  };
  return (
    <div className="main-container">
      <div className="container-wrapper">
        <h2> React Login</h2>
        {loginErrorMessage && (
          <div className="api-error-message"> {loginErrorMessage}</div>
        )}
        <div className="login-forms">
          <Form noValidate>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="formInput"
                type="email"
                placeholder="USER NAME"
                value={loginEmail}
                onChange={event =>
                  loginInputFieldChange("loginEmail", event.target.value)}
                isInvalid={loginEmailError && loginEmail === ""}
              />
              <Form.Control.Feedback
                className="form-validation-invalid"
                type="invalid"
              >
                Please enter username
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
          <Form noValidate>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                className="formInput"
                type="password"
                placeholder="PASSWORD"
                value={loginPassword}
                onChange={event =>
                  loginInputFieldChange("loginPassword", event.target.value)}
                isInvalid={loginPasswordError && loginPassword === ""}
              />
              <Form.Control.Feedback
                className="form-validation-invalid"
                type="invalid"
              >
                Please enter password
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </div>
        <Button
          type="submit"
          className="btn btn-success"
          onClick={() => onLoginClick()}
        >
          <i className="fas fa-sign-in-alt font-icons"> </i>
          Sign in
        </Button>

        <div className="login-form-footer">
          <Link to="/signup">
            <i className="fas fa-user-plus font-icons" />Signup New Account?
          </Link>
        </div>

        {loginToken && <Redirect to="/userlist" />}
        <CustomSpinner loadSpinner={loadSpinner} />
      </div>
    </div>
  );
};

export default Login;
