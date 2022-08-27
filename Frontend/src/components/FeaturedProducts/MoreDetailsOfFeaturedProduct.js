import React, { useContext, useEffect, useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

import Rating from '../Rating/Rating';

import { Helmet } from 'react-helmet-async';
import Loadingbox from './../LoadingBox/Loadingbox';
import MessageBox from '../MessageBox/MessageBox';
import { getError } from './../Error/Error';
import { Store } from '../Store/Store';
import Review from '../ProductReview/Review';

function MoreDetailsOfFeaturedProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const { caption } = params;
  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, product: action.payload, loading: false };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchFeaturedData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/caption/${caption}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchFeaturedData();
  }, [caption]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCart = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    console.log(data);

    if (data.countStatus < quantity) {
      alert('sorry, product is out of stock');
      return;
    }
    ctxDispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    navigate('/cart');
  };
  return (
    <div>
      {loading ? (
        <div>
          <Loadingbox />
        </div>
      ) : error ? (
        <div>
          <MessageBox variant="danger">{error}</MessageBox>
        </div>
      ) : (
        <div>
          <Row>
            <Col md={6}>
              <img
                src={product.image}
                alt={product.nameP}
                className="img-large"
              />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Helmet>
                    <title>{product.nameP}</title>
                  </Helmet>
                  <h1>{product.nameP}</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    rating={product.rating}
                    numberOfReviews={product.numberOfReviews}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: #{product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description:
                  <p>{product.description}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>#{product.price}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          {product.countStatus > 0 ? (
                            <Badge bg="success">Available</Badge>
                          ) : (
                            <Badge bg="danger">Out of Stock</Badge>
                          )}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    {product.countStatus > 0 && (
                      <ListGroup.Item>
                        <div className="d-grid">
                          <button
                            className="addToCartBtn"
                            onClick={() => addToCart()}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </ListGroup.Item>
                    )}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      )}

      <Review product={product} />
    </div>
  );
}

export default MoreDetailsOfFeaturedProduct;
