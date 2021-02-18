import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";
import { Icon } from "semantic-ui-react";

const Footer = () => {
  const icons = ["facebook f", "twitter", "youtube"];
  return (
    <div className="footer">
      <div className="footer-section-one">
        <div className="paragraph-image">
          <img src={logo} alt="" />
          <div className="contact-info">
            <p>mr.mohamed@scince.com</p>
            <p>0109989989</p>
          </div>
        </div>
        <div className="icons-div">
          {icons.map((icon, index) => (
            <div key={index} className="each-icon-div">
              <Icon className="each-icon" name={icon} size="big" />
            </div>
          ))}
        </div>
      </div>
      <div className="footer-section-two">
        <span>جميع حقوق المحتويات محفوظة للأستاذ محمد احمد 2021-2022</span>
      </div>
    </div>
  );
};

export default Footer;
