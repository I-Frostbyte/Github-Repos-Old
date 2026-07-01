
import './RightSidebarStyles.css';
import { FaRegBell } from "react-icons/fa";
import office1 from "../assets/Office1.jpg";
import office2 from "../assets/Office2.jpg";
import office3 from "../assets/Office3.jpg";
import office4 from "../assets/Office4.jpg";
import office5 from "../assets/Office5.jpg";
import prof1 from "../assets/Profile1.jpg";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="user-info">
        <img alt="profile-pic" src={prof1} className="profile-img" />
        <h3>Gilbert Tima</h3>
        <FaRegBell size={15} style={{position: "fixed", right: "1%"}} />
      </div>
      <div className="sections">
        <h3>Live</h3>
        <h3>Popular</h3>
        <h3>Latest</h3>
      </div>
      <div className="top-live">
        <h3>Top Live</h3>
        <select id="drop-down">
          <option value="all">All</option>
        </select>
      </div>
      <div className="projects">
        <img alt="office-1" src={office1} class="projects-img" />
        <div className="title-et-author">
          <h5>Poster design Photoshop</h5>
          <p>Annie Matthew</p>
        </div>
      </div>
      <div className="projects">
        <img alt="office-2" src={office2} class="projects-img" />
        <div className="title-et-author">
          <h5>Brand Strategy</h5>
          <p>Bilard Hong</p>
        </div>
      </div>
      <div className="projects">
        <img alt="office-3" src={office3} class="projects-img" />
        <div className="title-et-author">
          <h5>UX Learning</h5>
          <p>Dolly Zara</p>
        </div>
      </div>
      <div className="projects">
        <img alt="office-4" src={office4} class="projects-img" />
        <div className="title-et-author">
          <h5>Product Marketing</h5>
          <p>Linna Pinto</p>
        </div>
      </div>
      <div className="projects">
        <img alt="office-5" src={office5} class="projects-img" />
        <div className="title-et-author">
          <h5>Project Management</h5>
          <p>Alex Pinto</p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
