import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          users managment
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link
                className="nav-link active btn btn-primary text-white"
                aria-current="page"
                to={"/"}
              >
                Show Users
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn btn-primary text-white"
                to={"addusers"}
              >
                addusers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
