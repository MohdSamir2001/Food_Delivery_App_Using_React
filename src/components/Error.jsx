import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>{err.data}</h1>
      <h1>{err.status}</h1>
    </div>
  );
};

export default ErrorPage;
