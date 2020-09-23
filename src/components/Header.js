import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "./CustomModal";
import { userLogout } from "../redux/actions/userActions";
import { Redirect } from "react-router-dom";

const Header = props => {
  const dispatch = useDispatch();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isLogout, setLogout] = useState(false);
  const onLogout = () => {
    dispatch(userLogout());
    setLogout(true);
  };

  const { loginEmail } = useSelector(state => state);
  return (
    <div className="user-header">
      <div className="header-wrapper">
        <span className="circle float-style">EH</span>
        <span className="header-text">Welcome {loginEmail}</span>
        <span className="header-logout-text">
          <div
            onClick={() => setShowLogoutModal(true)}
            className="header-logout"
          >
            Logout
          </div>
        </span>
      </div>

      {showLogoutModal && (
        <CustomModal
          show={showLogoutModal}
          onSelectedYes={() => onLogout()}
          onHide={() => setShowLogoutModal(false)}
          modalMessage="Are you Sure, you want to Logout!"
          modalHeader="Logout Confirmation"
        />
      )}
      {isLogout && <Redirect to="/" />}
    </div>
  );
};

export default Header;
