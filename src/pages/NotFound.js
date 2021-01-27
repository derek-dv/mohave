import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound">
      <h1 className="notfound__head">404 NOT FOUND</h1>
      <p className="notfound__text">
        Sorry, the requested resource isn't on our server.{" "}
      </p>
      <Link className="notfound__link" to="/">
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
