import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./SignUp.css";
import Footer from "../../components/Footer/Footer";
const SignUp = () => {
  return (
    <div className="sign-up-page">
      <div className="sign-up-header">
        <h2>إنشاء حساب جديد</h2>
      </div>
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default SignUp;
