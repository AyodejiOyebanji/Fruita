import React, { useContext } from "react";
import Rating from "../Rating/Rating";
import { Link } from "react-router-dom";
import axios from "axios";
import { Store } from "../Store/Store";

function Products(props) {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const addToCart = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countStatus < quantity) {
      alert("sorry, product is out of stock");
      return;
    }
    ctxDispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };

  return (
    <div>
      <div class="card shadow h-100">
        <div class="ratio ratio-1x1">
          <Link to={`/morefeaturedproduct/${product.caption}`}>
            <img
              src={product.image}
              class="card-img-top"
              loading="lazy"
              alt="..."
            />
          </Link>
        </div>
        <div class="card-body d-flex flex-column flex-md-row">
          <div class="flex-grow-1">
            <strong className="text-dark">{product.nameP}</strong>

            <Rating
              rating={product.rating}
              numberOfReviews={product.numberOfReviews}
            />
            {product.countStatus === 0 ? (
              <button className="outOfstockBtn" disabled>
                Out of Stock
              </button>
            ) : (
              <button
                className="addToCartBtnReview"
                onClick={() => addToCart(product)}
              >
                {" "}
                Add to Cart
              </button>
            )}
          </div>
          <div class="px-md-2 text-dark">#{product.price}</div>
        </div>
      </div>
    </div>
  );
}

export default Products;