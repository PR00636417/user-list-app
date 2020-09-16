import React, { useState, useEffect } from "react";
import "../App.css";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  onSignUpUser,
  onInputFieldChange,
  userLogout
} from "../redux/actions/userActions";
import CustomSpinner from "./CustomSpinner";

const SignUp = () => {
  const dispatch = useDispatch();
  const [signUpEmailError, setSignUpEmailError] = useState(false);
  const [signUpPasswordError, setSignUpPasswordError] = useState(false);
  const {
    signUpEmail,
    signUpPassword,
    signUpApiMessage,
    loadSpinner
  } = useSelector(state => state.userData);

  useEffect(
    () => {
      dispatch(userLogout());
    },
    [dispatch]
  );

  const onSignUpClick = () => {
    if (signUpEmail && signUpPassword) {
      setSignUpEmailError(false);
      setSignUpPasswordError(false);
      dispatch(onSignUpUser(signUpEmail, signUpPassword));
    } else if (signUpEmail === "") {
      setSignUpEmailError(true);
    } else if (signUpPassword === "") {
      setSignUpPasswordError(true);
    }
  };

  const signUpInputFieldChange = (inputFieldName, inputValue) => {
    dispatch(onInputFieldChange(inputFieldName, inputValue));
  };
  return (
    <div className="container">
      <div className="login-container">
        <div className="user-profile-wrapper">
          <h1> React JS</h1>
          {signUpApiMessage && (
            <div className="api-error-message">{signUpApiMessage.slice(6)}</div>
          )}

          <div className="login-forms">
            <Form noValidate>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  className="formInput"
                  type="email"
                  placeholder="USER NAME"
                  value={signUpEmail}
                  onChange={event =>
                    signUpInputFieldChange("signUpEmail", event.target.value)}
                  isInvalid={signUpEmailError && signUpEmail === ""}
                />
                <Form.Control.Feedback
                  className="form-validation-invalid"
                  type="invalid"
                >
                  Please enter email
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Form>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  className="formInput"
                  type="password"
                  placeholder="PASSWORD"
                  value={signUpPassword}
                  onChange={event =>
                    signUpInputFieldChange(
                      "signUpPassword",
                      event.target.value
                    )}
                  isInvalid={signUpPasswordError && signUpPassword === ""}
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
            variant="primary"
            type="submit"
            onClick={() => onSignUpClick()}
            className="login-button"
          >
            SIGN UP
          </div>
          <CustomSpinner loadSpinner={loadSpinner} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
