import * as types from "./actionTypes";

export function validateUserLogin() {
  return {
    type: types.VALIDATE_USER_LOGIN
  };
}

export function onSignUpUser(signUpEmail, signUpPassword) {
  return {
    type: types.ON_SIGNUP_USER,
    signUpEmail,
    signUpPassword
  };
}

export function onInputFieldChange(inputFieldName, inputValue) {
  return {
    type: types.ON_INPUT_FIELD_CHANGE,
    inputFieldName,
    inputValue
  };
}

export function getUserLists(pageId) {
  return {
    type: types.GET_USER_LISTS,
    pageId
  };
}

export function getUserProfileDetails(userId) {
  return {
    type: types.GET_USER_PROFILE_DETAILS,
    userId
  };
}

export function onDeleteUser(userId) {
  return {
    type: types.ON_DELETE_USER,
    userId
  };
}

export function userLogout() {
  return {
    type: types.USER_LOGOUT
  };
}
