import React from "react";
import "../styles/carosel.css";


function Carosel() {
  return (
    <>
     

      <div className="carosel">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="discountSection col-5   my-md-5 my-lg-5 ">
                  <div className="NaturalText ">
                    <h6 className="natural ">Natural & Organic </h6>
                    <h1 className="forty ">-40% Offer All Products.</h1>
                  </div>
                  <div className="my-md-5 ">
                    <button className="shopNowBtn">Shop Now</button>
                  </div>
                </div>
                <div className="col-5  m-md-5 m-lg-5 ">
                  <div className="fruits">
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carosel;
