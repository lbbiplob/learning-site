import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';

const Register = () => {
  const { createUser, updateUserDetails } = useContext(AuthContext);
  const [error, setError] = useState(' ')

  const handelRegister=(e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      form.reset();
      setError(' ')
      userProfileUpdate(name, photoURL);
    })
    .catch(error =>{
      setError(error.message);
      form.reset();
    })
    
  };
   const userProfileUpdate = (name, photoURL)=>{
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    console.log(profile); 
    updateUserDetails(profile)
    .then(result=>{setError(' ')})
    .catch(error=>{
      setError(error.message);
    
    })
   }
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form onSubmit={handelRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="full name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="photo url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <p>
                  If you have already accout{" "}
                  <Link to={"/login"} className="link link-primary">
                    Please login
                  </Link>
                </p>
              </label>
            </div>
            <p className="text-amber-500">{error}</p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Register;