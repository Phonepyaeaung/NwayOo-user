import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            vehicula tortor. Morbi nec sem enim. Aliquam erat volutpat. Donec
            nibh mauris, scelerisque sed justo vel, euismod consequat magna.
            Nunc imperdiet vitae magna ac dictum. Vestibulum tincidunt tortor
            dui, in condimentum velit placerat et. Donec et tempor elit.
            Vestibulum ut tristique augue.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+95979220082</li>
            <li>contact@nwayoo.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © NwayOo.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
