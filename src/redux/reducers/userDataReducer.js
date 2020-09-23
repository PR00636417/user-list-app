import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_API_SUCCESS:
      return {
        ...state,
        loginToken: action.loginToken
      };
    case types.LOGIN_API_FAILED:
      return {
        ...state,
        loginErrorMessage: action.loginErrorMessage
      };
    case types.ON_INPUT_FIELD_CHANGE:
      return {
        ...state,
        [action.inputFieldName]: action.inputValue,
        loginErrorMessage: "",
        signUpApiMessage: ""
      };
    case types.SIGN_UP_API_FAILED:
      return {
        ...state,
        signUpApiMessage: action.signUpErrorMessage,
        signUpEmail: "",
        signUpPassword: ""
      };

    case types.SIGN_UP_API_SUCCESS:
      return {
        ...state,
        signUpToken: action.signUpToken,
        signUpEmail: "",
        signUpPassword: ""
      };

    case types.USERLIST_API_SUCCESS:
      return {
        ...state,
        userListData: action.userListData,
        userListApiFailedMessage: ""
      };
    case types.USERLIST_API_FAILED:
      return {
        ...state,
        userListApiFailedMessage: action.userListApiFailedMessage
      };

    case types.PROFILE_DETAILS_API_SUCCESS:
      return {
        ...state,
        userProfileDetails: action.userProfileDetails,
        profileDetailsFailedMessage: ""
      };
    case types.PROFILE_DETAILS_API_FAILED:
      return {
        ...state,
        profileDetailsFailedMessage: action.profileDetailsFailedMessage
      };

    case types.USER_LOGOUT:
      return {
        ...initialState
      };

    case types.START_API_LOADER:
      return {
        ...state,
        loadSpinner: action.loadSpinner
      };
    case types.STOP_API_LOADER:
      return {
        ...state,
        loadSpinner: action.loadSpinner
      };
    default:
      return { ...state };
  }
};

export default userDataReducer;
