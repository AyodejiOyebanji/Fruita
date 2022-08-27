import React, { useEffect, useContext } from "react";
import "../Signup/signup.css";
import { TextField } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useSnackbar } from "notistack";
import { Store } from "./../Store/Store";

function signup() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPass: "",
    },
    onSubmit: async (values) => {
      console.log(values);

      if (values.password !== values.confirmPass) {
        enqueueSnackbar(`Password does not match`, { variant: "error" });
        return;
      }
      await axios
        .post("/api/users/signup", values)
        .then((res) => {
          console.log(res);
          if (res.data.status) {
            ctxDispatch({ type: "USER_SIGNIN", payload: res.data });
            localStorage.setItem("userInfo", JSON.stringify(res.data));
            enqueueSnackbar(`${res.data.message}`, { variant: "success" });
            navigate(redirect || "/");
          } else {
            enqueueSnackbar(`${res.data.message}`, { variant: "error" });
          }
        })
        .catch((err) => {
          enqueueSnackbar(`${err.message}`, { variant: "error" });
        });
    },

    validationSchema: yup.object({
      name: yup.string().required(`This field is requied`),
      email: yup
        .string()
        .required(`This field is requied`)
        .email(`please, enter a valid email`),
      password: yup
        .string()
        .required(`This field is requied`)
        .min(8),
      confirmPass: yup.string().required(`This field is requied`),
    }),
  });
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5">SignUp</h1>
            <form action="" method="post" onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className=" col-sm-10 col-md-7 col-lg-6 col-xl-6 col-xxl-10">
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Fullname"
                      variant="outlined"
                      className="w-100 mt-3"
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.touched.name ? (
                      <small className="text-danger">
                        {formik.errors.name}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>

                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      className="w-100 mt-3"
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

                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      type="password"
                      variant="outlined"
                      className="w-100 mt-3"
                      name="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password ? (
                      <small className="text-danger">
                        {formik.errors.password}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Confirm Password"
                      variant="outlined"
                      type="password"
                      className="w-100 mt-3"
                      name="confirmPass"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPass}
                    />
                    {formik.touched.confirmPass ? (
                      <small className="text-danger">
                        {formik.errors.confirmPass}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>

                  <button className="signUpBtn w-100 mt-3" type="submit">
                    Sign Up
                  </button>
                </div>
                <small>
                  Already have an account?,
                  <Link to="/login" className="text-decoration-none">
                    {" "}
                    Sign In here
                  </Link>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signup;
