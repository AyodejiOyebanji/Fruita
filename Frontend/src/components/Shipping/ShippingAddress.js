import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "../Shipping/shipping.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Store } from "../Store/Store";

function ShippingAddress() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;
  const formik = useFormik({
    initialValues: {
      firstName: `${shippingAddress.firstName || ""}`,
      lastName: `${shippingAddress.lastName || ""}`,
      phoneNumber: `${shippingAddress.phoneNumber || ""}`,
      address: `${shippingAddress.address || ""}`,
      email: `${shippingAddress.email || ""}`,
      apartment: `${shippingAddress.apartment || ""}`,
      city: `${shippingAddress.city || ""}`,
      state: `${shippingAddress.state || ""}`,
      postalcode: `${shippingAddress.postalcode || ""}`,
    },
    onSubmit: (values) => {
      ctxDispatch({
        type: "SAVE_SHIPPING_ADDRESS",
        payload: {
          values,
        },
      });
      localStorage.setItem("shippingAddress", JSON.stringify(values));
      navigate("/paymentmethod");
    },
    validationSchema: yup.object({
      firstName: yup.string().required(`This field is required`),
      lastName: yup.string().required(`This field is required`),
      phoneNumber: yup
        .string()
        .required(`This field is required`)
        .min(11, "Phone number must be at least 11 digit "),
      address: yup.string().required(`This field is required`),
      email: yup
        .string()
        .required(`This field is requied`)
        .email(`please, enter a verlid email`),
      apartment: yup.string().required(`This field is required`),
      city: yup.string().required(`This field is required`),
      state: yup.string().required(`This field is required`),
      postalcode: yup
        .string()
        .required(`This field is required`)
        .min(6, "Postalcode must be at least 6 characters"),
    }),
  });
  useEffect(() => {
    if (!userInfo) {
      navigate("/login?redirect=/address");
    }
  }, [userInfo, navigate]);

  const steps = ["Log in", "Shipping Address", "Payment Method", "Place Order"];
  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>

      <div className="container">
        <div>
          <h2>Shipping Address</h2>

          {/* stepper starts here */}

          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          {/* Stepper ends here */}
        </div>

        <div className="mt-3">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="" onSubmit={formik.handleSubmit}>
                  <div className="row ">
                    <div className="col-6 ">
                      <TextField
                        id="outlined-basic"
                        label="FirstName"
                        variant="outlined"
                        className="w-100"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                      />
                      {formik.touched.firstName ? (
                        <small className="text-danger">
                          {formik.errors.firstName}
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="col-6 ">
                      <TextField
                        id="outlined-basc"
                        label="LastName"
                        variant="outlined"
                        className="w-100 "
                        name="lastName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                      />
                      {formik.touched.lastName ? (
                        <small className="text-danger">
                          {formik.errors.lastName}
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 mt-3">
                      <TextField
                        id="outlined-basic"
                        label="Phone number"
                        variant="outlined"
                        className="w-100"
                        type="number"
                        name="phoneNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phoneNumber}
                      />
                      {formik.touched.phoneNumber ? (
                        <small className="text-danger">
                          {formik.errors.phoneNumber}
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="col-6 mt-3">
                      <TextField
                        id="outlined-basic"
                        type="email"
                        label="Email"
                        variant="outlined"
                        className="w-100"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                      {formik.touched.email ? (
                        <small className="text-danger">
                          {formik.errors.email}
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <TextField
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    className="w-100 mt-3"
                    name="address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                  />
                  {formik.touched.address ? (
                    <small className="text-danger">
                      {formik.errors.address}
                    </small>
                  ) : (
                    ""
                  )}
                  <TextField
                    id="outlined-basic"
                    label="Apartment,Suite,Unit etc. (optional)"
                    variant="outlined"
                    className="w-100 mt-3"
                    name="apartment"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.apartment}
                  />

                  <TextField
                    id="outlined-basic"
                    label="Town/City"
                    variant="outlined"
                    className="w-100 mt-3"
                    name="city"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                  />
                  {formik.touched.city ? (
                    <small className="text-danger">{formik.errors.city}</small>
                  ) : (
                    ""
                  )}
                  <div className="row ">
                    <div className="col-6 mt-3">
                      <TextField
                        id="outlined-basic"
                        label="State"
                        variant="outlined"
                        className="w-100"
                        name="state"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.state}
                      />
                      {formik.touched.state ? (
                        <small className="text-danger">
                          {formik.errors.state}
                        </small>
                      ) : (
                        ""
                      )}{" "}
                    </div>
                    <div className="col-6 mt-3">
                      <TextField
                        id="outlined-basic"
                        label="Postalcode/Zip"
                        variant="outlined"
                        className="w-100"
                        name="postalcode"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.postalcode}
                      />

                      {formik.touched.postalcode ? (
                        <small className="text-danger">
                          {formik.errors.postalcode}
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  {/* continue button starts here */}
                  <div className="mt-3">
                    <button className="continueBtn" type="submit">
                      Continue
                    </button>
                  </div>

                  {/* continue button ends here */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress;
