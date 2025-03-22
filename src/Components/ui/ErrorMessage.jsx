import React from "react";

export const ErrorMessage = ({ message }) => (
  <div className="text-center text-red-600 py-8">
    <p>{message}</p>
  </div>
);
