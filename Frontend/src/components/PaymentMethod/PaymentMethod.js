import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Form from "react-bootstrap/Form";
import "./payment.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Store } from "../Store/Store";

function PaymentMethod() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;
  useEffect(() => {
    if (shippingAddress.address === "") {
      navigate("/address");
    }
  }, [shippingAddress, navigate]);

  const steps = ["Log in", "Shipping Address", "Payment Method", "Place Order"];

  const [paymetMethodName, setPaymentMethod] = useState(
    paymentMethod || "Paystack"
  );

 
  const continueBtn = (e) => {
    e.preventDefault();
    ctxDispatch({ type: "SAVE_PAYMENT_METHOD", payload: paymetMethodName });
    localStorage.setItem("paymentMethod", paymetMethodName);
    navigate("/PaymentSummary");
  };
  const backBtn=()=>{
    navigate("/address");
  }

  return (
    <div>
      <Helmet>
        <title>Payment Method</title>
      </Helmet>

      {/* stepper starts here */}
      <div className="mt-3">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={(1, 2)} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
      {/* stepper ends here */}

      {/* error display bar */}

      {/* error display bar ends here */}

      <div className="container">
        <h6 className="display-6">Payment Method</h6>
        <div className="mx-5">
          <Form onSubmit={continueBtn}>
            <div className="mb-3">
              <Form.Check
                type="radio"
                id="Paystack"
                label="Paystack"
                value="Paystack"
                checked={paymetMethodName === "Paystack"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <Form.Check
                type="radio"
                id="Flutterwave"
                label="Flutterwave"
                value="Flutterwave"
                checked={paymetMethodName === "Flutterwave"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </div>
            <div className="mb-3"></div>
            <div className="mb-3">
              <Form.Check
                type="radio"
                id="Stripe"
                label="Stripe"
                value="Stripe"
                checked={paymetMethodName === "Stripe"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </div>
            {/* continue and Back button */}
            <div>
              <button className="conBtn">Continue</button>
            </div>
          </Form>

          <button onClick={()=>backBtn()} className="backBtn mt-3">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
