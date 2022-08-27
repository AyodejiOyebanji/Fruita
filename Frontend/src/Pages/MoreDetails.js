import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../components/styles/MoreDetails.css";

import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import MoreDetailsDesp from "../components/MoreDetailsDesp";


function MoreDetails() {
  const [product, setproduct] = useState([]);
  const [allCart, setAllCart] = useState([]);
  // const url = "https://fakestoreapi.com/products";

  let { id } = useParams();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setproduct(res.data)
      // setcurrentProduct(res.data)
    });
  });
 
  useEffect(() => {
    let suntwistArray = localStorage["suntwist"]
      ? JSON.parse(localStorage.suntwist)
      : [];
    setAllCart(suntwistArray);
  }, []);

  // const handleGetDetails = (i) => {
  //   console.log(i.id);

  //   navigate(`/moredetails/${i.id}`);
  // };

  // const addToCart = (i) => {
  //   let allProduct = product[i];
  //   setAllCart(() => {
  //     let newAddedItem = [...allCart, allProduct];
  //     console.log(newAddedItem);
  //     localStorage.setItem("suntwist", JSON.stringify(newAddedItem));
  //     return newAddedItem;
  //   });
  // };
  return (
    <div>
      {/* Card Component starts here  */}
      <div className="container">
        <div className="d-flex justify-content-center my-5">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={product.image} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title display-5">{product.title}</h5>
                  <hr />
        {allCart}
            

                  <p class="card-text text-muted">
                    {product.description}
                  </p>

                  <div className="d-flex justify-content-center">
                    <button className="addToCart btn">
                      {" "}
                      <BsCart3 size="30px" /> ADD TO CART
                    </button>
                  </div>
                  <div className="my-4">
                    <span>Categories: Lorem ipsum dolor sit amet.</span>
                    <br />
                    <span>Product Tags: Lorem ipsum dolor sit amet.</span>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* dESCRIPTION */}
      <MoreDetailsDesp />
    </div>
  );
}

export default MoreDetails;
