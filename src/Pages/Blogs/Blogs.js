import React from 'react';

const Blogs = () => {
    return (
      <div className='w-11/12 mx-auto mt-12 grid lg:grid-cols-3 gap-12'>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">1. what is cors?</h2>
            <p>
              Cors full meaning is Cross-origin resource sharing. CORS is a
              browser mechanism which enables controlled access to resources
              located outside of a given domain. It extends and adds flexibility
              to the same-origin policy (SOP). However, it also provides
              potential for cross-domain attacks if a website's CORS policy is
              poorly configured and implemented.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">2. Why are you using firebase?</h2>
            <p>
              There are many reasons to use firebase stroge, hosting
              authentication build-in push notification . The Firebase Realtime
              Database lets you build rich, collaborative applications by
              allowing secure access to the database directly from client-side
              code. Data is persisted locally, and even while offline, Realtime
              events continue to fire, giving the end user a responsive
              experience.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              2.1 What other options do you have to implement authentication?
            </h2>
            <p>
              • MongoDB. • Oracle Database. • Amazon Redshift. • DataStax
              Enterprise. • Redis Enterprise Cloud. • Cloudera Enterprise Data
              Hub. • Db2. • Couchbase Server.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">3 How does the private route work?</h2>
            <p>
              Private Routes in React Router require a user being authorized to
              visit a route (read: page). So if a user is not authorized for a
              specific page, they cannot access it. The most common example is
              authentication in a React application where a user can only access
              the protected pages when they are authorized (which means in this
              case being authenticated). Authorization goes beyond
              authentication though. For example, a user can also have roles and
              permissions which give a user access to specific areas of the
              application.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">4. What is Node? </h2>
            <p>
              Node.js is a lean, fast, cross-platform JavaScript runtime
              environment that is useful for both servers and desktop
              applications.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">4.1 How does Node work?</h2>
            <p>
              Node.js is an open-source backend javascript runtime environment.
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node.js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;