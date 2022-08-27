import React, { useContext, useEffect } from "react";
import { TextField } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useSnackbar } from "notistack";
import "../Login/login.css";
import { Helmet } from "react-helmet-async";
import { Store } from "./../Store/Store";
import { getError } from "./../Error/Error";

function login() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post("/api/users/signin", values);
        console.log(data);
        ctxDispatch({ type: "USER_SIGNIN", payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate(redirect || "/");
      } catch (err) {
        enqueueSnackbar(getError(err), { variant: "error" });
      }
      // axios.post("http://localhost:4000/users/signin",values).then((res)=>{
      //   console.log(res);
      //   if(res.data.status){
      //     enqueueSnackbar(`${res.data.message}`, { variant: 'success' });
      //     localStorage.token=res.data.token
      //      navigate("/dashboard")
      //   }else{
      //     enqueueSnackbar(`${res.data.message}`, { variant: 'error' });
      //   }

      // }).catch(err=>{
      //   enqueueSnackbar(`${err.message}`, { variant: 'error' });
      // })
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required(`This field is requied`)
        .email(`please, enter a valid email`),
      password: yup
        .string()
        .required(`This field is requied`)
        .min(6),
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
        <title>Sign In</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5">Sign In</h1>
            <form action="" onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className=" col-sm-10 col-md-7 col-lg-6 col-xl-6 col-xxl-10">
                  <div>
                    <button type=""></button>
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
                  <button className="logInBtn w-100 mt-3" type="submit">
                    Sign Up
                  </button>
                </div>
                <small>
                  Don't have an account?{" "}
                  <Link to="/signup">
                    <span className="loginText">Create your account</span>{" "}
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

export default login;
