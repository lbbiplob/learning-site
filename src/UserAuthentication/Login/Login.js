import React from 'react';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { FaGithub , FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext } from 'react';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';
import { useState } from 'react';




const Login = () => {
  const { googleLogin, emailPasswordLogIn, gitHubLogIn } = useContext(AuthContext);
  const [error , setError] = useState('');
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();
    const gitHubProvider = new GithubAuthProvider();
    const provider = new GoogleAuthProvider();
    const handelGoogleSingIn= () =>{
      googleLogin(provider)
      .then(result =>{
      
        setError('')
        navigate(from, {replace: true}); })
      .catch(error =>{
        console.error(error);
        setError(error.massage);
      })
    
    };
    const handelGithubLogIn =()=>{
      gitHubLogIn(gitHubProvider)
      .then(result=>{
        setError('')
        navigate(from, { replace: true });
      })
      .catch(error=>{
        console.error(error);
        setError(error.massage);
      })
    }
     const hendelEmailPasswordSingIn = (e) => {
      
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        emailPasswordLogIn(email, password)
          .then((result) => {
            setError("");
            form.reset();
            navigate(from, { replace: true });
            
          
          })
          .catch((error) => {
            form.reset()
            setError('Email & Password not match')
          });
     };

    
   

    return (
      <div className="hero min-h-screen bg-base-200 ">
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 w-11/12">
          <form onSubmit={hendelEmailPasswordSingIn} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
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
                  If you haven't accout{" "}
                  <Link to={"/register"} className="link link-primary">
                    Please Register
                  </Link>
                </p>
              </label>
              <p className="text-red-600">{error}</p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="flex lg:justify-between lg:items-center flex-col pb-8 px-8">
            <button
              onClick={handelGoogleSingIn}
              className="btn  btn-primary w-full"
            >
              <FaGoogle className="mr-2" />
              Login with Google
            </button>
            <p className="text-xl text-center">Or</p>
            <button
              onClick={handelGithubLogIn}
              className="btn btn-primary w-full"
            >
              <FaGithub className="mr-2" />
              Login with GitHub
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;