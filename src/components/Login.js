import React, { useState, useEffect } from "react";
import "../App.css";
import { Form } from "react-bootstrap";
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
  } = useSelector(state => state.userData);

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
    <div className="container">
      <div className="login-container">
        <div className="user-profile-wrapper">
          <h1> React JS</h1>
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
                  Please enter email
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
          <div
            type="submit"
            onClick={() => onLoginClick()}
            className="login-button"
          >
            LOGIN
          </div>
          <div className="sign-up-link">
            <Link to="/signup" className="text">
              Don't have account?
            </Link>
          </div>
          {loginToken && <Redirect to="/userlist" />}
          <CustomSpinner loadSpinner={loadSpinner} />
        </div>
      </div>
    </div>
  );
};

export default Login;
