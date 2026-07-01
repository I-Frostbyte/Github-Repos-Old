import React from "react";
import prof1 from "../assets/profile1-resized.jpg";
import office1 from "../assets/Office1.jpg";
import office2 from "../assets/Office2.jpg";
import office3 from "../assets/Office3.jpg";
import office4 from "../assets/Office4.jpg";
import office5 from "../assets/Office5.jpg";


const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="row">
        <div className="col-11 d-flex justify-content-start mt-3">
          <img
            src={prof1}
            alt="profile-pic"
            className="rounded-circle me-1"
            id="profile-img"
          />
          <h6 className="pt-2 ps-1">Gilbert Tima</h6>
        </div>
        <div className="col-1 d-flex justify-content-end">
          <i class="bi bi-bell pe-6 mt-2"></i>
        </div>
      </div>

      <ul class="nav nav-pills nav-justified mt-4">
        <li class="nav-item">
          <a
            class="nav-link active rounded-1"
            id="rightside-nav-item"
            aria-current="page"
            href="#"
          >
            Live
          </a>
        </li>
        <li
          class="nav-item rounded-0 bg-light text-muted"
          id="rightside-nav-item"
        >
          <a class="nav-link" href="#">
            Popular
          </a>
        </li>
        <li
          class="nav-item rounded-0 bg-light text-muted"
          id="rightside-nav-item"
        >
          <a class="nav-link" href="#">
            Latest
          </a>
        </li>
      </ul>
      <div id="top-live">
        <h3>Top Live</h3>
        <select id="drop-down">
          <option value="all">All</option>
        </select>
      </div>
      <div className="row my-3">
        <div className="col-6">
          <img src={office1} id="projects-img" alt="" className="justify-content-start" />
        </div>
        <div className="col-6 pt-2">
          <h5 className="justify-content-start small fw-bold">Poster design Photoshop</h5>
          <p className="justify-content-start small">Annie Matthew</p>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-6">
          <img src={office2} id="projects-img" alt="" className="justify-content-start" />
        </div>
        <div className="col-6 pt-2">
          <h5 className="justify-content-start small fw-bold">Brand Strategy</h5>
          <p className="justify-content-start small">Bilard Hong</p>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-6">
          <img src={office3} id="projects-img" alt="" className="justify-content-start" />
        </div>
        <div className="col-6 pt-2">
          <h5 className="justify-content-start small fw-bold">UX Learning</h5>
          <p className="justify-content-start small">Dolly Zara</p>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-6">
          <img src={office4} id="projects-img" alt="" className="justify-content-start" />
        </div>
        <div className="col-6 pt-2">
          <h5 className="justify-content-start small fw-bold">Product Marketing</h5>
          <p className="justify-content-start small">Linna Pinto</p>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-6">
          <img src={office5} id="projects-img" alt="" className="justify-content-start" />
        </div>
        <div className="col-6 pt-2">
          <h5 className="justify-content-start small fw-bold">Project Management</h5>
          <p className="justify-content-start small">Alex Pinto</p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
