import React from "react";
import "../App.css";
import { Button, Spinner } from "react-bootstrap";

const CustomSpinner = props => {
  return (
    props.loadSpinner === true && (
      <Button variant="primary" disabled style={{ marginTop: "20px" }}>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    )
  );
};

export default CustomSpinner;
