import React from "react";
import RegistrationLeft from "./RegistrationLeft";
import RegistrationRightForm from "./RegistrationRightForm";

const RegistrationPage = () => {
  return (
    <div className="bg-white text-gray-800 ">
      <div className="flex min-h-screen max-h-screen">
        {/* <!-- Left side --> */}

        <RegistrationLeft />
        {/* <!-- Right side --> */}
        <RegistrationRightForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
