import React from "react";
import Navbar from "./Navbar";
import hero4 from "../assets/Hero-4.PNG";
import hero5 from "../assets/Hero-5.PNG";
import hero6 from "../assets/Hero-6.PNG";

const Hero = () => {
  return (
    <div id="hero-page">
      <Navbar />
      <div id="hero-header" className="d-flex mt-4 mb-0">
        <h6 className="fw-bold">Featured</h6>
        <p className="text-muted small">View All</p>
      </div>
      <div className="row my-1">
        <div className="col-4 justify-content-start">
          <div className="card pb-4" id="card-1">
            <div className="card-body">
              <i class="bi bi-tv card-title"></i>
              <h6 class="card-subtitle mb-2 text-muted small mt-1">
                6589 Views
              </h6>
              <p class="card-text justify-content-start">Project Management</p>
            </div>
          </div>
        </div>

        <div className="col-4 justify-content-start">
          <div className="card" id="card-2">
            <div className="card-body">
              <i class="bi bi-broadcast card-title"> Live</i>
              <h6 class="card-subtitle mb-2 text-muted small mt-1">
                5413 Views
              </h6>
              <p class="card-text justify-content-start">
                Blockchain as a Career Option
              </p>
            </div>
          </div>
        </div>

        <div className="col-4 justify-content-start">
          <div className="card" id="card-3">
            <div className="card-body">
              <i class="bi bi-tv card-title"></i>
              <h6 class="card-subtitle mb-2 text-muted small mt-1">
                6515 Views
              </h6>
              <p class="card-text justify-content-start">
                Accelerate digital transformation
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="hero-header" className="d-flex mt-4 mb-0">
        <h6 className="fw-bold">Upcoming</h6>
      </div>
      <div className="row my-1">
        <div className="col-4 justify-content-start">
          <div class="card">
            <img src={hero4} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text fw-bold my-0">Task Management System</p>
              <p className="card-text small">Speaker Allan Pinto</p>
            </div>
          </div>
        </div>

        <div className="col-4 justify-content-start">
          <div class="card pb-4">
            <img src={hero5} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text fw-bold my-0">Photoshop . Workshop</p>
              <p className="card-text small my-0">Speaker Ajax Metthew</p>
            </div>
          </div>
        </div>

        <div className="col-4 justify-content-start">
          <div class="card pb-4">
            <img src={hero6} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text fw-bold my-0">IT Service</p>
              <p className="card-text small my-0">Speaker Frodo Ammin</p>
            </div>
          </div>
        </div>
      </div>
      <div id="hero-header" className="d-flex mt-4 mb-0">
        <h6 className="fw-bold">Top Channels</h6>
        <p className="text-muted small">View All</p>
      </div>
      <div className="row my-1">
        <div className="col-4 justify-content-start">
          <div className="card" id="card-1">
            <div className="card-body d-flex align-items-center">
              <i class="bi bi-tv card-title" id="icon-below-1"></i>
              <div className="card-text" id="card-text-tile">
                <p class="card-text ps-3">Social Media</p>
                <h6 class="card-subtitle ps-3 text-muted" id="h-below-1">
                  12K Subscribers
                </h6>
              </div>
              <i class="bi bi-arrow-right-short ps-2" id="icon-below-1"></i>
            </div>
          </div>
        </div>

        <div className="col-4 justify-content-start">
          <div className="card" id="card-2">
            <div className="card-body d-flex align-items-center">
              <i class="bi bi-tv card-title" id="icon-below-1"></i>
              <div className="card-text" id="card-text-tile">
                <p class="card-text ps-3">Video Making</p>
                <h6 class="card-subtitle ps-3 text-muted" id="h-below-1">
                  18K Subscribers
                </h6>
              </div>
              <i class="bi bi-arrow-right-short ps-2" id="icon-below-1"></i>
            </div>
          </div>
        </div>

        <div className="col-4 justify-content-start">
          <div className="card" id="card-3">
            <div className="card-body d-flex align-items-center">
              <i class="bi bi-tv card-title" id="icon-below-1"></i>
              <div className="card-text" id="card-text-tile">
                <p class="card-text ps-3">Design</p>
                <h6 class="card-subtitle ps-3 text-muted" id="h-below-1">
                  25K Subscribers
                </h6>
              </div>
              <i class="bi bi-arrow-right-short ps-1" id="icon-below-1"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
