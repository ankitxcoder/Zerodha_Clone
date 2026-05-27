import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ background: "#FFF" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
            src="media\images\logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/singup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="about">
                About
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link active" to="products">
                Products
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link active" to="pricing">
                Pricing
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link active" to="support">
                Supoort
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
