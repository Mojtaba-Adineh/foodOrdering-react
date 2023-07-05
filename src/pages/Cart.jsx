import React from "react";
import Helmet from "./../components/helmet/Helmet";
import CommonSection from "./../components/UI/common-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

import "../styles/cart-page.css";

import { useSelector , useDispatch } from "react-redux";
import { cartActions } from './../redux-store/shopping-cart/cartSlice';

const Cart = () => {
  const cartItmes = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  return (
    <Helmet title={"Cart"}>
      <CommonSection title={"Your Cart"} />

      <section>
          <Container>
            <Row>
              <Col lg="12" md="12">
                {cartItmes.length <= 0 ? (
                  <h5 className="text-center">Your cart is emty!</h5>
                ) : (
                  <table className="table text-center">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                      </tr>
                    </thead>
                    {cartItmes.map((item) => (
                      <Tr key={item.id} item={item} />
                    ))}
                  </table>
                )}
              </Col>

              {cartItmes.length > 0 ? (<div className="mt-5">
                <h6 className="subtotal-text">Subtotal : $<span className="subtotal-amount">{totalAmount}</span></h6>
                <p>Taxes and Shipping will calculate at checkout!</p>
                <div className="cart-page-btns">
                  <button className="addToCard-btn me-4"><Link to={"/foods"}>Continue Shopping</Link></button>
                  <button className="addToCard-btn"><Link to={"/checkout"}>Proceed to Checkout</Link></button>
                </div>
              </div>) : null}
            </Row>
          </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const { image01, title, price, quantity , id } = item;
  const dispatch = useDispatch()

  const removeItem = () => {
    dispatch(cartActions.removeItem(id))
  }

  return (
    <tbody>
      <tr>
        <td className="img-tableData">
          <img src={image01} alt="" />
        </td>
        <td>{title}</td>
        <td>{price}$</td>
        <td>{quantity}x</td>
        <td className="delete-row-btn">
          <i onClick={removeItem} className="ri-delete-bin-line"></i>
        </td>
      </tr>
    </tbody>
  );
};

export default Cart;
