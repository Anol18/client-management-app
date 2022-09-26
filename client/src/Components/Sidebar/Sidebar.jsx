import React, { useState } from "react";
import { FaTh, FaBars, FaUserAlt } from "react-icons/fa";
import { MdOutlineSecurity, MdPayments } from "react-icons/md";

import { AiFillSetting } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },

    {
      path: "/Members",
      name: "Members",
      icon: <FaUserAlt />,
    },
    {
      path: "/security",
      name: "Security",
      icon: <MdOutlineSecurity />,
    },
    {
      path: "/Accounts",
      name: "Accounts",
      icon: <MdPayments />,
    },
    {
      path: "/Settings",
      name: "Settings",
      icon: <AiFillSetting />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
