import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../Images/Logo.png";
import UserIcon from "../../Images/usericon.png";
import { AuthContext } from '../AuthProvider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [navbar, setNavbar] = useState(false);
     const [darkMode, setDarkMode] = useState(false);
     const handelLogOut = () => {
       logOut()
         .then((result) => {})
         .catch((error) => {});
     };
      const handelDarkMode = (e) => {
        setDarkMode(e.target.checked);
      };
    return (
      <nav className="w-full bg-white shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link className="flex items-center" to={'/'}>
                <img className="w-12" src={Logo} alt="" />
                <h2 className="text-2xl font-bold">DesignOriel</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to={"/home"} className=" ">
                    Home
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to={"/courses"} className="">
                    Courses
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to={"/blog"} className="">
                    Blog
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to={"/faq"} className="">
                    FAQ
                  </Link>
                </li>
                <div className="lg:mx-auto ">
                  {user?.uid ? (
                    <Link onClick={handelLogOut} className="ml-3 font-semibold">
                      Logout
                    </Link>
                  ) : (
                    <>
                      <Link to={"/login"} className="ml-3 font-semibold">
                        Login
                      </Link>
                      <Link to={"/register"} className="ml-3 font-semibold ">
                        Register
                      </Link>
                    </>
                  )}
                </div>
                <div
                  className="dropdown dropdown-end tooltip tooltip-right "
                  data-tip={user?.displayName}
                >
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-8 rounded-full ">
                      {user?.uid ? (
                        <img src={user?.photoURL} alt="" />
                      ) : (
                        <img src={UserIcon} alt="" />
                      )}
                    </div>
                  </label>
                </div>
                <div className="lg:form-control hidden">
                  <label className="label cursor-pointer">
                    {darkMode ? (
                      <span className="label-text mx-2 ">Dark</span>
                    ) : (
                      <span className="label-text mx-2 text-white">Light</span>
                    )}

                    <input
                      onClick={handelDarkMode}
                      type="checkbox"
                      className="toggle"
                    />
                  </label>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default NavBar;