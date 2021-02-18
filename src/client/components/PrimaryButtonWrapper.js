import React from "react";
import { Button } from "react-bootstrap";


function PrimaryButton(props) {
  return (
    <div className="button-wrapper" style={{
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      <Button variant="outline-primary" {...props}>
        Add Random Point
      </Button>
    </div>
  );
}

export default PrimaryButton;