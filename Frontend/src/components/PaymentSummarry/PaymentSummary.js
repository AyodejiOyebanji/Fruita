import React, { useContext, useEffect, useReducer, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "../PaymentSummarry/PaymentSummary.css";
// import PaystackPop from "@paystack/inline.js"
// import PaystackPop from "@paystack/inline-js";
import { Helmet } from "react-helmet-async";
import { useSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "./../Store/Store";
import { getError } from "../Error/Error";
import axios from "axios";
import LoadingBox from "../LoadingBox/Loadingbox";

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_REQUEST":
      return { ...state, loading: true };
    case "CREATE_SUCCESS":
      return { ...state, loading: false };
    case "CREATE_FAIL":
      return { ...state, loading: false };
    default:
      return state;
  }
};
function PaymentSummary() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const steps = ["Log in", "Shipping Address", "Payment Method", "Place Order"];

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const [disp, setdisp] = useState({});
  useEffect(() => {
    setdisp(cart.shippingAddress);
  }, []);

  const roundomizeMoney = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
  cart.itemsPrice = roundomizeMoney(
    cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );
  cart.shippingPrice =
    cart.ItemsPrice > 100 ? roundomizeMoney(0) : roundomizeMoney(10);
  cart.taxPrice = roundomizeMoney(0 * cart.ItemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice;

  const placeOrder = async () => {
    try {
      dispatch({ type: "CREATE_REQUEST" });
      const { data } = await axios.post(
        "/api/orders",
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          totalPrice: cart.totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      ctxDispatch({ type: "CART_CLEAR" });
      dispatch({ type: "CREATE_SUCCESS" });
      localStorage.removeItem("cartItems");
      navigate(`/order/${data.order._id}`);
    } catch (err) {
      dispatch({ type: "CREATE_FAIL" });
      enqueueSnackbar(getError(err), { variant: "error" });
    }
  };
  useEffect(() => {
    if (!cart.paymentMethod) {
      navigate("/paymentmethod");
    }
  }, [cart, navigate]);

  return (
    <div>
      <Helmet>
        <title>Order Summarry</title>
      </Helmet>

      {/* stepper starts here */}
      <div className="mt-3">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={(1, 2, 3)} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
      {/* stepper ends here */}

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 ">
                <div className="placeOrderText">
                  <h2 className="display-6 mt-2">Order Summary</h2>
                </div>
                <div className="shippingDetails shadow">
                  <p className="descriptionText p-3">
                    Name: {disp.firstName} {disp.lastName}
                  </p>
                </div>

                <div className="shippingDetails shadow">
                  <p className="descriptionText p-3">
                    Shipping Address:{"  "}
                    {disp.address} ,{disp.city}, {disp.state}{" "}
                  </p>
                  <Link to="/address" className="ms-2">
                    Edit
                  </Link>
                </div>

                <div className="shippingDetails shadow mt-2">
                  <p className="descriptionText p-3">
                    Payment Method:{cart.paymentMethod}
                  </p>
                </div>

                {/* table starts here */}

                <div className="shippingDetailsTable shadow mt-2">
                  <p className="descriptionText p-3">Order Item</p>

                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name of Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.cartItems.map((item, i) => (
                        <tr key={item}>
                          <th scope="row">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="loopedImg"
                            />
                          </th>
                          <td>{item.caption}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price}</td>
                        
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className=" checkOutDiv col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 shadow">
                <p className="descriptionText text-center">Order Summary</p>
                <hr />
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12">
                        <p>
                          Items:{" "}
                          <span className="float-end">
                            #{cart.itemsPrice.toFixed(2)}
                          </span>{" "}
                        </p>
                        <p>
                          Shipping:{" "}
                          <span className="float-end">
                            #{cart.shippingPrice.toFixed(2)}
                          </span>{" "}
                        </p>

                        <h3>
                          Total:{" "}
                          <span className="float-end">
                            #{cart.totalPrice.toFixed(2)}
                          </span>{" "}
                        </h3>
                      </div>
                      <div className="d-flex justify-content-center">
                       { loading===true ?<LoadingBox></LoadingBox>  :<button
                          className="placeOrderBtn"
                          onClick={() => placeOrder()}
                        >
                          Place Order
                        </button>
                        }
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSummary;
