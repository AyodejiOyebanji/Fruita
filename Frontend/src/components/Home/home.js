import React from "react";
import "../Home/home.css";
import Carousel from "../Carousel/carousel";
import Services from "../Services";
import Item from "../Item";
import Card from "../Card/Card";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import Features from "../FeaturedProducts/Features";
import { Helmet } from "react-helmet-async";
import coconut from "../images/coconut-removebg-preview.png" 




function home() {
  return (
    <div className="whole_home">
      <Helmet>
        <title>Fruity</title>
      </Helmet>
      <Carousel />
      <Features/>

      <Services />
      <Item />
        <Card />  
      <div className="row p-3 d-flex justify-content-center" id="testimony">
        <h2 className="fw-bold text-center">Why do they love us</h2>
        <div
          className="col-md-3 fw-bold card m-2 mt-4 pt-3 h-100 text-center"
          style={{ background: "#F5EDEB" }}
        >
          <div className="d-flex justify-content-center mb-3">
            <img
              src={coconut}
              style={{ width: "70px", height: "70px", borderRadius: "70px" }}
              alt="coconut"
            />
            <p className="ms-3">Designer</p>
          </div>
          "Blood Bank Canine Teeth Larynx Occupational Therapist Oncologist
          Optician Plaque Spinal Tap Stat Strep Optician Plaque Spinal Tap Stat
          Strep..."
        </div>
        <div
          className="col-md-3 fw-bold card m-2 mt-4 pt-3 h-75 text-center"
          style={{ background: "#F5F3EB" }}
        >
          <div className="d-flex justify-content-center mb-3">
            <img
              src={coconut}   alt="coconut"
              style={{ width: "70px", height: "70px", borderRadius: "70px" }}
            />
            <p className="ms-3">Designer</p>
          </div>
          "Blood Bank Canine Teeth Larynx Occupational Therapist Oncologist
          Optician Plaque Spinal Tap Stat Strep Optician Plaque Spinal Tap Stat
          Strep..."
        </div>
        <div
          className="col-md-3 fw-bold card m-2 pt-3 mt-4 h-75 text-center"
          style={{ background: "#EBF4F5" }}
        >
          <div className="d-flex justify-content-center mb-3">
            <img
              src={coconut}   alt="coconut"
              style={{ width: "70px", height: "70px", borderRadius: "70px" }}
            />
            <p className="ms-3">Designer</p>
          </div>
          "Blood Bank Canine Teeth Larynx Occupational Therapist Oncologist
          Optician Plaque Spinal Tap Stat Strep Optician Plaque Spinal Tap Stat
          Strep..."
        </div>
      </div>
      <div className="row m-2 text-center fw-bold">
        <div className="col-md-3">
          <ShoppingCartOutlinedIcon className="fs-1 mb-2" />
          <h5 style={{ color: "#66A500" }}>Free Fast Delivery</h5>
          <p>Online Only Exclusions Apply</p>
        </div>
        <div className="col-md-3">
          <HeadsetMicOutlinedIcon className="fs-1 mb-2" />
          <h5 style={{ color: "#66A500" }}>24/7 Call Support</h5>
          <p>Contact Us 24 Hours A Day</p>
        </div>
        <div className="col-md-3">
          <LocalOfferOutlinedIcon className="fs-1 mb-2" />
          <h5 style={{ color: "#66A500" }}>Our Special Offer</h5>
          <p>Offer Is Any Kind Of Discount</p>
        </div>
        <div className="col-md-3">
          <SentimentSatisfiedAltOutlinedIcon className="fs-1 mb-2" />
          <h5 style={{ color: "#66A500" }}>For Quality Product</h5>
          <p>Sell Highest Quality Item</p>
        </div>
      </div>
    </div>
  );
}

export default home;
