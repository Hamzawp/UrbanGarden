// Navbar.jsx

import React, { useEffect, useState } from "react";
import "./NavbarStyles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../../UGbg.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <section className={`nav ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="navbar">
          <div className="logo" onClick={handleClick}>
            <img src={logo} width="80" height="80" alt="Logo"></img>
            <h1 style={{ color: "#00743c" }}>
              Urban <br></br> Garden
            </h1>
          </div>
          <div className={`links ${isMenuOpen ? "menu-open" : ""}`}>
            {!!((user?.details.nursuries == null) & user?.isAdmin) && (
              <Link to="/SetupNursery">
                <div>Add a Nursery</div>
              </Link>
            )}
            {!user && (
              <Link to="/Login">
                <div>Log In</div>
              </Link>
            )}
            {!user && (
              <Link to="/Register">
                <div>Sign Up</div>
              </Link>
            )}
            {user && (
              <Link to="/UserProfile">
                <div className="userProf">Hey, {user?.details.username}</div>
              </Link>
            )}
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`hambar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`hambar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`hambar ${isMenuOpen ? "open" : ""}`}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
