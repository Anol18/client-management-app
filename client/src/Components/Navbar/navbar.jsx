import React from 'react';
import "./navbar.css";
import logo from "../../Components/images/aaa.jpg";


function navbar() {
  return (
    <>
        <div className="container-1">
        <img className="logo-img" src={ logo }alt="" />
            
           
                <nav className="main-nav">
               
                    
                    {/* nav menu */}
                    <ul>
                    
                        <li><a href="/">HOME</a> </li>
                        <li><a href="/">ABOUT</a></li>
                        <li><a href="/">NOTICE</a></li>
                        <li><a href="/">TEAM</a></li>
                        <li><a href="/">CONTACT</a></li>
                        <button className='login-btn'>Login</button>
                    </ul>
                    
                </nav>
                
            </div>
           
       

    </>
  )
}

export default navbar