import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
      <div className='text-center mt-12'>
        <div className=''>
          <h1 className="text-7xl italic text-red-600">4o4</h1>
          <p>This page not found</p>
        </div>
        <Link to={'/home'} className="btn mt-12"> Back to Home</Link>
      </div>
    );
};

export default ErrorPage;