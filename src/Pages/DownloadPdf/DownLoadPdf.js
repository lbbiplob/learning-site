import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import Photo from '../../Images/griphic.jpg'

const ref = React.createRef();

function DownLoadPdf() {
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button className="btn" onClick={toPdf}>
            Download Pdf
          </button>
        )}
      </Pdf>
      <div
        className="mx-auto"
        style={{ width: 595, height: 842, background: "white" }}
        ref={ref}
      >
        <h1 className="text-3xl">Courese information</h1>
        <h1>
          graphic design all courses teacher are very expart. if you buy this
          course you can access this corse life time and get update content .
          when some thing is new in this field{" "}
        </h1>
        <h2 className="text-xl font-bold">There are some benefit of you</h2>
        <ul className="font-bold">
          <li>24/7 support </li>
          <li>Screen sharing option </li>
          <li>Lesion note </li>
          <li> Assingment </li>
        </ul>

        <img src={Photo} alt="" />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<DownLoadPdf />, rootElement);

export default DownLoadPdf;
