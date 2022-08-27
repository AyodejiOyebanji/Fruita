import React, { useEffect } from "react";
// import axios from "axios";
import "../Card/Card.css";
//import { useNavigate } from "react-router-dom";
// import { BsCart3 } from "react-icons/bs";
// import { TbJewishStar } from "react-icons/tb";
// import { MdOutlineCompareArrows } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

function Card() {
  //const [product, setproduct] = useState([]);
  //const [allCart, setAllCart] = useState([]);

  // const url = "https://fakestoreapi.com/products";

  // useEffect(() => {
  //   makeRequest();
  // }, []);

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  // const makeRequest = () => {
  //   axios
  //     .get(url)
  //     .then((response) => {
        
  //       setproduct(response.data);
  //     })
  //     .catch((err) => {
        
  //     });
  // };
  // useEffect(() => {
  //   let suntwistArray = localStorage["suntwist"]
  //     ? JSON.parse(localStorage.suntwist)
  //     : [];
  //   setAllCart(suntwistArray);
  // }, []);

  //const navigate = useNavigate();
  // const handleGetDetails = (i) => {
    

  //   navigate(`/moredetails/${i.id}`);
  // };

 // const addToCart = (i) => {
    //let allProduct = product[i];
    //setAllCart(() => {
      //let newAddedItem = [...allCart, allProduct];
    
      // localStorage.setItem("suntwist", JSON.stringify(newAddedItem));
      // return newAddedItem;
  //   });
  // };
  return (
    <div>
      <div className="allCard d-flex flex-row mt-5">
        {/* {product.map((eachProduct, i) => (
          <div
            class="productCard card "
            data-aos="fade-down"
            data-aos-duration="50s"
          >
            <div className=" d-flex justify-content-center m-2">
              <img
                src={eachProduct.image}
                class="card-img-top"
                alt="..."
                className="cardImg"
                onClick={() => handleGetDetails(eachProduct)}
                key={eachProduct.id}
              />
              <div className="allIcons">
                <button
                  className="cartBtn btn bg-light"
                  onClick={() => addToCart(i)}
                >
                  <BsCart3 size="20px" />
                </button>
                <button className="compareBtn btn bg-light">
                  <MdOutlineCompareArrows size="20px" />
                </button>
                <button className="wishListBtn btn bg-light">
                  <TbJewishStar size="20px" />
                </button>
              </div>
            </div>
            <div class="card-body ">
              <p className="text-center">{eachProduct.title}</p>
              <p className="text-muted text-center">${eachProduct.price}</p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Card;
