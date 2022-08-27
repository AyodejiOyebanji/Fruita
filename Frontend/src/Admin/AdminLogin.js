import React from 'react'
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import {useFormik} from "formik";
import * as yup from "yup"
// import axios from 'axios'
// import { useSnackbar } from 'notistack';
// import { useNavigate } from 'react-router';

function AdminLogin() {

// const { enqueueSnackbar } = useSnackbar();
  // const navigate= useNavigate()
  const formik = useFormik({
    initialValues:{
      email:"",
      password:"",

  },onSubmit: (values)=>{
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


  },validationSchema: yup.object({
    email: yup.string().required(`This field is requied`).email(`please, enter a verlid email`),
    password: yup.string().required(`This field is requied`).min(8)
  })

  })

  return (
    <div>

<div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5">Admin Login</h1>
            <form action=""  method="post" onSubmit={formik.handleSubmit}>
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
                  <Link to="/adminlogin">
                  <span className="loginText">Log In</span>{" "}

                  </Link>
                  
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin