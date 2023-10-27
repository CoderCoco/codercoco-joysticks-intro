import React, { useState } from "react";
import { FaBars, FaPodcast, FaTiktok, FaTwitch, FaTwitter, FaUserCircle, FaUsers, FaYoutube } from "react-icons/fa";

import "./AppSidebarView.css";
import CastAndCrew from "../cast-and-crew/CastAndCrew";

export default function AppSidebarView() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const sidebarState = sidebarExpanded ? 'expanded' : 'collapsed';

  return (
    <div className="full-container">
      <div className={
        sidebarExpanded ? 'sidebar sidebar-expanded' : 'sidebar sidebar-collapsed'
      }>
        <div className={`button-container ${sidebarState}`}>
          <div onClick={toggleSidebar}>
            <FaBars />
          </div>
        </div>
        <div className={`active button-container ${sidebarState}`}>
          <FaUsers />
        </div>
        <div className={`button-container ${sidebarState}`}>
          <FaPodcast />
        </div>
        <div className={`button-container ${sidebarState}`}>
          <FaTiktok />
        </div>
        <div className={`button-container ${sidebarState}`}>
          <FaYoutube />
        </div>
        <div className={`button-container ${sidebarState}`}>
          <FaTwitch />
        </div>
        <div className={`button-container ${sidebarState}`}>
          <FaTwitter />
        </div>
        <div className="user-icon">
          <div>
            <FaUserCircle />
            </div>
        </div>
      </div>
      <div className={
        sidebarExpanded ? 'content-area expanded' : 'content-area collapsed'
      }>
        <CastAndCrew></CastAndCrew>
      </div>
    </div>
  );
}