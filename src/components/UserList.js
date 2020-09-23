import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserLists } from "../redux/actions/userActions";
import { Link } from "react-router-dom";
import Header from "./Header";
import AuthenticateLoginHOC from "./AuthenticateLoginHOC";

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
    state => state
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

  const rendertableData = () => {
    return (
      <Table striped bordered hover className="mt-3" size={tableResponsiveSize}>
        <thead>
          <tr className="table-main-heading">
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {userListData.length > 0 &&
            userListData.map((list, index) => {
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
    );
  };
  let tableResponsiveSize = "md";
  if (window.innerWidth < 1000) {
    tableResponsiveSize = "sm";
  }
  return (
    <div className="user-container">
      <Header />
      <div className="mt-3">
        <h4> LIST OF USERS</h4>
      </div>
      <div>{rendertableData()}</div>
      <div className="pagination-arrows">
        <Button
          size="sm"
          variant="outline-info"
          disabled={pageNumber === 1}
          onClick={() => onLeftArrowClick()}
        >
          <i className="fa fa-arrow-circle-left pagination-arrow-icons" />
        </Button>
        <span className="px-2">{pageNumber}</span>
        <Button
          size="sm"
          variant="outline-info"
          disabled={pageNumber === 2}
          onClick={() => onRightArrowClick()}
        >
          <i className="fa fa-arrow-circle-right pagination-arrow-icons" />
        </Button>
      </div>

      {userListApiFailedMessage && (
        <div className="api-error-message">{userListApiFailedMessage}</div>
      )}
    </div>
  );
};

export default AuthenticateLoginHOC(UserList);
