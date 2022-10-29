import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";

export const sections = [
  { id: 1, icon: <FaHome />, name: "home" },
  { id: 2, icon: <FaUserFriends />, name: "team" },
  { id: 3, icon: <FaFolderOpen />, name: "projects" },
  { id: 0, icon: <FaCalendarAlt />, name: "calendar" },
  { id: 4, icon: <FaWpforms />, name: "documents" },
];


export const social = [ 
  {
    id:1,
    icon:<FaBehance/>,
  },{
    id:2,
    icon:<FaFacebook/>,
  },
  {
    id:3,
    icon:<FaLinkedin/>,
  },
  {
    id:4,
    icon:<FaTwitter/>,
  },
  {
    id:5,
    icon:<FaSketch/>,
  }
]
