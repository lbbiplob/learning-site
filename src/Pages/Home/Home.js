import React from 'react';
import { Link } from 'react-router-dom';




const Home = () => {
   
    return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/young-female-logo-designer-working-graphic-tablet_23-2149119216.jpg?w=996&t=st=1666723047~exp=1666723647~hmac=87a740cf87d85b9515c440f420c4e53ae339e257eb191deef8caaf599245796a")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Boost your career in graphic design field
            </h1>
            <p className="mb-5">
              Are you looking to improve your graphic design career prospects?
              Here are some courses that will help you find new graphic design
              career opportunities.
            </p>
            <Link to={"/courses"} className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Home;