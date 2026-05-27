import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center p-5 mt-5">
      <div className="row">
        <h1>404 Page not Found</h1>
        <p className="mt-4 mb-5">
          Sorry the page you are serching  is not exist 
        </p>
        <Link to="/"> Go to HomePage</Link>
      </div>
    </div>
  );
}

export default NotFound;
