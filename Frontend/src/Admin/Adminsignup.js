import React from "react";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import {useFormik} from "formik";
import * as yup from "yup"
// import axios from 'axios'
// import { useSnackbar } from 'notistack';
// import { useNavigate } from 'react-router';
function Adminsignup() {
  // const { enqueueSnackbar } = useSnackbar();
  //   const navigate= useNavigate()
    const formik = useFormik({
        initialValues:{
            nameOfOrganization:"",
            firstName:"",
            lastName:"",
            address:"",
            email:"",
            password:""

        }, onSubmit: (values) => {
            // axios.post("http://localhost:4000/users/signup",values).then((res)=>{
        
            //   if(res.data.status){
            //     enqueueSnackbar(`${res.data.message}`, { variant: 'success' });
            //     navigate("/login")
            //   }else{
            //     enqueueSnackbar(`${res.data.message}`, { variant: 'error' });
            //   }
              

            //  }).catch(err=>{
              
            //   enqueueSnackbar(`${err.message}`, { variant: 'error' });
            //  })
           

        },
        validationSchema: yup.object({
            nameOfOrganization: yup.string().required(`This field is requied`),
            firstName: yup.string().required(`This field is requied`),
            lastName: yup.string().required(`This field is requied`),
            address: yup.string().required(`This field is requied`),
            email: yup.string().required(`This field is requied`).email(`Please, enter a valid email`),
            password: yup.string().required(`This field is requied`).min(8),
        })
      

      
    })


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5">Admin SignUp</h1>
            <form action="/login" method="post" 
            onSubmit={formik.handleSubmit}
            >
              <div className="row">
                <div className=" col-sm-10 col-md-7 col-lg-6 col-xl-6 col-xxl-10">
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Name Of Organization"
                      variant="outlined"
                      className="w-100 mt-3"
                      name="nameOfOrganization"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.nameOfOrganization}
                    />
                    {formik.touched.nameOfOrganization ? (
                      <small className="text-danger">
                        {formik.errors.nameOfOrganization}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="row">
                    <div className="col-sm-10 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="FirstName"
                          variant="outlined"
                          className="w-100 mt-3"
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
                    </div>
                    <div className="col-sm-10 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="LastName"
                          variant="outlined"
                          className="w-100 mt-3"
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
                  </div>

                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Address "
                      variant="outlined"
                      className="w-100 mt-3"
                    //   name="address"
                    //   onChange={formik.handleChange}
                    //   onBlur={formik.handleBlur}
                    //   value={formik.values.address}
                    />
                    {/* {formik.touched.address ? (
                      <small className="text-danger">
                        {formik.errors.address}
                      </small>
                    ) : (
                      ""
                    )} */}
                  </div>

                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      className="w-100 mt-3"
                    //   name="email"
                    //   onChange={formik.handleChange}
                    //   onBlur={formik.handleBlur}
                    //   value={formik.values.email}
                    />
                    {/* {formik.touched.email ? (
                      <small className="text-danger">
                        {formik.errors.email}
                      </small>
                    ) : (
                      ""
                    )} */}
                  </div>

                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      type="password"
                      variant="outlined"
                      className="w-100 mt-3"
                    //   name="password"
                    //   onChange={formik.handleChange}
                    //   onBlur={formik.handleBlur}
                    //   value={formik.values.password}
                    />
                    {/* {formik.touched.password ? (
                      <small className="text-danger">
                        {formik.errors.password}
                      </small>
                    ) : (
                      ""
                    )} */}
                  </div>
                  <button className="signUpBtn w-100 mt-3" type="submit">
                    Sign Up
                  </button>
                </div>
                <small>
                  Already have an account?{" "}
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
  );
}

export default Adminsignup;
