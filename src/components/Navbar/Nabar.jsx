import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import useAuth from "../../hooks/useAuth";
import { userLoggedOut } from "../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useAuth();
  const logOut = () => {
    localStorage.clear();
    dispatch(userLoggedOut());
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center mb-12">
      <img
        onClick={() => navigate("/")}
        src={Logo}
        className="h-7 cursor-pointer"
      />

      <div className="flex gap-6">
        <h1 className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors">
          <button onClick={() => navigate("/lesson")}>Lessons</button>
        </h1>
        <h1 className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors">
          <button onClick={() => navigate("/tutorials")}>Tutorials</button>
        </h1>
      </div>

      <div>
        <Link
          to={"/login"}
          className={` ${
            user && "hidden"
          } px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors`}
        >
          <button>Login</button>
        </Link>

        {user && (
          <button
            onClick={logOut}
            className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
