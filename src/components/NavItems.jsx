import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

function NavItems() {
  const [menuToggle, SetMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFix, setHeaderFix] = useState(false);

  //addEventListener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFix(true);
    } else {
      setHeaderFix(false);
    }
  });

  return (
    <header
      className={`header-section style-4 ${
        headerFix ? "header-Fixed fadeInUp" : ""
      }`}
    >
      <div className={`header-top d-md-none d-lg-none d-block${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup">
              <span className="lab-btn me-3">Create Account</span>
            </Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      {/* //header ends here// */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-search-acte">
              {/* logo area */}
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            {/* manu area  */}
            <div className='menu-area '>
                    <div className='menu'>
                        <ul  className={`lab-ul ${menuToggle ? "active": " "}`}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop ">Shop</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        
                    </div>
                    {/* singin & login  */}
                    <Link to="/signup" className=" lab-btn me-3 d-none d-md-block ">Create Account</Link>
                        <Link to="/login" className=" d-none d-md-block">Login</Link>
                        {/* manu toggler */}
                        <div onClick={()=> SetMenuToggle(!menuToggle)} className={`header-bar d-lg-none d-md-none ${menuToggle? "active" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div  className="ellepsis-bar d-md-none " onClick={()=>setSocialToggle(!socialToggle)}>
                        <i className="icofont-info-square ">  </i>
                        </div>

                </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavItems;
