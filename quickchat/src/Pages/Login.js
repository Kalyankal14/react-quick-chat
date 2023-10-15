import React, { useContext, useEffect } from "react";
import { UserAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, googleSignIn } = UserAuth();
  const handleLogin = async () => {
    try {
      await googleSignIn();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    } else {
      navigate("/");
    }
  }, [currentUser]);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there 👋🏻</h1>
          <p className="mb-5">
            Join the conversation, meet new people, and make connections in one
            shared room with QuickChat
          </p>
          <button className="btn" onClick={handleLogin}>
            Signin with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
