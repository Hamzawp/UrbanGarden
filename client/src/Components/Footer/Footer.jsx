import React from "react";
import "./FooterStyles.css";
import {
  FaArrowAltCircleRight,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import logo from "../../UGbg.png";

const Footer = () => {
  return (
    <>
      <footer class="footer-sec">
        <div class="main">
          <div class="footerLogo row">
            <div class="footer-header">
              <img src={logo} class="manik" alt="" />
            </div>
            <div class="logo-des">
              <p>
                We offer a wide range of standout features to maintain the
                convenience to our customers.
              </p>
            </div>
          </div>

          <div class="link row">
            <div class="footer-header">
              <h3>Links</h3>
            </div>
            <div class="link-des">
              <a href="#" class="footer-links">
                About Us
              </a>
              <a href="#" class="footer-links">
                Categories
              </a>
              <a href="#" class="footer-links">
                How to Trade
              </a>
              <a href="#" class="footer-links">
                Contact
              </a>
            </div>
          </div>

          <div class="link row">
            <div class="footer-header">
              <h3>Categories</h3>
            </div>

            <div class="link-des">
              <a href="#" class="footer-links">
                Gardening
              </a>
              <a href="#" class="footer-links">
                Plants
              </a>
              <a href="#" class="footer-links">
                Seeds
              </a>
              <a href="#" class="footer-links">
                Bulbs
              </a>
              <a href="#" class="footer-links">
                Pots
              </a>
            </div>
          </div>
          

          <div class="newsletter row">
            <div class="footer-header">
              <h3>Newsletter</h3>
            </div>
            <div class="newsletter-des">
              <div class="subcribe">
                <i class="sub-icon ri-mail-check-fill"></i>
                <input type="mail" placeholder="Enter Email ID" required />
                <i class="sub-icon ri-arrow-right-line"></i>
              </div>
              <div class="icons">
                <a href="#">
                  <i class="social-icon ri-facebook-fill"></i>
                </a>
                <a href="#">
                  <i class="social-icon ri-instagram-line"></i>
                </a>
                <a href="#">
                  <i class="social-icon ri-linkedin-fill"></i>
                </a>
                <a href="#">
                  <i class="social-icon ri-github-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <hr />

          <p>© Copyright 2024 UrbanGarden.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
