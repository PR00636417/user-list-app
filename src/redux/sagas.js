import * as types from "./actions/actionTypes";
import { take, select, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

/** Login */

export function* validateUser() {
  while (true) {
    yield take(types.VALIDATE_USER_LOGIN);
    let stateData = yield select(types.getUserState);

    const loginDetails = {
      email: stateData.loginEmail,
      password: stateData.loginPassword
    };
    let response;

    try {
      yield put({
        type: types.START_API_LOADER,
        loadSpinner: true
      });

      response = yield axios.post(`https://reqres.in/api/login`, loginDetails);
      if (response && response.status === 200) {
        yield put({
          type: types.LOGIN_API_SUCCESS,
          loginToken: response.data
        });
      }
      yield put({
        type: types.STOP_API_LOADER,
        loadSpinner: false
      });
    } catch (e) {
      yield put({
        type: types.STOP_API_LOADER,
        loadSpinner: false
      });
      yield put({
        type: types.LOGIN_API_FAILED,
        loginErrorMessage: "User not found, Please create an account"
      });
    }
  }
}

/** SignUp */

export function* userRegistration() {
  while (true) {
    yield take(types.ON_SIGNUP_USER);
    let stateData = yield select(types.getUserState);

    const registerDetails = {
      email: stateData.signUpEmail,
      password: stateData.signUpPassword
    };

    let response;
    try {
      yield put({
        type: types.START_API_LOADER,
        loadSpinner: true
      });
      response = yield axios.post(
        `https://reqres.in/api/register`,
        registerDetails
      );

      if (response && response.status === 200) {
        yield put({
          type: types.SIGN_UP_API_SUCCESS,
          signUpToken: response.data
        });
        yield put({
          type: types.STOP_API_LOADER,
          loadSpinner: false
        });
        history.goBack();
      }
    } catch (err) {
      yield put({
        type: types.STOP_API_LOADER,
        loadSpinner: false
      });
      yield put({
        type: types.SIGN_UP_API_FAILED,
        signUpErrorMessage: err && JSON.parse(err.request.response).error
      });
    }
  }
}

/** User-list */

export function* getUsers(action) {
  if (action) {
    let response;
    try {
      response = yield axios.get(
        `https://reqres.in/api/users?page= ${action.pageId}`
      );

      yield put({
        type: types.USERLIST_API_SUCCESS,
        userListData: response.data.data
      });
    } catch (e) {
      yield put({
        type: types.USERLIST_API_FAILED,
        userListApiFailedMessage: "We are unable to fetch data"
      });
    }
  }
}

export function* takeEveryGetUsers() {
  yield takeEvery(types.GET_USER_LISTS, getUsers);
}

/** User-profile */
export function* getProfileDetails(action) {
  if (action) {
    let response;
    try {
      yield put({
        type: types.START_API_LOADER,
        loadSpinner: true
      });

      response = yield axios.get(
        `https://reqres.in/api/users/ ${action.userId}`
      );
      if (response && response.status === 200) {
        yield put({
          type: types.PROFILE_DETAILS_API_SUCCESS,
          userProfileDetails: response.data.data
        });
        yield put({
          type: types.STOP_API_LOADER,
          loadSpinner: false
        });
      }
    } catch (err) {
      yield put({
        type: types.STOP_API_LOADER,
        loadSpinner: false
      });
      yield put({
        type: types.PROFILE_DETAILS_API_FAILED,
        profileDetailsFailedMessage: "We are unable to fetch data"
      });
    }
  }
}

export function* takeEveryGetProfileDetails() {
  yield takeEvery(types.GET_USER_PROFILE_DETAILS, getProfileDetails);
}

export function* deleteUser() {
  while (true) {
    const { userId } = yield take(types.ON_DELETE_USER);
    let response;
    try {
      yield put({
        type: types.START_API_LOADER,
        loadSpinner: true
      });

      response = yield axios.delete(`https://reqres.in/api/users/ ${userId}`);

      if (response.status === 204) {
        yield put({
          type: types.STOP_API_LOADER,
          loadSpinner: false
        });
        history.goBack();
      }
    } catch (e) {
      yield put({
        type: types.STOP_API_LOADER,
        loadSpinner: false
      });
      yield put({
        type: types.PROFILE_DETAILS_API_FAILED,
        profileDetailsFailedMessage: "We are unable delete user"
      });
    }
  }
}
