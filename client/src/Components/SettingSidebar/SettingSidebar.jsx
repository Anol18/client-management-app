import "./SettingSidebar.css";
import React, { useState } from "react";
import { FaTh, FaBars, FaUserAlt } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";

import { AiFillSetting } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const SettingSidebar = ({ children }) => {
  const MenuItem = [
    {
      path: "/education",
      name: "Education",
    },
    {
      path: "/religion",
      name: "Religion",
    },
    {
      path: "/department",
      name: "Department",
    },
    {
      path: "/designation",
      name: "Designation",
    },

    {
      path: "/category",
      name: "Category",
    },
    {
      path: "/union",
      name: "Union",
    },
    {
      path: "/factory",
      name: "Factory",
    },
    {
      path: "/area",
      name: "Area",
    },
  ];
  return (
    <div className="setting-container">
      <div className="setting-sidebar">
        {MenuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="setting-link">
            <div className="setting-link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SettingSidebar;
