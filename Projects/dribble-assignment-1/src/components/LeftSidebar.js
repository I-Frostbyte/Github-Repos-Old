import React from "react";
import './LeftSidebarStyles.css';
import { FaHome, FaPaperPlane, FaRegClock, FaRegHeart } from "react-icons/fa";
import { AiOutlinePieChart, AiOutlineSetting, AiOutlineUsergroupAdd } from "react-icons/ai";
import { HiCubeTransparent } from "react-icons/hi";
import { TbTriangleInverted } from 'react-icons/tb';

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="left-sidebar-header">
        <TbTriangleInverted size={20} />
        <h3>CFX</h3>
      </div>

      <div className="left-sidebar-items">
        <FaHome size={20} />
        <p>Home</p>
      </div>
      <div className="left-sidebar-items">
        <HiCubeTransparent size={20} />
        <p>Discover</p>
      </div>
      <div className="left-sidebar-items">
        <AiOutlinePieChart size={20} />
        <p>Popular</p>
      </div>
      <div className="left-sidebar-items">
        <AiOutlineUsergroupAdd size={20} />
        <p>Following</p>
      </div>
      <div className="left-sidebar-items">
        <FaPaperPlane size={20} />
        <p>Streaming</p>
      </div>
      <hr />
      <div className="left-sidebar-items">
        <FaRegClock size={20} />
        <p>History</p>
      </div>
      <div className="left-sidebar-items">
        <FaRegHeart size={20} />
        <p>Liked</p>
      </div>
      <hr />
      <div className="left-sidebar-items">
        <AiOutlineSetting size={20} />
        <p>Settings</p>
      </div>
    </div>
  );
};

export default LeftSidebar;
