import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { jsPDF } from "jspdf";

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { details, image_url, price, teacher, rating, title, id } = courseDetails;
    console.log(CourseDetails);

    const handelDownloadPdf=()=>{
        const doc = new jsPDF();

        doc.text(`${title}`, 10, 10);
      
        doc.save("course-details.pdf");
    }
    return (
      <div
        id="full-container"
        className="card col-span-3 bg-base-100 shadow-xl"
      >
        <div className="mx-auto text-center mt-5">
          <p className="mb-3">Download This Course Information</p>
          <Link onClick={handelDownloadPdf} className="btn btn-primary">
            Download PDF
          </Link>
        </div>
        <figure className="px-10 pt-10">
          <img src={image_url} alt={title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-3xl font-bold">{title}</h2>
          <h3 className="text-xl font-bold">{teacher}</h3>
          <p>{details}</p>
          <div>
            <p className="text-blue-700 font-bold text-center">
              Ratting: {rating?.number}
            </p>
            <h3 className="text-blue-700 font-bold ml-3 text-center">
              Price:${price}
            </h3>
          </div>
          <div>
            <Link to={`/chackout/${id}`} className="btn btn-primary">
              Buy Now
            </Link>
          </div>
          <div>
            <Link to={"/courses"} className="btn btn-primary">
              Back all courses
            </Link>
          </div>
        </div>
      </div>
    );
};

export default CourseDetails;