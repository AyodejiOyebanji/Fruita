import React, { useState, useContext, useEffect } from "react";
import "../ProductReview/review.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Rating from "./../Rating/Rating";
import TextField from "@mui/material/TextField";
import { Store } from "../Store/Store";
import axios from "axios"
import { useSnackbar } from "notistack";


function Review(props) {
  const { enqueueSnackbar } = useSnackbar();
  const { product } = props;
  const { state} = useContext(Store);
  const {userInfo } = state;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setreview] = useState("")
  const [userReview, setuserReview] = useState(undefined)
  console.log(userReview);
  

  useEffect(() => {
    setuserReview(product.reviews)
  }, [product])
  
 
  
  const submit=()=>{
   let newReview = {review:review,rating:rating, commenter:userInfo.name }
   axios.post(`/api/products/${product._id}/review`, newReview).then((res)=>{
     console.log(res.data.status);
     
     if(res.data.status){
      enqueueSnackbar(res.data.message, { variant: 'success' });

     }else{
      enqueueSnackbar(res.data.message, { variant: 'error' });


     }
     
   }).catch(err=>{
    enqueueSnackbar(err.data.message, { variant: 'error' });
   }) 
  
  }
  
  
 

 
  

  return (
    <div>
      <div className="reviewSection container mt-5">
        <h1>Verified Customer's Feedback</h1>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 ">
                <Card>
                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <p className="veriText">
                          Verified Reviews ({userReview&& userReview.length})
                        </p>
                        <h1 className="float-center">{product.rating}/5</h1>
                        <Rating
                          rating={product.rating}
                          numberOfReviews={userReview&& userReview.length}
                        />
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 ">
                <div className="">
               <h4>COMMENTS FROM VERIFIED PURCHASES({userReview&& userReview.length})</h4> 
                   {userReview&& userReview.map((review,i)=>(
                     <ListGroup>
                       <ListGroup.Item>
                       <Rating
                    rating={review.rating}
                   numberOfReviews={userReview&& userReview.length}
                  />
                  <h4>{review.review}</h4>
                  <h6>{review.commenter}</h6>

                       </ListGroup.Item>
                     </ListGroup>

                  ))} 

                
                <TextField
                  label="Enter your Comment"
                  color="secondary"
                  focused
                  className="w-100 mt-2"
                  onChange={(e)=>setreview(e.target.value)}
                  
                />
                    
                  
                  

                <div className="star-rating">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                      >
                        <span className="star">&#9733;</span>
                      </button>
                    );
                  })}
                </div>
              
                <button className="submitBtn" disabled={review===""}  onClick={()=>submit()}>Submit</button>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
