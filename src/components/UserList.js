import React, { useEffect, useState } from "react";
import "../App.css";
import { Table } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserLists } from "../redux/actions/userActions";
import { Link } from "react-router-dom";
import Header from "./Header";
import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";
import AuthenticateLogin from "./AuthenticateLogin";

const UserList = () => {
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(
    () => {
      dispatch(getUserLists(pageNumber));
    },
    [dispatch, pageNumber]
  );

  const { userListData, userListApiFailedMessage } = useSelector(
    state => state.userData
  );

  const onLeftArrowClick = () => {
    if (pageNumber === 2) {
      setPageNumber(pageNumber - 1);
    }
  };
  const onRightArrowClick = () => {
    if (pageNumber === 1) {
      setPageNumber(pageNumber + 1);
    }
  };

  let tableResponsiveSize = "md";
  if (window.innerWidth < 1000) {
    tableResponsiveSize = "sm";
  }
  return (
    <div className="user-container">
      <Header />
      <div>
        <Table
          striped
          bordered
          hover
          style={{ marginTop: "20px" }}
          size={tableResponsiveSize}
        >
          <thead>
            <tr className="table-main-heading">
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {userListData.map((list, index) => {
              return (
                <tr key={index}>
                  <td className="table-email">
                    <Link to={`/userdetails/${list.id}`}>{list.email}</Link>
                  </td>
                  <td>{list.first_name}</td>
                  <td>{list.last_name}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div className="list-arrows" style={{ float: "right" }}>
        <span>
          <img
            src={LeftArrow}
            style={{ width: "40px", marginRight: "20px", cursor: "pointer" }}
            alt="LeftArrow"
            onClick={() => onLeftArrowClick()}
          />
        </span>
        <span>
          <img
            src={RightArrow}
            style={{ width: "40px", cursor: "pointer" }}
            alt="RightArrow"
            onClick={() => onRightArrowClick()}
          />
        </span>
      </div>

      {userListApiFailedMessage && (
        <div className="api-error-message">{userListApiFailedMessage}</div>
      )}
    </div>
  );
};

export default AuthenticateLogin(UserList);
