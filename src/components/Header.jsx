import React from "react";
import { NavLink, Link } from "react-router-dom";


const Header = ({count}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 d-flex align-content-center"
        style={{position:'sticky', top:'0px', zIndex:'1'}}
    >
      <div className="container-fluid p-3" style={{ background: "#08355E" }}>
        <Link to="/" className="navbar-brand text-white">
          Article
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
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive
                    ? "nav-link active text-white"
                    : "nav-link text-secondary"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="./article"
                className={(navData) =>
                  navData.isActive
                    ? "nav-link active text-white"
                    : "nav-link text-secondary"
                }
              >
                Article
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <NavLink
            to="/cart"
            className="nav-link p-1 me-3">
            <span className="badge rounded-pill bg-danger me-1">{count}</span>
            <i className="bi bi-basket fs-4 text-white"></i>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
