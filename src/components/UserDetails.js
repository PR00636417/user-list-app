import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserProfileDetails,
  onDeleteUser
} from "../redux/actions/userActions";
import Header from "./Header";
import CustomModal from "./CustomModal";
import AuthenticateLogin from "./AuthenticateLogin";
import CustomSpinner from "./CustomSpinner";

const UserDetails = props => {
  let userID = window.location.hash.slice(14);
  const dispatch = useDispatch();
  const {
    userProfileDetails,
    profileDetailsFailedMessage,
    loadSpinner
  } = useSelector(state => state.userData);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // console.log("userProfileDetails", props.match.params.userid);

  useEffect(
    () => {
      dispatch(getUserProfileDetails(userID));
    },
    [dispatch, userID]
  );

  const onDeleteYes = () => {
    setShowDeleteModal(false);
    dispatch(onDeleteUser(userID));
  };
  return (
    <React.Fragment>
      <Header />
      <div className="user-profile-container">
        <div className="user-profile-wrapper">
          {profileDetailsFailedMessage && (
            <div className="api-error-message">
              {profileDetailsFailedMessage}
            </div>
          )}

          <img
            className="user-profile-picture"
            src={userProfileDetails && userProfileDetails.avatar}
            alt="userProfilePicture"
          />
          <div className="user-details-text">
            <div>{userProfileDetails && userProfileDetails.email}</div>
            <div>
              {userProfileDetails && userProfileDetails.first_name}{" "}
              {userProfileDetails && userProfileDetails.last_name}
            </div>
          </div>
          <div className="user-delete-link">
            <div
              type="submit"
              onClick={() => setShowDeleteModal(true)}
              className="login-button"
            >
              Delete
            </div>
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <CustomModal
          show={showDeleteModal}
          onSelectedYes={onDeleteYes}
          onHide={() => setShowDeleteModal(false)}
          modalMessage="Are you Sure, you want to Delete user!"
          modalHeader="Delete Confirmation"
        />
      )}
      <CustomSpinner loadSpinner={loadSpinner} />
    </React.Fragment>
  );
};

export default AuthenticateLogin(UserDetails);
