import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo.png'

const Header = () => {
    return (
      <div className="navbar bg-primary text-primary-content">
        <div className="flex-1">
          <div className="flex items-center">
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

        <div className="flex-none gap-2">
          <div className="mx-auto">
            <Link to={"/register"} className="ml-3 font-semibold ">
              Register
            </Link>
            <Link to={"/login"} className="ml-3 font-semibold">
              Login
            </Link>
            <Link to={"/logout"} className="ml-3 font-semibold">
              Logout
            </Link>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={`https://placeimg.com/80/80/people`} alt="" />
              </div>
            </label>
          </div>
        </div>
      </div>
    );
};

export default Header;