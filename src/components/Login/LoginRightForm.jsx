import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import LoginForm from "./LoginForm";

const LoginRightForm = () => {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold mb-8 flex gap-2 items-center">
          <p>Welcome to</p>
          <img src={Logo} className="h-7" />
        </h2>
        <h1 className="text-5xl font-bold mb-8">Sign in</h1>

        <LoginForm />

        <div className="mt-8">
          <p className="text-center">
            No Account ?{" "}
            <Link to={"/register"} className="text-primary">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRightForm;
