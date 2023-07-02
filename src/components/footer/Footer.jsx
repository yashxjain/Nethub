import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          At Nethub, our goal is to create a comprehensive platform that caters
          to the diverse interests of movie and TV show lovers. Whether you're
          looking for in-depth analysis, behind-the-scenes insights, or simply
          want to stay up-to-date with the latest releases, our website has got
          you covered.
        </div>
        <div className="infoText">
          Our team is made up of seasoned writers, critics, and industry experts
          who share a deep love for the world of entertainment. We are committed
          to delivering high-quality content that informs, entertains, and
          sparks meaningful conversations among our community of movie
          enthusiasts.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
