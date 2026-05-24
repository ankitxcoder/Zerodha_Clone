import React from "react";

function Award() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg"></img>
        </div>

        <div className="col-6 p-5 mt-3">
          <h1>Largest Stock Broker In India</h1>
          <p className="mb-5">
            2+ million People allready using **** For in th
          </p>
          <div className="row">
            <div className="col-6" p->
              <ul>
                <li>
                  <p>Future & Options</p>
                </li>
                <li>
                  <p>Commodity Derivatves</p>
                </li>
                <li>
                  <p>Mutual Funds</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>IPO</p>
                </li>
                <li>
                  <p>Sales Price</p>
                </li>
                <li>
                  <p>Bond & Growth</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media\images\pressLogos.png" style={{width:"90%"}} />
        </div>
      </div>
    </div>
  );
}

export default Award;
