import React from "react";
import "../components/styles/footer.css";
import logo from "../Assest/fruitlogo.jpg"
import TextField from "@mui/material/TextField";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <div className="row mt-5">
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 ">
                  <div className="float-center">
                    <img
                      src={logo}
                      alt="logo"
                      srcset=""
                      className="footerlogo "
                    />
                  </div>
                  <div className="location mt-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellat doloremque veniam Lorem, ipsum.
                  </div>
                  <div className="location mt-2">
                    Lorem ipsum dolor, sit amet
                  </div>
                  <div className="location mt-2">
                    Lorem ipsum dolor, sit amet
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-2">
                  <p className="footerPara fw-bold">INFORMATION</p>
                  <hr className="hr" />
                  <ul>
                    <li className="shortUl">FAQ</li>
                    <li className="shortUl">SHIPPING</li>
                    <li className="shortUl">RETURNS</li>
                    <li className="shortUl">ORDER STATUS</li>
                    <li className="shortUl">GIFT CARD BALANCE</li>
                    <li className="shortUl">ACCESSIBILITY</li>
                  </ul>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-2">
                  <p className="footerPara fw-bold">MY ACCOUNT</p>
                  <hr className="hr" />
                  <ul>
                    <li className="shortUl">MY ACCOUNT</li>
                    <li className="shortUl">CHECKOUT</li>
                    <li className="shortUl">VALIDATION</li>
                    <li className="shortUl">WHISHLIST</li>
                    <li className="shortUl">TERMS OF USE</li>
                    <li className="shortUl">ACCESSIBILITY</li>
                  </ul>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                  <p className="footerPara fw-bold">NEWSLETTERS</p>
                  <hr className="hr" />
                  <p>Lorem ipsum dolor, sit amet consectetur adipisici</p>

                  <TextField
                    label="Enter your email"
                    color="secondary"
                    focused
                    className="w-100"
                  />

                  <div>
                    <button className="sendMail mt-2">SEND EMAIL</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
