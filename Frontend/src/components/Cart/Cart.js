import React, { useContext } from "react";
import "../Cart/Cart.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { Store } from "../Store/Store";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MessageBox from "../MessageBox/MessageBox";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cart() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const navigate = useNavigate();

  const actionBtn = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countStatus < quantity) {
      alert("sorry, product is out of stock");
      return;
    }
    ctxDispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };
  const removeItem = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };
  const checkOutBtn = () => {
    navigate("/login?redirect=/address");
  };

  return (
    <div>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      {/* cart item start here */}

      <div className="container">
        <div className="cartHeading  ">
          <h5 className="p-2">Cart({cartItems.length })</h5>
        </div>

        {/* cart item starts here */}
        <Row>
          <Col md={8}>
            {cartItems.length === 0 ? (
              <MessageBox>
                Cart is empty. <Link to="/">Go shopping</Link>
              </MessageBox>
            ) : (
              <ListGroup>
                <table className="table">
                  <thead>
                    <tr>
                 
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item._id}>
                        <td>
                          {" "}
                          <img
                            src={item.image}
                            alt={item.name}
                            className="item_img"
                          />{" "}
                          <Link to={`/product/${item.caption}`}>
                            {item.name}
                          </Link>
                        </td>

                        <td>
                          <Button
                            variant="light"
                            disabled={item.quantity === 1}
                            onClick={() => actionBtn(item, item.quantity - 1)}
                          >
                            <i className="fas fa-minus-circle"></i>
                          </Button>
                        </td>
                        <td>{item.quantity}</td>
                        <td>
                          <Button
                            variant="light"
                            disabled={item.quantity === item.countStatus}
                            onClick={() => actionBtn(item, item.quantity + 1)}
                          >
                            <i className="fas fa-plus-circle"></i>
                          </Button>
                        </td>
                        <td>{item.price}</td>
                        <td>
                          {" "}
                          <Button
                            variant="light"
                            onClick={() => removeItem(item)}
                            className="removeBtn"
                          >
                            <i className="fas fa-trash"></i>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ListGroup>
            )}
          </Col>

          <Col md={4}>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>
                      Subtotal({cartItems.reduce((a, c) => a + c.quantity, 0)}
                      {"  "} items): #
                      {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                    </h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-grid">
                      <button
                        type="button"
                        disabled={cartItems.length === 0}
                        className="checkOutBtn"
                        onClick={() => checkOutBtn()}
                      >
                        {" "}
                        Checkout
                      </button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div></div>
      </div>
    </div>
  );
}

export default Cart;
