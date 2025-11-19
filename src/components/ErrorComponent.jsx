import React from "react";

const ErrorComponent = ({ error }) => {
  return (
    <div>
      <p className="text-red-700">{error}</p>
    </div>
  );
};

export default ErrorComponent;
