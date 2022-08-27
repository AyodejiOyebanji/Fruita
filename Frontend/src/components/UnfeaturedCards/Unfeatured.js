import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Store } from '../Store/Store';

import { BsCart3 } from 'react-icons/bs';
import { TbJewishStar } from 'react-icons/tb';
import { MdOutlineCompareArrows } from 'react-icons/md';
function Unfeatured(props) {
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
      alert('sorry, product is out of stock');
      return;
    }
    ctxDispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
  };
  return (
    <div>
      {/* {product.map((eachProduct, i) => ( */}
      <div
        class="productCard card "
        data-aos="fade-down"
        data-aos-duration="50s"
      >
        <div className=" d-flex justify-content-center m-2">
          <Link to={`/morefeaturedproduct/${product.caption}`}>
            <img
              src={product.image}
              className=" cardImg card-img-top"
              loading="lazy"
              alt="..."
            />
          </Link>
          {/* <img
              src={text}
                // src={eachProduct.image}
                class="card-img-top"
                alt="..."
                className="cardImg"
                // onClick={() => handleGetDetails(eachProduct)}
                // key={eachProduct.id}
              /> */}
          <div className="allIcons">
            <button
              className="cartBtn btn bg-light"
              onClick={() => addToCart(product)}
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
          <p className="text-center">
            {product.nameP}
            {/* {eachProduct.title} */}
          </p>
          <p className="text-muted text-center">
            #{product.price}
            {/* {eachProduct.price} */}
          </p>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}

export default Unfeatured;
