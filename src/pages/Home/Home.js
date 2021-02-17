import React from "react";
import "./Home.css";

import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

import Banner from "../../components/Banner/Banner";
import CustumeButton from "../../components/CutomButton/CustumeButton";
import AboutInstructor from "../../components/AboutInstructor/AboutInstructor";
import FreeVideos from "../../components/FreeVideos/FreeVideos";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner />
      <CustumeButton
        children={<FaIcons.FaSignInAlt className="svg-icons" size={30} />}
        title={"سجل دخولك الأن"}
      />
      <Link to="/sign-up">
        <CustumeButton
          signUp
          children={
            <BsIcons.BsFillPersonPlusFill className="svg-icons" size={30} />
          }
          title={"أنشئ حساب جديد"}
        />
      </Link>
      <AboutInstructor />
      <FreeVideos />
      <Footer />
    </div>
  );
};

export default Home;
