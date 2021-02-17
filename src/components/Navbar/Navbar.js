import React from "react";
import "./Navbar.css";
import logo2 from "../../assets/logo2.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const routes = [
    { text: "تسجيل جديد", id: "sign-in", to: "/sign-up" },
    { text: "تسجيل دخول", id: "sign-up", to: "/" },
    { text: "محاضرات مجانية", id: "free-lectures", to: "/" },
    { text: "محاضرات الشرح", id: "exp-lectures", to: "/" },
    { text: "الرئيسية", id: "main-page", to: "/" },
  ];
  return (
    <div className="nav-bar">
      <div className="nav-routes">
        {routes.map((item,index) => (
          <Link key={index} className={`${item.id} single-nav-route`} to={item.to}>
            <div>{item.text}</div>
          </Link>
        ))}
      </div>
      <div className="nav-logo">
        <Link to="/">
          <img src={logo2} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
