import React from 'react'
import { NavLink } from 'react-router-dom'
import "../cssComponent/navbar.css"
import logo from "../image/logo.png"


const Navbar = () => {
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    return (
        <div>
         <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
          <nav className="navbar" onClick={e => e.stopPropagation()}>
            <div className="nav-container">
              <NavLink  to="/" className="nav-logo">
                {/* DevPrakash
                <i className="fa fa-tree"></i> */}
                <img src={logo}alt=""/>
              </NavLink>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                 
                    to="/about"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                 
                    to="/benefits"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Benefits
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                 
                    to="/contact"
                    activeClassName="active"
                    className="nav-links"
                   onClick={click ? handleClick : null}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <div className="nav-icon" onClick={handleClick}>
                <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
              </div>
            </div>
          </nav>
        </ div>
      );
}

export default Navbar