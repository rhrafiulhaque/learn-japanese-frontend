import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import RegistrationForm from "./RegistrationForm";

const RegistrationRightForm = () => {
  return (
    <div className="fixed right-0 top-0 w-full h-full lg:w-1/2 flex items-start xl:items-center justify-center p-6 lg:p-8 xl:p-12 overflow-y-auto xl:overflow-hidden">
      <div className="w-full max-w-lg ">
        <h2 className="text-3xl font-bold mb-3 flex gap-2 items-center">
          <span>Welcome to</span>
          <img src={logo} className="h-7" />
        </h2>
        <h1 className="text-4xl font-bold mb-6">Register</h1>

        <RegistrationForm />

        <div className="mt-2 text-gray-400">
          <p className="text-center">
            Already have account ?{" "}
            <Link to={"/login"} className="text-primary">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationRightForm;
