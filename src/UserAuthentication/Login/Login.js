import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub , FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from 'react';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';


const Login = () => {
  const {googleLogin}= useContext(AuthContext)

    const provider = new GoogleAuthProvider();
    const handelGoogleSingIn= () =>{
      googleLogin(provider)
      .then(result =>{
        const user = result.user;
        console.log(user);
      })
      .catch(error =>{
        console.error(error);
      })

    }

    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <p>
                  If you haven't accout{" "}
                  <Link to={"/register"} className="link link-primary">
                    Please Register
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="flex justify-between">
              <button onClick={handelGoogleSingIn} className="btn  btn-primary ">
                <FaGoogle className="mr-2" />
                Login with Google
              </button>
              <button className="btn btn-primary ">
                <FaGithub className="mr-2" />
                Login with GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;