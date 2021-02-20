import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
// import { SidebarData } from "./SidebarData";
import "./BurgerNavbar.css";
import { IconContext } from "react-icons";

function BurgerNavbar() {
  const routes = [
    { text: "تسجيل جديد", className: "sign-in", to: "/sign-up" },
    { text: "تسجيل دخول", className: "sign-up", to: "/" },
    { text: "محاضرات مجانية", className: "free-lectures", to: "/" },
    { text: "محاضرات الشرح", className: "exp-lectures", to: "/" },
    { text: "الرئيسية", className: "main-page", to: "/" },
  ];
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "rgb(0, 0, 0)" }}>
        <div className="burger-navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars className="bars-icon" onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li onClick={showSidebar} className="navbar-toggle">
              <Link to="#" className="menu-x">
                <AiIcons.AiOutlineClose className="x-icon" />
              </Link>
            </li>
            {routes.reverse().map((item, index) => {
              return (
                <li key={index} className={`${item.className} nav-text`}>
                  <Link onClick={showSidebar} to={item.to}>
                    <span>{item.text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="just-pic"></div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default BurgerNavbar;
