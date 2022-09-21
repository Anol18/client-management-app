import React from 'react'
// import motion from 'framer-motion';
import SiSpringsecurity from 'react-icons/si'
import {MdDashboard} from 'react-icons/md';
import {FaBars} from 'react-icons/fa'
import {motion} from 'framer-motion';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
const routes = [
 {
    path: "/",
    name: 'Dashboard',
    // icon: <MdDashboard/>,
    icon:<MdDashboard/>,

 },
//  {
//   path: "/",
//   name: 'Security',
  
//   icon:<SiSpringsecurity/>,

// },
];
// console.log(<MdDashboard/>);
function Sidebar({children}) {
  return (
    <>
    {/* slidebar menu */}
      <motion.div animate={{width:'200px'}} className='sidebar'>
      {/* top section header of slidebar */}
      <div className="top_selection">
        <h1 className="sliderbar_logo">
            Catagory
        </h1>
          <div className="bars">
              <FaBars/>
          </div>
      </div>

      {/* main menu of slide bar */}
        <section className="routes">
          {routes.map((route)=>{
            return(
            <NavLink to={route.path} key={route.name}>
              <div className="icon">
                {route.icon}
              </div>
              <div className="link_text">{route.name}</div>
            </NavLink>
            );
          })}
        </section>
      </motion.div>
      <main>
        {children}
      </main>
    </>
  )
}

export default Sidebar