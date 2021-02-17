import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { Icon } from "semantic-ui-react";

const Footer = () => {
  const icons = ["facebook f", "twitter", "youtube"];
  return (
    <div className="footer">
      <div className="footer-section-one">
        <div style={{ display: "flex", textAlign: "left" }}>
          <img src={logo} alt="" />
          <div className="contact-info">
            <p>mr.mohamed@scince.com</p>
            <p>0109989989</p>
          </div>
        </div>
        <div>
          {icons.map((icon, index) => (
            <Icon
              key={index}
              style={{
                color: "white",
                borderRadius: "50px",
                height: "10vh",
                width: "10vh",
                background: "#204f5d",
                paddingTop: "1.2rem",
              }}
              name={icon}
              size="big"
            />
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
