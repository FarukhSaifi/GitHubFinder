import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-item-center">
      <div className="lds-ripple">
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
