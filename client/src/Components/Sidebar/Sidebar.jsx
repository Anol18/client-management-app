import React from "react";
// import motion from 'framer-motion';
import { SiSpringsecurity } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const routes = [
  {
    path: "/",
    name: "Dashboard",

    icon: <MdDashboard />,
  },
  {
    path: "/Members",
    name: "Member",
    icon: <FaUserAlt />,
  },
  {
    path: "/security",
    name: "Security",

    icon: <SiSpringsecurity />,
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
// console.log(<MdDashboard/>);
function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* slidebar menu */}
      <div className="sidemenu-container">
        <motion.div
          animate={{ width: isOpen ? "200px" : "40px" }}
          className="sidebar"
        >
          {/* top section header of slidebar */}
          <div className="top_selection">
            {isOpen && <h1 className="sliderbar_logo">Catagory</h1>}

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          {/* main menu of slide bar */}
          <section className="routes">
            {routes.map((route) => {
              return (
                <NavLink to={route.path} key={route.name}>
                  <div className="slide_menu">
                    <i className="icon">{route.icon}</i>

                    {isOpen && <div className="link_text">{route.name}</div>}
                  </div>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
      </div>
      <main>{children}</main>
    </>
  );
}

export default Sidebar;
