import React from "react";

import "../Carousel/carousel.css";

function carousel() {
  return (
    <>
      <div className="carosel">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-sm-4 col-md-8 col-lg-5 col-xl-5 col-xxl-6 ">
                  <div className="NaturalText p-sm-5 ">
                    <h6 className="natural animate__animated animate__bounce">
                      Natural & Organic{" "}
                    </h6>
                    <h1 className="forty  animate__animated  animate__flash">
                      -40% Offer All Products.
                    </h1>
                    <div className=" ">
                      <button className="shopNowBtn">Shop Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 p-5">
                  <div className="fruits"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default carousel;
