import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar pt-3 pb-0">
        <div className="container-fluid justify-content-start">
          <form className="d-flex" role="search">
            <div className="input-group mb-3">
              <input
                class="form-control"
                type="search"
                placeholder="Search Webinar"
                aria-label="Search"
              />
              <span class="input-group-text" id="basic-addon1">
                <a href="#" target="_blank">
                  <i class="bi bi-search"></i>
                </a>
              </span>
            </div>
          </form>
        </div>
      </nav>
      <div id="smaller-links">
      <ul class="nav nav-pills small" id="nav-list">
          <li class="nav-item small" id="nav-links">
            <a class="nav-link border border-dark active rounded-3 py-1" aria-current="page" href="#" id="overview-link">
              Overview
            </a>
          </li>
          <li class="nav-item mx-1 py-0 my-0 small" id="nav-links">
            <a class="nav-link border border-dark rounded-3 py-1 text-muted" href="#">
              Marketing
            </a>
          </li>
          <li class="nav-item mx-1 small" id="nav-links">
            <a class="nav-link border border-dark rounded-3 py-1 text-muted" href="#">
              Design
            </a>
          </li>
          <li class="nav-item mx-1 small" id="nav-links">
            <a class="nav-link border border-dark rounded-3 py-1 text-muted" href="#">
              Video Making
            </a>
          </li>
          <li class="nav-item mx-1 small" id="nav-links">
            <a class="nav-link border border-dark rounded-3 py-1 text-muted" href="#">
              Time Management
            </a>
          </li>
          <li class="nav-item mx-1 small" id="nav-links">
            <a class="nav-link border border-dark rounded-3 py-1 text-muted" href="#">
              Copywriting
            </a>
          </li>
          <li class="nav-item mx-1 small" id="nav-links">
            <a class="nav-link py-1" id="all-link" href="#">
              All
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
