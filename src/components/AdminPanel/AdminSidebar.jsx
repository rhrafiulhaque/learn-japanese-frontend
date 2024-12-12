import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import avatar from "../../assets/Avatar.png";
import logo from "../../assets/Logo.png";
import useAuth from "../../hooks/useAuth";
import { userLoggedOut } from "../features/auth/authSlice";

const AdminSideBar = ({ showMobileMenu, setShowMobileMenu }) => {
  const { name, profilePhoto } = useAuth();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const logOut = async () => {
    localStorage.clear();
    await dispatch(userLoggedOut());
    await navigate("/login");
  };

  const isActive = (path) => pathname === path;

  return (
    <aside
      className={`fixed top-0 left-0 z-50  h-full bg-primary p-6 transform transition-transform duration-300 ${
        showMobileMenu ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:relative md:w-64`}
    >
      <div className="mb-10 flex justify-center">
        <Link to={`/admin/dashboard`}>
          <img src={logo} alt="Logo" className="w-[240px]" />
        </Link>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <div
              onClick={() => {
                navigate("/admin/dashboard");
                setShowMobileMenu(false);
              }}
              className={`block cursor-pointer py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary  ${
                isActive("/admin/dashboard") ? "bg-gray-100 text-primary" : ""
              }  `}
            >
              Dashboard
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                navigate("/admin/create-lesson");
                setShowMobileMenu(false);
              }}
              className={`block cursor-pointer py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary  ${
                isActive("/admin/create-lesson")
                  ? "bg-gray-100 text-primary"
                  : ""
              }  `}
            >
              Create Lesson
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                navigate("/admin/lessonlist");
                setShowMobileMenu(false);
              }}
              className={`block cursor-pointer py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary  ${
                isActive("/admin/lessonlist") ? "bg-gray-100 text-primary" : ""
              }  `}
            >
              Lesson List
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                navigate("/admin/create-vocabulary");
                setShowMobileMenu(false);
              }}
              className={`block cursor-pointer py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary  ${
                isActive("/admin/create-vocabulary")
                  ? "bg-gray-100 text-primary"
                  : ""
              }  `}
            >
              Add Vocabulary
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                navigate("/admin/vocabularylist");
                setShowMobileMenu(false);
              }}
              className={`block cursor-pointer py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary  ${
                isActive("/admin/vocabularylist")
                  ? "bg-gray-100 text-primary"
                  : ""
              }  `}
            >
              Vocabulary List
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                navigate("/admin/userlist");
                setShowMobileMenu(false);
              }}
              className={`block cursor-pointer py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary  ${
                isActive("/admin/userlist") ? "bg-gray-100 text-primary" : ""
              }  `}
            >
              User List
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                logOut();
                setShowMobileMenu(false);
              }}
              className="block py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 cursor-pointer hover:text-primary"
            >
              Logout
            </div>
          </li>
        </ul>
      </nav>
      <div className="mt-auto flex items-center">
        <img
          src={profilePhoto === null ? avatar : profilePhoto}
          alt={name}
          className="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <span className="text-white font-semibold">{name}</span>
      </div>
    </aside>
  );
};

export default AdminSideBar;
