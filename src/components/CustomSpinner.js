import React from "react";
import { Button, Spinner } from "react-bootstrap";

const CustomSpinner = props => {
  return (
    props.loadSpinner === true && (
      <Button variant="primary" disabled className="mt-3">
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
