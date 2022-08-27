import React, { useEffect, useReducer } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import LoadingBox from "../LoadingBox/Loadingbox.js";
import MessageBox from "../MessageBox/MessageBox.js";



import Products from "./Products";
import Unfeatured from "../UnfeaturedCards/Unfeatured.js";


function Features() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_REQUEST":
        return { ...state, loading: true };
      case "FETCH_SUCCESS":
        return { ...state, products: action.payload, loading: false };
      case "FETCH_FAIL":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchFeaturedData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");

        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchFeaturedData();
  }, []);

  return (
    <div>
      <div class="swiffy-slider slider-item-show3 slider-item-reveal slider-nav-dark slider-nav-outside-expand">
        <ul class="slider-container py-4" id="slider2">
          {loading ? (
            <div className="d-flex justify-content-center">
              <LoadingBox></LoadingBox>
            </div>
          ) : error ? (
            <div  className="d-flex justify-content-center">
              <MessageBox variant="danger">{error}</MessageBox>
            </div>
          ) : (
            products.map((product) => (
              <li>{product.isFeatured && <Products product={product} />}</li>
            ))
          )}
        </ul>

        <button
          type="button"
          class="slider-nav"
          aria-label="Go to previous"
        ></button>
        <button
          type="button"
          class="slider-nav slider-nav-next"
          aria-label="Go to next"
        ></button>
      </div>

      {/* eachItem starts here */}
      <div className="allCard d-flex flex-row mt-5" >
      {
          products.map((product)=>(
            <Unfeatured product={product}/>
          ))
      }
      </div>








      {/* eachItem ends here */}
      


    </div>
  );
}

export default Features;
