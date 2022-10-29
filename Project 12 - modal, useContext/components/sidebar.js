import React from "react";
import { FaCat } from "react-icons/fa";
import { social, sections } from "./sidebar-components";

function Sidebar({ propOne }) {
  return (
    <aside
      className={propOne ? "sidebar-container" : "sidebar-container active"}
    >
      <div className="logo">
        <FaCat />
        <h1>cat group</h1>
      </div>
      <ul className="menu-container">
        {sections.map(({ name, icon, id }) => {
          return (
            <li id={id}>
              <a href="#">
                {icon} <h2>{name}</h2>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-container">
        {social.map(({ id, icon }) => {
          return (
            <li key={id}>
              <a href="#">{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
