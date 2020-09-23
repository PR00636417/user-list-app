import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserProfileDetails,
  onDeleteUser
} from "../redux/actions/userActions";
import Header from "./Header";
import CustomModal from "./CustomModal";
import AuthenticateLoginHOC from "./AuthenticateLoginHOC";
import CustomSpinner from "./CustomSpinner";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserDetails = props => {
  let userID = window.location.hash.slice(14);
  const dispatch = useDispatch();
  const {
    userProfileDetails,
    profileDetailsFailedMessage,
    loadSpinner
  } = useSelector(state => state);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // console.log("userProfileDetails", props.match.params.userid);

  const { avatar, email, first_name, last_name } = userProfileDetails;

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
      <div className="user-container">
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
              src={avatar}
              alt="userProfilePicture"
            />
            <div className="user-details-text">
              <div>{email}</div>
              <div>{`${first_name} ${last_name}`}</div>
            </div>
            <div className="user-delete-link">
              <Button
                variant="outline-danger"
                onClick={() => setShowDeleteModal(true)}
              >
                Delete
              </Button>
            </div>
            <div>
              <i className="far fa-arrow-alt-circle-left font-icons" />
              <Link to="/userlist">Back to UserList</Link>
            </div>
            <CustomSpinner loadSpinner={loadSpinner} />
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
      </div>
    </React.Fragment>
  );
};

export default AuthenticateLoginHOC(UserDetails);
