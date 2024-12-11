import React from "react";
import LoginLeftText from "./LoginLeftText";
import LoginRightForm from "./LoginRightForm";

const LoginPage = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      <div className="flex min-h-screen">
        {/* <!-- Left side --> */}
        <LoginLeftText />

        {/* <!-- Right side --> */}
        <LoginRightForm />
      </div>
    </div>
  );
};

export default LoginPage;
