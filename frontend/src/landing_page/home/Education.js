import React from "react";

function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="media\images\education.svg"
            alt="education.svg"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-6 mt-5 p-4 text-muted">
          <h1 className="mb-4 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href=" " style={{ textDecoration: "none" }}>
            Varsity
            <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
          </a>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
