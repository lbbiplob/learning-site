import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo.png';
import UserIcon from '../../Images/usericon.png'
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [darkMode , setDarkMode] = useState(false)
  const handelLogOut =()=>{
    logOut()
    .then(result=>{})
    .catch(error =>{})
  }
  const handelDarkMode=(e)=>{
    setDarkMode(e.target.checked);
  }
    return (
      <div className="navbar bg-primary text-primary-content">
        <div className="flex-1">
          <div className="flex items-center">
            <div className="lg:flex lg:items-center hidden">
              <img className="w-12 rounded-full" src={Logo} alt="" />
              <Link className=" text-2xl font-bold ml-3">DesignOriel</Link>
            </div>
            <div className="mx-auto">
              <Link to={"/home"} className="ml-3 font-semibold ">
                Home
              </Link>
              <Link to={"/courses"} className="ml-3 font-semibold">
                Courses
              </Link>
              <Link to={"/blog"} className="ml-3 font-semibold">
                Blog
              </Link>
              <Link to={"/faq"} className="ml-3 font-semibold">
                FAQ
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-none gap-2">
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
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-8 rounded-full ">
                {user?.uid ? (
                  <img src={user?.photoURL} alt="" />
                ) : (
                  <img src={UserIcon} alt="" />
                )}
              </div>
            </label>
          </div>
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
      </div>
    );
};

export default Header;