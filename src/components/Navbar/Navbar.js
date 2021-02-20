import React from "react";
import "./Navbar.css";
import logo2 from "../../assets/logo2.svg";
import { Link } from "react-router-dom";
import BurgerNavbar from "../BurgerNavbar/BurgerNavbar";
const Navbar = () => {
  const routes = [
    { text: "تسجيل جديد", className: "sign-in", to: "/sign-up" },
    { text: "تسجيل دخول", className: "sign-up", to: "/" },
    { text: "محاضرات مجانية", className: "free-lectures", to: "/" },
    { text: "محاضرات الشرح", className: "exp-lectures", to: "/" },
    { text: "الرئيسية", className: "main-page", to: "/" },
  ];
  return (
    <div className="nav-bar">
      <div className="nav-routes">
        {window.innerWidth > 1024 ? (
          routes.map((item, index) => (
            <Link
              key={index}
              className={`${item.className} single-nav-route`}
              to={item.to}
            >
              {item.text}
            </Link>
          ))
        ) : (
          <BurgerNavbar />
        )}
      </div>
      <Link className="nav-logo" to="/">
        <img src={logo2} alt="" />
      </Link>
    </div>
  );
};

export default Navbar;
