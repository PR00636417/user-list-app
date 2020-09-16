import React, { useState } from "react";
import "../App.css";
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

  const { loginEmail } = useSelector(state => state.userData);
  return (
    <div className="user-header">
      <div style={{ float: "right", paddingRight: "20px", fontWeight: "Bold" }}>
        <div>Welcome {loginEmail}</div>
        <div
          onClick={() => setShowLogoutModal(true)}
          className="header-logout"
          style={{ float: "right", cursor: "pointer", fontWeight: "Bold" }}
        >
          Logout
        </div>
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
