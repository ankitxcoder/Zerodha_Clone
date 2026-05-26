import React from "react";

function Stats() {
  return (
    <div className="container p-3 mb-5">
      <div className="row">
        <div className="col-6 p-5 ">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first-always</h2>
          <p className="text-muted">
            That's why 13+ crore customer trust Zerodha with 3.5+ lakh worth of
            equity investments.
          </p>
          <h2 className="fs-4">Support 24/7 available</h2>
          <p className="text-muted">
            We respect Customer, so 24/7 service aviable for customer , any time
            you can call and resolve your any queries at 0 cost.
          </p>
          <h2 className="fs-4">One to One Call</h2>
          <p className="text-muted">
            We respect Customer, so 24/7 service aviable for customer , any time
            you can call one to one.
          </p>
          <h2 className="fs-4">Total Refund</h2>
          <p className="text-muted">
            We respect Customer, so Total Refund service aviable for customer ,
            any time you can call and raise ticket to take instant refund
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media\images\ecosystem.png" style={{ width: "95%" }} />
          <div className="text-center">
            {/* margin at x axis , margin right not work here  */}
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore Our Project
              <i
                className="fa fa-long-arrow-right ms-2"
                aria-hidden="true"
              ></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Product Demo
              <i
                className="fa fa-long-arrow-right ms-2"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
