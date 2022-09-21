import "./Member.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaRegIdCard } from "react-icons/fa";
const routes = [
  {
    path: "/member-regi",
    name: "Member Registration",
    // icon: <MdDashboard/>,
    icon: <FaRegIdCard />,
  },
];
function Member(children) {
  return (
    <>
      <motion.div animate={{ width: "200px" }} className="sidebar">
        {/* top section header of slidebar */}
        <div className="top_selection">
          <h1 className="sliderbar_logo">Catagory</h1>
          <div className="bars"></div>
        </div>

        {/* main menu of slide bar */}
        <section className="routes">
          {routes.map((route) => {
            return (
              <NavLink to={route.path} key={route.name}>
                <div className="icon">{route.icon}</div>
                <div className="link_text">{route.name}</div>
              </NavLink>
            );
          })}
        </section>
      </motion.div>
      <main>{children}</main>
    </>
  );
}

export default Member;
