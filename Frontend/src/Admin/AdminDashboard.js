import React, {useState} from "react";
import { TextField } from "@mui/material";
import "../Admin/Admindashboard.css";
import { useFormik } from "formik";
import * as yup from "yup"
import axios from "axios";
import { useSnackbar } from "notistack";
function AdminDashboard() {
  const { enqueueSnackbar } = useSnackbar();
    const [file, setfile] = useState("")
   const getFile=(e)=>{
       const myFile= e.target.files[0]
       const reader= new FileReader()
       reader.readAsDataURL(myFile)
       reader.onload=()=>{
        setfile(reader.result);
         
       }
       
      

   }
  
   const formik = useFormik({
     initialValues:{
      nameP:"",  
      
      category:"",
      caption:"",
      price:"",
      description:"",
      rating:"",
      countStatus:"",
      numberOfReviews:"",
      isFeatured:"",
    }, onSubmit: async(values)=>{
      console.log(values)
      if(file===""){
      enqueueSnackbar(`Please Upload an Image`, { variant: 'error' });

      }else{
       axios.post("/api/products/uploadproduct", {...values, image:file}
        ).then((res)=>{
          console.log(res);
          
          
        }).catch(err=>{
          console.log(err);
          
        })
       
          
        
      
        
      }
      
         


      
      


      
    },
     validationSchema:yup.object({
      nameP:yup.string().required("This Field is required"),
      category:yup.string().required("This Field is required"),
      caption:yup.string().required("This Field is required"),
      price:yup.string().required("This Field is required"),
      description:yup.string().required("This Field is required"),
      rating:yup.string().required("This Field is required"),
      countStatus:yup.string().required("This Field is required"),
      numberOfReviews:yup.string().required("This Field is required"),
      isFeatured:yup.string().required("This Field is required"),


    })
      
   })
   
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Products</h1>
            <h4>Create a Product</h4>
            <div>
              
            <TextField
                id="outlined-basic"
                type="file"
                variant="outlined"
                className="w-100 mt-2"
                name="image"
                onChange={(e)=>getFile(e)} 
                required
              />
                
              </div>

            <form  onSubmit={formik.handleSubmit}>
            <div>
            
            <TextField
              id="outlined-basic"
              label="Name"
              type="text"
              variant="outlined"
              className="w-100 mt-2"
              name="nameP"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nameP}
              required
            />
              {formik.touched.nameP ? (
                      <small className="text-danger">
                        {formik.errors.nameP}
                      </small>
                    ) : (
                      ""
                    )}

            </div>
            <div>
              
             <TextField
              id="outlined-basic"
              label="caption (Please Input the same thing as name)"
              type="text"
              variant="outlined"
              className="w-100 mt-2"
              name="caption"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.caption}
              required
            />
              {formik.touched.caption ? (
                      <small className="text-danger">
                        {formik.errors.caption}
                      </small>
                    ) : (
                      ""
                    )}
            </div>
           
            <div>
              
            <select className="form-control mt-2" name="category" onChange={formik.handleChange}>
              <option >Select Category</option>
              <option> fleshy Fruit</option>
              <option>  Dry Fruit</option>
              <option>Others</option>
            </select>
            </div>
            {formik.touched.category ? (
                      <small className="text-danger">
                        {formik.errors.category}
                      </small>
                    ) : (
                      ""
                    )}

        <div>
          
            <TextField
              id="outlined-basic"
              label="Price"
              type="number"
              variant="outlined"
              className="w-100 mt-2"
              name="price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
              required
            />
              {formik.touched.price ? (
                      <small className="text-danger">
                        {formik.errors.price}
                      </small>
                    ) : (
                      ""
                    )}
        </div>
          <div>
            
              <select className="form-control mt-2" name="rating" onChange={formik.handleChange} required>
              <option >Select Rating</option>
              <option>0.5</option>
              <option> 1</option>
              <option>1.5</option>
              <option>2</option>
              <option>2.5</option>
              <option>3</option>
              <option>3.5</option>
              <option>4</option>
              <option>4.5</option>
              <option>5</option>
            </select>
            {formik.touched.rating ? (
                      <small className="text-danger">
                        {formik.errors.rating}
                      </small>
                    ) : (
                      ""
                    )}
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Description"
              type="text"
              variant="outlined"
              className="w-100 mt-2"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              required
            />
              {formik.touched.description ? (
                      <small className="text-danger">
                        {formik.errors.description}
                      </small>
                    ) : (
                      ""
                    )}
            
          </div>
          <div>
            
            <TextField
              id="outlined-basic"
              label="Available Number"
              type="number"
              variant="outlined"
              className="w-100 mt-2"
              name="countStatus"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.countStatus}
              required
            />
              {formik.touched.countStatus ? (
                      <small className="text-danger">
                        {formik.errors.countStatus}
                      </small>
                    ) : (
                      ""
                    )}
          </div>

<div>
  
            <TextField
              id="outlined-basic"
              label="Number Of reviews"
              type="number"
              variant="outlined"
              className="w-100 mt-2"
              name="numberOfReviews"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.numberOfReviews}
              required
            

            />
             {formik.touched.numberOfReviews ? (
                      <small className="text-danger">
                        {formik.errors.numberOfReviews}
                      </small>
                    ) : (
                      ""
                    )}
            
</div>

<div>
            <select className="form-control mt-2" name="isFeatured" onChange={formik.handleChange}>
              <option> Feature</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            {formik.touched.isFeatured ? (
                      <small className="text-danger">
                        {formik.errors.isFeatured}
                      </small>
                    ) : (
                      ""
                    )}
  
</div>

            <div>

              <button  className="upLoadBtn w-100 mt-2" type="submit" >Upload</button>
            </div>
            </form>
         

          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
