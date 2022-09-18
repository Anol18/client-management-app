import "./header.css";

import React from 'react'

function header() {
  return (
 <>
 <section className="header-top-main">
    <div className="header-container">
        <div className="email"><i className="bi bi-envelope"></i> btgwl@yahoo.com </div>
        <div className="phone"><i className="bi bi-telephone"></i><a href="tel:+8801767352490"> +8801767352490</a></div>
        <div className="date"><i className="bi bi-alarm"></i> Mon-Fri 9am - 5pm</div>
    </div>
    </section>
 </>
  )
}

export default header