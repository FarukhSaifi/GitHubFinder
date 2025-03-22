import React from "react";
import { useAlertContext } from "../../context/alert/AlertState";
// import alertContext from "../context/alert/alertContext";

const Alert = () => {
  const { alert } = useAlertContext();

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`} role="alert">
        <i className="fas fa-info-circle"></i> {alert.msg}
      </div>
    )
  );
};
export default Alert;
