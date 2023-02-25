import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container mt-5">
        <footer className="p-5 d-flex justify-content-between">
          <div className="d-flex flex-column justify-content-end">
          <div className="">
              <i className="bi bi-facebook text-white fs-2"></i>
              <i className="bi bi-whatsapp text-white ms-5 fs-2"></i>
              <i className="bi bi-telegram text-white ms-5 fs-2"></i>
              <i className="bi bi-instagram text-white ms-5 fs-2"></i>
              <i className="bi bi-twitter text-white ms-5 fs-2"></i>
            </div>
            <nav className="navbar navbar-expand-lg text-white nav-footer">
                <div
                  className="collapse navbar-collapse"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to='/' className="nav-link active text-white">Home</Link>
                    </li>
                    <li className="nav-item text-white">
                      <Link to='/article' className="nav-link text-white" href="#">
                        Articles
                      </Link>
                    </li>
                    <li className="nav-item text-white">
                      <Link className="nav-link text-white" href="#">
                        Contact
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white">Courses</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white">Join Us!</Link>
                    </li>
                  </ul>
                </div>
            </nav>
          </div>
          <div className="subscribe">
            <h1 className="text-white">Subscribe to our newsletter</h1>
            <p className="text-white">
              Monthly digest of what's new and exciting from us.
            </p>
            <div className="d-flex">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <button className="btn btn-danger ms-1 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
